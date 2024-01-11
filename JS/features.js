import {
  page,
  switchTheme,
  colorsAndWorks,
  p2,
  p3,
  titel1,
  titel2,
  howItWorks,
  startBreathing,
  allCircle,
  circle1,
  circle2,
  startButton,
} from "./baseSelector.js";

// How it work
p2.addEventListener("click", function () {
  if (howItWorks.style.display == "none") {
    (p2.style.display = "none"),
      (p3.style.display = "flex"),
      (howItWorks.style.display = "flex"),
      (startBreathing.style.display = "none"),
      console.log("How it work apparait");
  } else {
    (p2.style.display = "flex"),
      (p3.style.display = "none"),
      (howItWorks.style.display = "none"),
      (startBreathing.style.display = "flex"),
      console.log("How it work disparait");
  }
});

p3.addEventListener("click", function () {
  if (howItWorks.style.display == "flex") {
    (p2.style.display = "flex"),
      (p3.style.display = "none"),
      (howItWorks.style.display = "none"),
      (startBreathing.style.display = "flex"),
      console.log("Start Breathing apparait");
  } else {
    (p2.style.display = "none"),
      (p3.style.display = "flex"),
      (howItWorks.style.display = "flex"),
      (startBreathing.style.display = "none"),
      console.log("Start Breathing disparait");
  }
});

// Breathing
allCircle.addEventListener("click", function () {
  const switchThemeOpacity = getComputedStyle(switchTheme).opacity;
  const colorsAndWorksOpacity = getComputedStyle(colorsAndWorks).opacity;
  const titel1Opacity = getComputedStyle(titel1).opacity;
  const titel2Opacity = getComputedStyle(titel2).opacity;
  const startButtonOpacity = getComputedStyle(startButton).opacity;

  if (
    switchThemeOpacity === "1" &&
    colorsAndWorksOpacity === "1" &&
    titel1Opacity === "1" &&
    titel2Opacity === "1" &&
    startButtonOpacity === "1"
  ) {
    alert("tout est encore visible");
    switchTheme.style.transition = "opacity 1s";
    switchTheme.style.opacity = 0;

    colorsAndWorks.style.transition = "opacity 1s";
    colorsAndWorks.style.opacity = 0;

    titel1.style.transition = "opacity 1s";
    titel1.style.opacity = 0;

    titel2.style.transition = "opacity 1s";
    titel2.style.opacity = 0;

    startButton.style.transition = "opacity 1s";
    startButton.style.opacity = 0;

    // Attendre que les animations de disparition soient terminées
    setTimeout(function () {
      // Centrer le cercle en plein milieu de la page
      allCircle.classList.add("circle-transition");
      allCircle.style.position = "fixed";
      allCircle.style.top = "50%";
      allCircle.style.left = "50%";
      allCircle.style.transform = "translate(-50%, -50%)";

      // Augmenter la taille du cercle
      allCircle.style.width = "200px";
      allCircle.style.height = "200px";
    }, 1000);

    setTimeout(function () {
      // Déplacer le cercle en douceur
      allCircle.style.transform = "translate(-50%, -50%) scale(2)"; // Taille double
    }, 2000); // 1000 millisecondes (1 seconde) + 1000 millisecondes (2 secondes au total)
  } else {
    alert("tout est déja disparue");
  }
});
