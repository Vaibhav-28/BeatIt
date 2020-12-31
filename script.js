window.addEventListener("keydown", function (e) {
  var audio = document.querySelector(`audio[data-key="${e.code}"]`);
  var key = document.querySelector(`.key[data-key="${e.code}"]`);
  console.log(audio);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  setTimeout(function () {
    key.classList.remove("playing");
  }, 80);
});

function removeTransition(e) {
  console.log(e);
}

keys = document.querySelectorAll(".key");
keys.forEach((k) => key.addEventListener("transitionend"), removeTransition);
