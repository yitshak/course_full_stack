
var audioMap = new Map();
audioMap.set("w",new Audio('sounds/crash.mp3'));
audioMap.set("a",new Audio('sounds/kick-bass.mp3'));
audioMap.set("s",new Audio('sounds/snare.mp3'));
audioMap.set("d",new Audio('sounds/tom-1.mp3'));
audioMap.set("j",new Audio('sounds/tom-2.mp3'));
audioMap.set("k",new Audio('sounds/tom-3.mp3'));
audioMap.set("l",new Audio('sounds/tom-4.mp3'));


function playByKey(key) {
  if (audioMap.has(key)){
    audioMap.get(key).play();
    ButtonAnimation(key)
  }
}
var drum_buttons = document.querySelectorAll('.drum')
for ( var i = 0; i< drum_buttons.length;i++) {
    drum_buttons[i].addEventListener("click",function(){
      var button_id = this.innerHTML
      playByKey(button_id);
      ButtonAnimation(button_id)
  })
}

document.addEventListener("keydown",function(event) {
  playByKey(event.key)
});


function ButtonAnimation(key) {
  var active_button = document.querySelector("."+key);
  active_button.classList.add("pressed");
  setTimeout(() => {  active_button.classList.remove("pressed"); }, 150);
}
