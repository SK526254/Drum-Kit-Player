// var numberOfDrums = document.querySelectorAll(".drum").length;
// for (var i = 0; i < numberOfDrums; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//
//     var buttonInnerHTML = this.innerHTML;
//     makeSound(buttonInnerHTML);
//     buttonAnimation(buttonInnerHTML);
//   });
// }
//
// document.addEventListener("keydown",function(){
//   makeSound(event.key);
//   buttonAnimation(event.key);
// });
//
// function makeSound(key){
//
//   switch (key) {
//     case "w":
//       var audio = new Audio("sounds/tom-1.mp3");
//       audio.play();
//       break;
//     case "a":
//       var audio = new Audio("sounds/tom-2.mp3");
//       audio.play();
//       break;
//     case "s":
//       var audio = new Audio("sounds/tom-3.mp3");
//       audio.play();
//       break;
//     case "d":
//       var audio = new Audio("sounds/tom-4.mp3");
//       audio.play();
//       break;
//     case "j":
//       var audio = new Audio("sounds/kick-bass.mp3");
//       audio.play();
//       break;
//     case "k":
//       var audio = new Audio("sounds/crash.mp3");
//       audio.play();
//       break;
//     case "l":
//       var audio = new Audio("sounds/snare.mp3");
//       audio.play();
//       break;
//     default:
//
//   }
// }
//
// function buttonAnimation(currentKey){
//   var currentButton = document.querySelector("."+ currentKey);
//   currentButton.classList.add("pressed");
//   setTimeOut( function(){
//      currentButton.classList.remove("pressed");
//    },100);
// }


$(".drum").click(function(){
  var buttonInnerHTML=this.innerHTML;
  makeSound(buttonInnerHTML);

});
$(".drum").keydown(function(event){

  makeSound(event.key);

});

function makeSound(buttonInnerHTML){
  switch(buttonInnerHTML)
  {
    case "w":
         var audio = new Audio("sounds/tom-1.mp3");
         audio.play();
         break;
       case "a":
         var audio = new Audio("sounds/tom-2.mp3");
         audio.play();
         break;
       case "s":
         var audio = new Audio("sounds/tom-3.mp3");
         audio.play();
         break;
       case "d":
         var audio = new Audio("sounds/tom-4.mp3");
         audio.play();
         break;
       case "j":
         var audio = new Audio("sounds/kick-bass.mp3");
         audio.play();
         break;
       case "k":
         var audio = new Audio("sounds/crash.mp3");
         audio.play();
         break;
       case "l":
         var audio = new Audio("sounds/snare.mp3");
         audio.play();
         break;
       default:
  }
}
