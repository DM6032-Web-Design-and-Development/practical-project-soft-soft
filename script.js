document.getElementById("shopBtn").addEventListener("click", function() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});

function Oscrub() {
  alert("Available!");
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
e.preventDefault();
const name = document.getElementById("name").value;
const gmail = document.getElementById("gmail").value;
const message = document.getElementById("message").value;


alert(`Thank you, ${name}! Your message has been received.`);
this.reset();
});
}
