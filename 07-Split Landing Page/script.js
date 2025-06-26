const container = document.querySelector(".container")

document.addEventListener('mousemove', (event)=>{
  const target = event.target.closest(".split");
  if(target===null){
    container.classList.remove("hover-left");
    container.classList.remove("hover-right");
    return;
  }
  const isLeft = target.classList.contains("left");
  container.classList.toggle("hover-left",  isLeft);
  container.classList.toggle("hover-right", !isLeft);
})

document.addEventListener('mouseout', ()=>{
  container.classList.remove("hover-left");
  container.classList.remove("hover-right");
})