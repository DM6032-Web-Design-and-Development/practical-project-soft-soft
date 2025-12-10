document.getElementById("shopBtn").addEventListener("click", function() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});

document.getElementsByTagName("Scrub 1")[1].onclick = function () { alert("Available!"); };

document.getElementById("regForm").addEventListener("submit", function(e) {
e.preventDefault();
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;


alert(`Thank you, ${name}! Your message has been received.`);
this.reset();
});
}
