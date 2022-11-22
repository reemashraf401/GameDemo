var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");
 setInterval(function () 
       { var audio = document.getElementById("audio");
        audio.play();}
       , 10);
// Pause and play the video, and change the button text
//   if (video.paused) {
//     video.pause();
//     btn.innerHTML = "Pause";
//   } else {
//     video.pause();
//     btn.innerHTML = "Play";
//   }