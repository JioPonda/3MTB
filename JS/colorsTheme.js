import {
  page,
  moon,
  sun,
  titel1,
  titel2,
  colors,
  colorsSelector,
  red,
  orange,
  yellow,
  green,
  blue,
  purple,
  pink,
  allCircle,
  circle1,
  circle2,
  startButton,
  p2,
  p3,
} from "./baseSelector.js";

import {
  redBgc,
  redCircle1,
  redCircle2,
  orangeBgc,
  orangeCircle1,
  orangeCircle2,
  yellowBgc,
  yellowCircle1,
  yellowCircle2,
  greenBgc,
  greenCircle1,
  greenCircle2,
  blueBgc,
  blueCircle1,
  blueCircle2,
  purpleBgc,
  purpleCircle1,
  purpleCircle2,
  pinkBgc,
  pinkCircle1,
  pinkCircle2,
  darkBgc,
  textWhite,
  textBlack,
} from "./colors.js";

// Dark Theme

moon.addEventListener("click", function () {
  page.style.backgroundColor = "black";
  titel1.style.color = textWhite;
  titel2.style.color = textWhite;
  colors.style.color = textWhite;
  p2.style.color = textWhite;
  p3.style.color = textWhite;
  moon.style.display = "none";
  sun.style.display = "block";
});

sun.addEventListener("click", function () {
  page.style.backgroundColor = "#58afd8";
  titel1.style.color = textBlack;
  titel2.style.color = textBlack;
  colors.style.color = textBlack;
  p2.style.color = textBlack;
  p3.style.color = textBlack;
  moon.style.display = "block";
  sun.style.display = "none";
});

// Color Selection

colors.addEventListener("click", function () {
  if (colorsSelector.style.display === "flex") {
    colorsSelector.style.display = "none";
  } else {
    colorsSelector.style.display = "flex";
  }
});

document.addEventListener("click", function (e) {
  if (!colors.contains(e.target) && !colorsSelector.contains(e.target)) {
    colorsSelector.style.display = "none";
    console.log("les couleurs disparaisent");
  }
});

// Color Change

function changeColor(
  background,
  circle1Color,
  circle2Color,
  buttonColor,
  bgButtonColor
) {
  page.style.backgroundColor = background;
  circle1.style.backgroundColor = circle1Color;
  circle2.style.backgroundColor = circle2Color;
  startButton.style.color = buttonColor;
  startButton.style.backgroundColor = bgButtonColor;
}

red.addEventListener("click", function () {
  localStorage.setItem("selectedColor", "red");
  changeColor(redBgc, redCircle1, redCircle2, textBlack, redCircle1);
});

orange.addEventListener("click", function () {
  localStorage.setItem("selectedColor", "orange");
  changeColor(
    orangeBgc,
    orangeCircle1,
    orangeCircle2,
    textBlack,
    orangeCircle1
  );
});

yellow.addEventListener("click", function () {
  localStorage.setItem("selectedColor", "yellow");
  changeColor(
    yellowBgc,
    yellowCircle1,
    yellowCircle2,
    textBlack,
    yellowCircle1
  );
});

green.addEventListener("click", function () {
  localStorage.setItem("selectedColor", "green");
  changeColor(greenBgc, greenCircle2, greenCircle1, textBlack, greenCircle2);
});

blue.addEventListener("click", function () {
  localStorage.setItem("selectedColor", "blue");
  changeColor(blueBgc, blueCircle2, blueCircle1, textBlack, blueCircle2);
});

purple.addEventListener("click", function () {
  localStorage.setItem("selectedColor", "purple");
  changeColor(
    purpleBgc,
    purpleCircle2,
    purpleCircle1,
    textBlack,
    purpleCircle2
  );
});

pink.addEventListener("click", function () {
  localStorage.setItem("selectedColor", "pink");
  changeColor(pinkBgc, pinkCircle2, pinkCircle1, textBlack, pinkCircle2);
});

//  Save selected color

// Lorsque la page est chargée
document.addEventListener("DOMContentLoaded", function () {
  // Vérifiez si une couleur est enregistrée dans le localStorage
  const selectedColor = localStorage.getItem("selectedColor");
  if (selectedColor) {
    // Appliquez la couleur enregistrée
    switch (selectedColor) {
      case "red":
        page.style.backgroundColor = redBgc;
        circle1.style.backgroundColor = redCircle1;
        circle2.style.backgroundColor = redCircle2;
        startButton.style.color = "black";
        startButton.style.backgroundColor = redCircle1;
        break;
      case "orange":
        page.style.backgroundColor = orangeBgc;
        circle1.style.backgroundColor = orangeCircle1;
        circle2.style.backgroundColor = orangeCircle2;
        startButton.style.color = "black";
        startButton.style.backgroundColor = orangeCircle1;
        break;
      case "yellow":
        page.style.backgroundColor = yellowBgc;
        circle1.style.backgroundColor = yellowCircle1;
        circle2.style.backgroundColor = yellowCircle2;
        startButton.style.color = "black";
        startButton.style.backgroundColor = yellowCircle1;
        break;
      case "green":
        page.style.backgroundColor = greenBgc;
        circle1.style.backgroundColor = greenCircle2;
        circle2.style.backgroundColor = greenCircle1;
        startButton.style.color = "black";
        startButton.style.backgroundColor = greenCircle2;
        break;
      case "blue":
        page.style.backgroundColor = blueBgc;
        circle1.style.backgroundColor = blueCircle2;
        circle2.style.backgroundColor = blueCircle1;
        startButton.style.color = "black";
        startButton.style.backgroundColor = blueCircle2;
        break;
      case "purple":
        page.style.backgroundColor = purpleBgc;
        circle1.style.backgroundColor = purpleCircle2;
        circle2.style.backgroundColor = purpleCircle1;
        startButton.style.color = "black";
        startButton.style.backgroundColor = purpleCircle2;
        break;
      case "pink":
        page.style.backgroundColor = pinkBgc;
        circle1.style.backgroundColor = pinkCircle2;
        circle2.style.backgroundColor = pinkCircle1;
        startButton.style.color = "black";
        startButton.style.backgroundColor = pinkCircle2;
        break;
    }
  }
});
