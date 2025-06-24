const toggle_btn = document.querySelector(".btn");
const search_container = document.querySelector(".search");
const input_frame = document.querySelector(".input");

toggle_btn.addEventListener('click', () => {
  search_container.classList.toggle("active");
  if (search_container.classList.contains("active")) {
    input_frame.focus();
  }
});

document.addEventListener('click', (event) => {
  const search = event.target.closest(".search");
  if (search === null) {
    search_container.classList.remove("active");
  }
});