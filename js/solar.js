gsap.set('#galaxy', {transformStyle:"preserve-3d", rotationX: 80})
gsap.set('#sun', {transformStyle:"preserve-3d", rotationX: -80})
gsap.set('.orbit', {transformStyle:"preserve-3d"})
gsap.set('.pos', {transformStyle:"preserve-3d", perspective: 400})
gsap.set('.planet', {transformStyle:"preserve-3d"})
gsap.set('.ring', {transformStyle:"preserve-3d", rotationX: 90})

var mercuryTimeline = gsap.timeline({repeat: -1, defaults: {ease: Linear.easeNone}});

var venusTimeline = gsap.timeline({repeat: -1, defaults: {ease: Linear.easeNone}});

var earthTimeline = gsap.timeline({repeat: -1, defaults: {ease: Linear.easeNone}});

var marsTimeline = gsap.timeline({repeat: -1, defaults: {ease: Linear.easeNone}});

var jupiterTimeline = gsap.timeline({repeat: -1, defaults: {ease: Linear.easeNone}});

var saturnTimeline = gsap.timeline({repeat: -1, defaults: {ease: Linear.easeNone}});

var uranusTimeline = gsap.timeline({repeat: -1, defaults: {ease: Linear.easeNone}});

var neptuneTimeline = gsap.timeline({repeat: -1, defaults: {ease: Linear.easeNone}});

var cometTimeline = gsap.timeline({repeat: -1, repeatDelay:5 ,defaults: {ease: Power4.easeIn}})

cometTimeline.fromTo('#comet', 4, {rotation: 30, scaleY: 0}, {rotation: 30, scaleY: 1, x: -1300, y: 1500})

mercuryTimeline.fromTo('#mercury', 3, {rotation: 0}, {rotation: -360})
  .fromTo('#mercury .pos', 3, {rotation: 0, rotationY: 0,rotationX: -90}, {rotation: 360, rotationY: 360, rotationX: -90}, 0)

venusTimeline.fromTo('#venus', 7.67, {rotation: 0}, {rotation: -360}, 0)
  .fromTo('#venus .pos', 7.67, {rotation: 0, rotationY: 0,rotationX: -90}, {rotation: 360, rotationY: 360, rotationX: -90}, 0)

earthTimeline.fromTo('#earth', 12.44, {rotation: 0}, {rotation: -360}, 0)
  .fromTo('#earth .pos', 12.44, {rotation: 0, rotationY: 0,rotationX: -90}, {rotation: 360, rotationY: 360, rotationX: -90}, 0)

marsTimeline.fromTo('#mars', 15.61, {rotation: 0}, {rotation: -360}, 0)
  .fromTo('#mars .pos', 15.61, {rotation: 0, rotationY: 0,rotationX: -90}, {rotation: 360, rotationY: 360, rotationX: -90}, 0)

jupiterTimeline.fromTo('#jupiter', 149.31, {rotation: 0}, {rotation: -360}, 0)
  .fromTo('#jupiter .pos', 149.31, {rotation: 0, rotationY: 0,rotationX: -90}, {rotation: 360, rotationY: 360, rotationX: -90}, 0)

jupiterTimeline.seek(30);

saturnTimeline.fromTo('#saturn', 360.85, {rotation: 0}, {rotation: -360}, 0)
  .fromTo('#saturn .pos', 360.85, {rotation: 0, rotationY: 30,rotationX: -90}, {rotation: 360, rotationY: 30, rotationX: -90}, 0)

saturnTimeline.seek(300);

uranusTimeline.fromTo('#uranus', 1045.22, {rotation: 0}, {rotation: -360}, 0)
  .fromTo('#uranus .pos', 1045.22, {rotation: 0, rotationY: 0,rotationX: -90}, {rotation: 360, rotationY: 0, rotationX: -90}, 0)

neptuneTimeline.fromTo('#neptune', 2053.125, {rotation: 0}, {rotation: -360}, 0)
  .fromTo('#neptune .pos', 2053.125, {rotation: 0, rotationY: 0,rotationX: -90}, {rotation: 360, rotationY: 0, rotationX: -90}, 0)

neptuneTimeline.seek(1000);