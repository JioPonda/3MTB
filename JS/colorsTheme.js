const page = document.querySelector("#body");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const titel1 = document.querySelector("#titel1");
const titel2 = document.querySelector("#titel2");

moon.addEventListener("click", function () {
  page.style.backgroundColor = "black";
  titel1.style.color = "#efefef";
  titel2.style.color = "#efefef";
  moon.style.display = "none";
  sun.style.display = "block";
});

sun.addEventListener("click", function () {
  page.style.backgroundColor = "#58afd8";
  titel1.style.color = "#000000";
  titel2.style.color = "#000000";
  moon.style.display = "block";
  sun.style.display = "none";
});
