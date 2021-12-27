"use strict";

// Adding Animations
const animationsTimeline = new TimelineMax();
// 404 Number
animationsTimeline.staggerFromTo(
  "#num-of-404-svg",
  0.5,
  { opacity: 0 },
  { opacity: 1, repeat: -1, yoyo: true },
  0.1
);
// Moving camera up and down
animationsTimeline.staggerFromTo(
  "#cam-of-404-svg",
  1,
  { y: 10 },
  { y: 0, repeat: -1, yoyo: true },
  0.1
);
