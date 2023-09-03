
for (var i = 0; i < document.querySelectorAll(".drum").length; i += 1) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonPressed = this.innerHTML;

    switch (buttonPressed) {

      case "w":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
      break;

      case "a":
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
      break;

      case "s":
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
      break;

      case "d":
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
      break;

      case "j":
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
      break;

      case "k":
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
      break;

      case "l":
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
      break;

      default:
        console.log("Wrong input");

    }
  });
}

document.addEventListener("keydown", function() {

  var key = event.key;

  switch (key) {

    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
    break;

    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
    break;

    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
    break;

    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
    break;

    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
    break;

    case "k":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
    break;

    case "l":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
    break;

    default:
      console.log("Wrong input");

    }
});


// this - it gives the identity of an item which triggered an event
