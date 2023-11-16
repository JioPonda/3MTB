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
  hwTitle,
  hwP1,
  hwP2,
  hwP3,
  hwP4,
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

// Color Selection

colors.addEventListener("click", function () {
  if (colorsSelector.style.display === "flex") {
    colorsSelector.style.display = "none";
  } else {
    colorsSelector.style.display = "flex";
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
  if (page.style.backgroundColor == "black") {
    changeColor("black", redCircle1, redCircle2, textBlack, redCircle1);
  } else {
    changeColor(redBgc, redCircle1, redCircle2, textBlack, redCircle1);
  }
});

orange.addEventListener("click", function () {
  localStorage.setItem("selectedColor", "orange");
  if (page.style.backgroundColor == "black") {
    changeColor(
      "black",
      orangeCircle1,
      orangeCircle2,
      textBlack,
      orangeCircle1
    );
  } else {
    changeColor(
      orangeBgc,
      orangeCircle1,
      orangeCircle2,
      textBlack,
      orangeCircle1
    );
  }
});

yellow.addEventListener("click", function () {
  localStorage.setItem("selectedColor", "yellow");
  if (page.style.backgroundColor == "black") {
    changeColor(
      "black",
      yellowCircle1,
      yellowCircle2,
      textBlack,
      yellowCircle1
    );
  } else {
    changeColor(
      yellowBgc,
      yellowCircle1,
      yellowCircle2,
      textBlack,
      yellowCircle1
    );
  }
});

green.addEventListener("click", function () {
  localStorage.setItem("selectedColor", "green");
  if (page.style.backgroundColor == "black") {
    changeColor("black", greenCircle2, greenCircle1, textBlack, greenCircle2);
  } else {
    changeColor(greenBgc, greenCircle2, greenCircle1, textBlack, greenCircle2);
  }
});

blue.addEventListener("click", function () {
  localStorage.setItem("selectedColor", "blue");
  if (page.style.backgroundColor == "black") {
    changeColor("black", blueCircle2, blueCircle1, textBlack, blueCircle2);
  } else {
    changeColor(blueBgc, blueCircle2, blueCircle1, textBlack, blueCircle2);
  }
});

purple.addEventListener("click", function () {
  localStorage.setItem("selectedColor", "purple");
  if (page.style.backgroundColor == "black") {
    changeColor(
      "black",
      purpleCircle2,
      purpleCircle1,
      textBlack,
      purpleCircle2
    );
  } else {
    changeColor(
      purpleBgc,
      purpleCircle2,
      purpleCircle1,
      textBlack,
      purpleCircle2
    );
  }
});

pink.addEventListener("click", function () {
  localStorage.setItem("selectedColor", "pink");
  if (page.style.backgroundColor == "black") {
    changeColor("black", pinkCircle2, pinkCircle1, textBlack, pinkCircle2);
  } else {
    changeColor(pinkBgc, pinkCircle2, pinkCircle1, textBlack, pinkCircle2);
  }
});

//  Save selected color

document.addEventListener("DOMContentLoaded", function () {
  const selectedColor = localStorage.getItem("selectedColor");
  if (selectedColor) {
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

// Dark Theme

moon.addEventListener("click", function () {
  page.style.backgroundColor = "black";
  titel1.style.color = textWhite;
  titel2.style.color = textWhite;
  colors.style.color = textWhite;
  p2.style.color = textWhite;
  p3.style.color = textWhite;
  hwTitle.style.color = textWhite;
  hwP1.style.color = textWhite;
  hwP2.style.color = textWhite;
  hwP3.style.color = textWhite;
  hwP4.style.color = textWhite;
  moon.style.display = "none";
  sun.style.display = "block";
});

sun.addEventListener("click", function () {
  const selectedColor = localStorage.getItem("selectedColor");
  if (selectedColor) {
    switch (selectedColor) {
      case "red":
        page.style.backgroundColor = redBgc;
        break;
      case "orange":
        page.style.backgroundColor = orangeBgc;
        break;
      case "yellow":
        page.style.backgroundColor = yellowBgc;
        break;
      case "green":
        page.style.backgroundColor = greenBgc;
        break;
      case "blue":
        page.style.backgroundColor = blueBgc;
        break;
      case "purple":
        page.style.backgroundColor = purpleBgc;
        break;
      case "pink":
        page.style.backgroundColor = pinkBgc;
        break;
    }
  }
  titel1.style.color = textBlack;
  titel2.style.color = textBlack;
  colors.style.color = textBlack;
  p2.style.color = textBlack;
  p3.style.color = textBlack;
  hwTitle.style.color = textBlack;
  hwP1.style.color = textBlack;
  hwP2.style.color = textBlack;
  hwP3.style.color = textBlack;
  hwP4.style.color = textBlack;
  moon.style.display = "block";
  sun.style.display = "none";
});
