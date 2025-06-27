const applause = document.getElementById("applause");
const boo = document.getElementById("boo");
const gasp = document.getElementById("gasp");
const tada = document.getElementById("tada");

const sounds = [applause, boo, gasp, tada];

const btns = document.querySelectorAll("button");
btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    sounds.forEach(sound => {
      sound.pause();
      sound.currentTime = 0;
    });
    sounds[index].play();
  });
});
