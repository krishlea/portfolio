document.getElementById('contactForm').onsubmit = function(event) {
  event.preventDefault();
  document.getElementById('formMessage').textContent = "Thank you! We'll contact you soon.";
  this.reset();
};

// Smooth scroll for nav links (optional enhancement)
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const sec = document.querySelector(this.getAttribute('href'));
    if (sec) {
      e.preventDefault();
      window.scrollTo({
        top: sec.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});
