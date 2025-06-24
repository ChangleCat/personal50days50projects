window.onload = () => {
  const bg = document.querySelector(".bgimg");
  const loadText = document.querySelector("#progress");

  const animationDuration = 2000;

  function scale(num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  }

  function animationLoop(timestamp) {
    if (!startTimestamp) {
      startTimestamp = timestamp;
    }

    const deltaTime = timestamp - startTimestamp;

    const load = Math.min((deltaTime / animationDuration) * 100, 100);

    bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`;
    loadText.style.opacity = `${scale(load, 0, 100, 1, 0)}`;
    loadText.innerHTML = `${Math.floor(load)}%`;

    if (timestamp < animationDuration) {
      requestAnimationFrame(animationLoop);
    } else {
      bg.style.filter = `blur(0px)`;
      loadText.style.opacity = '0';
      loadText.innerHTML = `100%`;
      loadText.style.pointerEvents = "none";
    }
  }

  let startTimestamp = null;

  requestAnimationFrame(animationLoop);
};