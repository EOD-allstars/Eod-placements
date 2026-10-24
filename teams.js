/*
  EOD team list. This is the only file you need to edit when teams change.

  For each team:
    discipline  "cheer" or "dance"
    level       shown on the family's summary card, e.g. "Level 3" or "Jazz"
    logo        a file in the logos folder, or null to show the team name in chrome text
    tall        true for logos that are taller than they are wide
    training    [day, time] pairs shown on the summary card

  Training times below are placeholders.
*/
window.EOD_CONFIG = {
  season: 2027,

  // Decision day shown in the countdown (Sydney time).
  defaultRelease: "2026-11-13T19:00:00+11:00",

  teams: {
    "Pink Kitties":   { discipline: "cheer", level: "[Level]", logo: "logos/pink-kitties.png",  training: [["MON", "5:00–7:00pm"], ["WED", "5:00–7:00pm"]] },
    "Tiny Diamonds":  { discipline: "cheer", level: "[Level]", logo: "logos/tiny-diamonds.png", training: [["TUE", "4:00–5:30pm"], ["THU", "4:00–5:30pm"]] },
    "Pink Assassins": { discipline: "cheer", level: "[Level]", logo: null, training: [["MON", "7:00–9:00pm"], ["WED", "7:00–9:00pm"]] },
    "Cheetahs":       { discipline: "cheer", level: "[Level]", logo: null, training: [["TUE", "5:30–7:30pm"], ["THU", "5:30–7:30pm"]] },
    "Lady Lynx":      { discipline: "cheer", level: "[Level]", logo: null, training: [["MON", "4:00–5:30pm"], ["WED", "4:00–5:30pm"]] },
    "IBK":            { discipline: "cheer", level: "[Level]", logo: null, training: [["TUE", "7:00–9:00pm"], ["FRI", "5:00–7:00pm"]] },
    "Pink Panthers":  { discipline: "cheer", level: "[Level]", logo: null, training: [["WED", "5:30–7:30pm"], ["FRI", "4:00–6:00pm"]] },
    "Miss Purrrfect": { discipline: "cheer", level: "[Level]", logo: null, training: [["THU", "7:00–9:00pm"]] },

    "Open Premier":   { discipline: "dance", level: "[Style]", logo: "logos/open-premier.png", training: [["TUE", "7:00–9:00pm"]] },
    "Notorious":      { discipline: "dance", level: "[Style]", logo: "logos/notorious.png", tall: true, training: [["THU", "6:00–8:00pm"]] }
  }
};
