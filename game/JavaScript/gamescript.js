var video = document.getElementById("myVideo");
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