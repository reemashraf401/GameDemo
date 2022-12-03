import word from './letters.json' assert {type : 'json'};
var Arrayofaudio = new Array();
var divs = document.getElementById("all");
var Arrayofimage = new Array();
var i;
for(i=0;i<word.words.length;i++){
    Arrayofimage[i] = document.createElement("img");
    Arrayofaudio[i] = document.createElement("audio");
    Arrayofimage[i].src = word.words[i]["imageSrc"]
    Arrayofaudio[i].src = word.words[i]["audioSrc"]
    Arrayofaudio[i].type="audio/mpeg"
    Arrayofimage[i] .addEventListener("click", playA(i))
    divs.appendChild(Arrayofimage[i]);
    divs.appendChild(Arrayofaudio[i]);
}
var wordname = document.getElementById("wordd")
function playA(img){
    return function() {
      wordname.innerHTML = word.words[img]["value"];
      wordname.style.display="block";
        Arrayofaudio[img].play();
      }
   
}