// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close the mobile menu after choosing a section
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Print the CV or save it as a PDF
document.getElementById("printCv").addEventListener("click", function () {
  window.print();
});

// Show the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Demo contact form: prepares an email in the visitor's email app.
// Replace recipient with your actual email address.
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("senderName").value.trim();
  const email = document.getElementById("senderEmail").value.trim();
  const message = document.getElementById("senderMessage").value.trim();
  const recipient = "your.email@example.com";
  const subject = encodeURIComponent("Portfolio message from " + name);
  const body = encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message);

  document.getElementById("formMessage").textContent = "Opening your email app…";
  window.location.href = "mailto:" + recipient + "?subject=" + subject + "&body=" + body;
});
