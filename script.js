document.getElementById("shopBtn").addEventListener("click", function() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});

function Oscrub() {
  alert("Available!");
}
function Cscrub() {
  alert("Available!");
}
function Mscrub() {
  alert("Available!");
}
function CHscrub() {
  alert("Available!");
}
function Nscrub() {
  alert("Available!");
}
function Lscrub() {
  alert("Available!");
}
function toner() {
  alert("Available!");
}
function clean() {
  alert("Available!");
}
function moist() {
  alert("Available!");
}
var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";

  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }

  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }

  fixStepIndicator(n);
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");

  if (n == 1 && !validateForm()) return false;

  x[currentTab].style.display = "none";
  currentTab = currentTab + n;

  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }

  showTab(currentTab);
}

function validateForm() {
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");

  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }

  if (valid) {
    document.getElementsByClassName("step")[currentTab].classList.add("finish");
  }

  return valid;
}   // ← FIXED — THIS WAS MISSING

function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");

  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }

  x[n].className += " active";
}
