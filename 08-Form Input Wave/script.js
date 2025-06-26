
window.onload = function () {
  const labels = document.querySelectorAll("label")
  labels.forEach((label)=>{
    for(let i = 0; i < label.children.length; i++){
      const span = label.children[i];
      span.style.transitionDelay = `${i * 50}ms`;
    }
  })
}