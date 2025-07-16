const smallTubes = document.querySelectorAll(".small.tube");
const water = document.getElementById("water")
const numberOfTubes = smallTubes.length;

smallTubes.forEach((tube,idx)=>{
  tube.addEventListener("click", ()=>highlightSmallTubes(idx))
})

updateBigTube()

function updateBigTube() {
  const fullCups = document.querySelectorAll(".small.tube.active");
  const percent = (fullCups.length * 100 / numberOfTubes);
  water.style.height = `${percent}%`
  water.innerText = `${percent}%`

}

function highlightSmallTubes(idx) {
  if (smallTubes[idx].classList.contains("active") 
      && ((idx + 1 === numberOfTubes)||!smallTubes[idx].nextElementSibling.classList.contains("active"))) {
    idx -= 1;
  }
  smallTubes.forEach((tube, i) => {
    if(i<=idx){
      tube.classList.add("active")
    }else{
      tube.classList.remove("active")
    }
  })

  updateBigTube();
}