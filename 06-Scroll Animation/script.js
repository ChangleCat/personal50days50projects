const boxes = document.querySelectorAll(".box");

function show() {
  const triggerBottom = window.innerHeight * 0.8;
  boxes.forEach(box =>{
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      requestAnimationFrame(()=>box.classList.add("show"));
    }else{
      requestAnimationFrame(()=>box.classList.remove("show"));
      
    }
  })
}

document.addEventListener('scroll', show);
window.addEventListener('load', show);
