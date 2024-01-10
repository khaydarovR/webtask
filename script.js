const slider = document.querySelector(".slider");
const progress = document.querySelector(".progress");

slider.addEventListener("mouseup", function () {
  const current = this.value;

  progress.style.width = current + "%";

  if (current < 20) {
    progress.style.backgroundColor = "red";
  } else {
    progress.style.backgroundColor = "green";
  }
});

//15
var nameInput = document.getElementById("name");
var ageInput = document.getElementById("age");
var emailInput = document.getElementById("email");
var websiteInput = document.getElementById("website");

nameInput.addEventListener("input", function () {
  if (nameInput.validity.valid) {
    document.getElementById("name-status").innerHTML = "&#10004;";
    document.getElementById("name-status").className = "checked";
  } else {
    document.getElementById("name-status").innerHTML = "&#10006;";
    document.getElementById("name-status").className = "invalid";
  }
});

ageInput.addEventListener("input", function () {
  if (ageInput.validity.valid) {
    document.getElementById("age-status").innerHTML = "&#10004;";
    document.getElementById("age-status").className = "checked";
  } else {
    document.getElementById("age-status").innerHTML = "&#10006;";
    document.getElementById("age-status").className = "invalid";
  }
});

emailInput.addEventListener("input", function () {
  if (emailInput.validity.valid) {
    document.getElementById("email-status").innerHTML = "&#10004;";
    document.getElementById("email-status").className = "checked";
  } else {
    document.getElementById("email-status").innerHTML = "&#10006;";
    document.getElementById("email-status").className = "invalid";
  }
});

websiteInput.addEventListener("input", function () {
  if (websiteInput.validity.valid) {
    document.getElementById("website-status").innerHTML = "&#10004;";
    document.getElementById("website-status").className = "checked";
  } else {
    document.getElementById("website-status").innerHTML = "&#10006;";
    document.getElementById("website-status").className = "invalid";
  }
});
