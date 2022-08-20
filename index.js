// const mo = document.querySelectorAll(".key");
// const kilifi = () => {
//   console.log('9787')
// }
// mo.addEventListener('click', kilifi);

window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return
  audio.currentTime = 0; // Rewind play to the start;
  audio.play();
  key.classList.add("playing")
});

function endTransition(e) {
  if (e.propertyName !== 'transform') return
  this.classList.remove('playing')
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", endTransition))

// window.addEventListener('click', function(e) {
//   const audio = document.querySelector(`.key[data-key="${e.keyCode}"]`)
//   console.log(audio)
// })
