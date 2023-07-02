document.querySelectorAll(".faq-toggle").forEach((el) => {
  el.addEventListener("click", () => {
    el.parentElement.classList.toggle("active");
  });
});
