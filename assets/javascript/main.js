document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".wrap-1 .navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Wrap-2
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".wrap-2 .core-values a");
  const contents = document.querySelectorAll(".wrap-2 .value-content");

  // default first active
  links[0].classList.add("active");
  contents[0].classList.add("active");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      links.forEach(l => l.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      this.classList.add("active");
      document.querySelector(this.getAttribute("href")).classList.add("active");
    });
  });

});


// Wrap-3
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".wrap-3 .core-values li");
  const links = document.querySelectorAll(".wrap-3 .core-values a");
  const contents = document.querySelectorAll(".wrap-3 .value-content");

  // default first active
  items[0].classList.add("active");
  links[0].classList.add("active");
  contents[0].classList.add("active");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      items.forEach(li => li.classList.remove("active"));
      links.forEach(a => a.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));

      this.classList.add("active");
      this.parentElement.classList.add("active");
      document.querySelector(this.getAttribute("href")).classList.add("active");
    });
  });
});


