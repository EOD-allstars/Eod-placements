/*
  EOD team list. Edit this file when teams change.

  For each team:
    discipline  "cheer" or "dance"
    level       shown on the family's summary card, e.g. "Level 3" or "Jazz"
    logo        a logo file in the repo, or null to show the team name in chrome text
    tall        true for logos that are taller than they are wide
    training    [day, time] pairs shown on the summary card

  Team names in your spreadsheet must match these names (capitals and spaces don't matter).
  Levels and training times below are placeholders.
*/
window.EOD_CONFIG = {
  season: 2027,

  // Countdown date used only until a date is saved on the staff page (Sydney time).
  defaultRelease: "2026-11-13T19:00:00+11:00",

  teams: {
    "Sparkle":         { discipline: "cheer", level: "[Level]", logo: null, training: [["SAT", "9:00–10:00am"]] },
    "Baby Boss Girls": { discipline: "cheer", level: "[Level]", logo: null, training: [["MON", "4:00–5:00pm"]] },
    "Tiny Diamonds":   { discipline: "cheer", level: "[Level]", logo: "tiny-diamonds.png", training: [["TUE", "4:00–5:30pm"], ["THU", "4:00–5:30pm"]] },
    "Lil Leopards":    { discipline: "cheer", level: "[Level]", logo: null, training: [["MON", "4:00–5:30pm"], ["WED", "4:00–5:30pm"]] },
    "Savage Katz":     { discipline: "cheer", level: "[Level]", logo: null, training: [["TUE", "5:30–7:00pm"], ["THU", "5:30–7:00pm"]] },
    "Cheetahs":        { discipline: "cheer", level: "[Level]", logo: null, training: [["MON", "5:30–7:00pm"], ["WED", "5:30–7:00pm"]] },
    "IBK":             { discipline: "cheer", level: "[Level]", logo: null, training: [["TUE", "7:00–9:00pm"], ["FRI", "5:00–7:00pm"]] },
    "Lady Lynx":       { discipline: "cheer", level: "[Level]", logo: null, training: [["MON", "7:00–9:00pm"], ["WED", "7:00–9:00pm"]] },
    "Pink Kitties":    { discipline: "cheer", level: "[Level]", logo: "pink-kitties.png", training: [["MON", "5:00–7:00pm"], ["WED", "5:00–7:00pm"]] },
    "Miss Purrrfect":  { discipline: "cheer", level: "[Level]", logo: null, training: [["THU", "7:00–9:00pm"]] },
    "Pink Assassins":  { discipline: "cheer", level: "[Level]", logo: null, training: [["TUE", "7:00–9:00pm"], ["THU", "7:00–9:00pm"]] },
    "Claw Katz":       { discipline: "cheer", level: "[Level]", logo: null, training: [["WED", "5:30–7:30pm"], ["FRI", "4:00–6:00pm"]] },
    "Lady Diamonds":   { discipline: "cheer", level: "[Level]", logo: null, training: [["MON", "7:00–9:00pm"], ["FRI", "6:00–8:00pm"]] },
    "Pink Panthers":   { discipline: "cheer", level: "[Level]", logo: null, training: [["WED", "7:00–9:00pm"], ["FRI", "5:00–7:00pm"]] },

    "Open Premier":    { discipline: "dance", level: "[Style]", logo: "open-premier.png", training: [["TUE", "7:00–9:00pm"]] },
    "Notorious":       { discipline: "dance", level: "[Style]", logo: "notorious.png", tall: true, training: [["THU", "6:00–8:00pm"]] }
  }
};
