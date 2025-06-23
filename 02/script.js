const prev_btn = document.querySelector(".btn#prev");
const next_btn = document.querySelector(".btn#next");
const progress_container = document.querySelector(".progress-container");
const progress = progress_container?.querySelector("#progress");
const circles = progress_container?.querySelectorAll(".circle");
let cur_step = 1;
const MAX_STEP = circles.length;

function update() {
    circles.forEach((circle, idx) => {
        circle.classList.toggle("active", idx < cur_step);
    });
    progress.style.width = `${(100/(MAX_STEP-1))*(cur_step-1)}%`;
    prev_btn.disabled = cur_step === 1;
    next_btn.disabled = cur_step === MAX_STEP;
}

next_btn.addEventListener('click', (event)=>{
    if(cur_step === MAX_STEP) {
        return;
    }
    cur_step += 1;
    update();
})

prev_btn.addEventListener('click', (event)=>{
    if(cur_step === 1) {
        return;
    }
    cur_step -= 1;
    update();
})

update();