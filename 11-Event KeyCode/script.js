const keyDiv = document.getElementById('insert');

document.addEventListener('keydown', (event) => {
  const keyName = event.key === ' ' ? 'Space' : event.key;
  const keyCode = event.keyCode;
  const code = event.code;

  keyDiv.innerHTML = `
    <div class="key">
      ${keyName}
      <small>event.key</small>
    </div>
    <div class="key">
      ${keyCode}
      <small>event.keyCode</small>
    </div>
    <div class="key">
      ${code}
      <small>event.code</small>
    </div>
    `


})