const container = document.querySelector(".container")

let rafId = null;

container.addEventListener('mousemove', (event) => {
  if (rafId) return;
  rafId = requestAnimationFrame(() => {
    const target = event.target.closest(".split");
    if (target === null) {
      container.classList.remove("hover-left");
      container.classList.remove("hover-right");
    } else {
      const isLeft = target.classList.contains("left");
      container.classList.toggle("hover-left", isLeft);
      container.classList.toggle("hover-right", !isLeft);
    }
    rafId = null;
  });
});

container.addEventListener('mouseleave', () => {
  container.classList.remove("hover-left");
  container.classList.remove("hover-right");
})