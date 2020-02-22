
const playSound = (e) => {

  const keyNum = e.keyCode;

  const audioTag = document.querySelector(`audio[data-key='${keyNum}']`);
  const drumBox = document.querySelector(`div[data-key='${keyNum}']`);

  if (audioTag === null) {
    return
  } else {
    drumBox.classList.add('playing');
    audioTag.currentTime = 0; // lets you hit same drum over and over before audio file complets its first play (resets start)
    audioTag.play();
  }
}

const stopBoxHighlight = (e) => {
  e.target.classList.remove('playing');
}

const keys = [...document.getElementsByClassName('key')];
keys.forEach((key) => {
  window.addEventListener('keydown', playSound);
  key.addEventListener('transitionend', stopBoxHighlight);
})