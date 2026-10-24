// Family-side database access for the EOD Decision Day site.
// Families never sign in: knowing a code is what unlocks a placement, and only after release.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, getDoc, updateDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const db = getFirestore(initializeApp({
  apiKey: "AIzaSyBz7Tjw7siXLx7cnCIZXhLzxy2YNI7ICxY",
  authDomain: "eod-placements.firebaseapp.com",
  projectId: "eod-placements",
  storageBucket: "eod-placements.firebasestorage.app",
  messagingSenderId: "435764044771",
  appId: "1:435764044771:web:909ba9ab04c50c97c6b6d6"
}));

window.EODdb = {
  async settings() {
    const s = await getDoc(doc(db, "settings", "public"));
    if (!s.exists()) return null;
    const d = s.data();
    return { releaseAt: d.releaseAt ? d.releaseAt.toDate() : null, confirmBy: d.confirmBy || "" };
  },
  // { ...placement } if found, null if the code is wrong, { locked: true } if reveals aren't open yet
  async lookup(code) {
    try {
      const s = await getDoc(doc(db, "placements", code));
      return s.exists() ? { code, ...s.data() } : null;
    } catch (e) {
      if (e && e.code === "permission-denied") return { locked: true };
      throw e;
    }
  },
  async opened(code) {
    try { await updateDoc(doc(db, "placements", code), { openedAt: serverTimestamp() }); } catch (e) {}
  },
  async respond(code, status) {
    await updateDoc(doc(db, "placements", code), { status, respondedAt: serverTimestamp() });
  }
};
window.dispatchEvent(new Event("eoddb"));
