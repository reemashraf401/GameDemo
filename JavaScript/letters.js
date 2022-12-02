import letter from './letters.json' assert {type : 'json'};
var Arrayofaudio = new Array();
var divs = document.getElementById("all");
var Arrayofimage = new Array();
var i;
for(i=0;i<letter.letters.length;i++){
    Arrayofimage[i] = document.createElement("img");
    Arrayofaudio[i] = document.createElement("audio");
    Arrayofimage[i].src = letter.letters[i]["imageSrc"]
    Arrayofaudio[i].src = letter.letters[i]["audioSrc"]
    divs.appendChild(Arrayofimage[i]);
    divs.appendChild(Arrayofaudio[i]);
    Arrayofimage[i] .addEventListener("click", playA(i))
}
function playA(img){
    return function() {
        Arrayofaudio[img].play();
      }
  }