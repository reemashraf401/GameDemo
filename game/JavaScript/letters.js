import letter from './letters.json' assert {type : 'json'};
var Arrayofaudio = new Array();
var divs = document.getElementById("all");
var Arrayofimage = new Array();
var i;
for(i=0;i<letter.letters.length;i++){
    Arrayofimage[i] = document.createElement("img");
    Arrayofaudio[i] = document.createElement("audio");
    Arrayofimage[i] .addEventListener("click", playA(i))
    divs.appendChild(Arrayofimage[i]);
    divs.appendChild(Arrayofaudio[i]);
}

for(var i=0;i<letter.letters.length;i++){
    Arrayofimage[i].src = letter.letters[i]["imageSrc"]
    Arrayofaudio[i].src = letter.letters[i]["audioSrc"]
    console.log(Arrayofaudio[i])
}
function playA(img){
    return function() {
        Arrayofaudio[img].play();
      }
    console.log(img)
   
    // .currentTarget.style.opacity=0.0;
  }
  function songs(){
    
  }
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