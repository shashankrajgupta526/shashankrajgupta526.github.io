// Smooth scroll for internal links
const links = document.querySelectorAll("a[href^='#']");

for (const link of links) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// Scroll reveal animation (basic fade-in effect)
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1,
});

sections.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});
