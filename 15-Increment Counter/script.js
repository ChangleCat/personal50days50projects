class CounterContainer extends HTMLElement {

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'closed' });

    this.target = parseInt(this.getAttribute('target'));
    this.nowNum = 0;
    this.DURATION = 1000;
    let templateElem = document.getElementById('increment-counter-template');
    let content = templateElem.content.cloneNode(true);
    content.querySelector('.icon').innerText = this.getAttribute('icon');
    content.querySelector('.counter').innerText = 0;
    content.querySelector('.counter').setAttribute("data-target", this.target);
    content.querySelector('.explain').innerText = this.getAttribute("explain");
    this.shadow.appendChild(content);

    // this.content = content;
    this.startTime = null;

    //! 非常重要，这个函数的 this 必须指向这个 CounterContainer 的实例
    // this.requestIncrementAnimation = this.requestIncrementAnimation.bind(this);
    //* 或者使用箭头函数
  }

  connectedCallback() {
    requestAnimationFrame(this.requestIncrementAnimation);
  }

  requestIncrementAnimation = (timestamp) => {
    if (!this.startTime) {
      this.startTime = timestamp;
    }
    const deltaTime = timestamp - this.startTime

    const nowNum = Math.floor(this.target * deltaTime / this.DURATION);

    if (deltaTime < this.DURATION) {
      this.shadow.querySelector('.counter').innerText = nowNum.toString();
      requestAnimationFrame(this.requestIncrementAnimation);
    } else {
      this.shadow.querySelector('.counter').innerText = this.target;
    }
  }
}

customElements.define("counter-container", CounterContainer);