const close_btn = document.getElementById("close")
const open_btn = document.getElementById("open")
const container = document.querySelector(".container")

close_btn.addEventListener('click', (event)=>{
  container.classList.remove("show-nav");
})

open_btn.addEventListener('click', (event)=>{
  container.classList.add("show-nav");
})