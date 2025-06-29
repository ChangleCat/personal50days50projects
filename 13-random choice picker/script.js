const textarea = document.getElementById("textarea");
const tagsContainer = document.getElementById("tags-container");

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);
    
    randomSelect();
  }


});

function createTags(input) {
  const tags = input.split(",").map(tag => tag.trim()).filter(tag => tag);
  tagsContainer.innerHTML = "";
  tags.forEach(tag => {
    const tagElement = document.createElement("div");
    tagElement.classList.add("tag");
    tagElement.innerText = tag;
    tagsContainer.appendChild(tagElement);
  });
}

function randomSelect() {
  const tags = document.querySelectorAll(".tag");
  if (tags.length === 0) return;

  const totalRounds = 3; // 转几圈
  const finalIndex = Math.floor(Math.random() * tags.length); // 最终停留索引
  const totalSteps = totalRounds * tags.length + finalIndex;

  let currentStep = 0;
  let currentIndex = 0;
  let prevTag = null;
  let lastTimestamp = null;

  function animateSelect(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;

    // 计算当前步的延迟，实现减速
    const progress = currentStep / totalSteps;
    const minDelay = 60, maxDelay = 400;
    // 使用平方函数使得延迟从小到大增加
    const delay = minDelay + (maxDelay - minDelay) * Math.pow(progress, 2);

    if (timestamp - lastTimestamp >= delay) {
      if (prevTag) unhighlightTag(prevTag);

      const tag = tags[currentIndex];
      highlightTag(tag);
      prevTag = tag;

      currentStep++;
      currentIndex = (currentIndex + 1) % tags.length;
      lastTimestamp = timestamp;
    }

    if (currentStep <= totalSteps) {
      requestAnimationFrame(animateSelect);
    } else {
      // 最终高亮停留
      if (prevTag) unhighlightTag(prevTag);
      highlightTag(tags[finalIndex]);
    }
  }

  requestAnimationFrame(animateSelect);
}

// function randomSelect() {
//   const tags = document.querySelectorAll(".tag");
//   if (tags.length === 0) return;
//   let selectedTag = null;
//   const animationDuration = 5000;
//   const animationInterval = 100;
//   let startTimestamp = null;
//   const numberOfIterations = Math.floor(animationDuration / animationInterval);
//   let currentIteration = 0;

//   function selectingAnimation(timestamp) {
//     if (!startTimestamp) {
//       startTimestamp = timestamp;
//     }
//     const deltaTime = timestamp - startTimestamp;

//     if (currentIteration >= numberOfIterations) {
//       return;
//     }
//     if (deltaTime / animationInterval > currentIteration) {
//       currentIteration++;
//       if (selectedTag) {
//         unhighlightTag(selectedTag);
//       }
//       const randomIndex = Math.floor(Math.random() * tags.length);
//       selectedTag = tags[randomIndex];
//       highlightTag(selectedTag);
//     }
//     requestAnimationFrame(selectingAnimation);
//   }

//   requestAnimationFrame(selectingAnimation);

// }

function highlightTag(tag) {
  tag.classList.add("selected");
}

function unhighlightTag(tag) {
  tag.classList.remove("selected");
}