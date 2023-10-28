import { page, p2, p3, howItWorks, startBreathing } from "./baseSelector.js";

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
