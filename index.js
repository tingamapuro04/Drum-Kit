// const mo = document.querySelectorAll(".key");
// const kilifi = () => {
//   console.log('9787')
// }
// mo.addEventListener('click', kilifi);

window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  if(!audio) return
  audio.play();
})

// window.addEventListener('click', function(e) {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
//   if(!audio) return
//   audio.play();
//   console.log("ty")
// })
