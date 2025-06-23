const container = document.querySelector(".app")

container.addEventListener('click', (event)=>{
    const imgContainer = event.target.closest('.panel');
    if (!imgContainer || !container.contains(imgContainer)) {
        return;
    }
    const lastActive = container.querySelector(".active");

    if(lastActive!==event.target){
        lastActive?.classList.remove("active")
        event.target.classList.add("active")
    }
})
