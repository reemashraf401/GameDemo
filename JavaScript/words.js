import word from './letters.json' assert {type : 'json'};
var Arrayofaudio = new Array();
var divs = document.getElementById("all");
var Arrayofimage = new Array();
var i;
for(i=0;i<word.words.length;i++){
    Arrayofimage[i] = document.createElement("img");
    Arrayofaudio[i] = document.createElement("audio");
    Arrayofimage[i] .addEventListener("click", playA(i))
    divs.appendChild(Arrayofimage[i]);
    divs.appendChild(Arrayofaudio[i]);
}

for(var i=0;i<word.words.length;i++){
    Arrayofimage[i].src = word.words[i]["imageSrc"]
    Arrayofaudio[i].src = word.words[i]["audioSrc"]
    console.log(Arrayofimage[i])
}
function playA(img){
    return function() {
      console.log(Arrayofimage[img]);
        Arrayofaudio[img].play();
      }
   
    // .currentTarget.style.opacity=0.0;
    }
// Pause and play the video, and change the button text
//   if (video.paused) {
//     video.pause();
//     btn.innerHTML = "Pause";
//   } else {
//     video.pause();
//     btn.innerHTML = "Play";
//   }