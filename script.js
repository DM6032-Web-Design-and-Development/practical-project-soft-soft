document.getElementById("shopBtn").addEventListener("click", function() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});


var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";

  document.getElementById("prevBtn").style.display = n == 0 ? "none" : "inline";

  document.getElementById("nextBtn").innerHTML =
    n == x.length - 1 ? "Submit" : "Next";

  fixStepIndicator(n);
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");

  if (n == 1 && !validateForm()) return false;

  x[currentTab].style.display = "none";

  currentTab += n;

  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }

  showTab(currentTab);
}

function validateForm() {
  var x = document.getElementsByClassName("tab");
  var y = x[currentTab].querySelectorAll("input, textarea");
  var valid = true;

  y.forEach(el => {
    if (el.value === "") {
      el.classList.add("invalid");
      valid = false;
    }
  });

  if (valid) {
    document.getElementsByClassName("step")[currentTab].classList.add("finish");
  }

  return valid;
}

function fixStepIndicator(n) {
  var x = document.getElementsByClassName("step");
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
  }
  x[n].classList.add("active");
}
