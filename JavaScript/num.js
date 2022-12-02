import number from './letters.json' assert {type : 'json'};
var divs = document.getElementById("all");
var Arrayofaudio = new Array();
var Arrayofimage = new Array();
// var i=0;
for(var i=0;i<number.Numbers.length;i++){
    Arrayofimage[i] = document.createElement("img");
    Arrayofaudio[i] = document.createElement("audio");
    Arrayofimage[i] .addEventListener("click", play(i))
    Arrayofaudio[i].type="audio/mpeg";
    Arrayofimage[i].src = number.Numbers[i]["imageSrc"]
    Arrayofaudio[i].src = number.Numbers[i]["audioSrc"]
    divs.appendChild(Arrayofimage[i]);
    divs.appendChild(Arrayofaudio[i]);
}

function play(img){
    return function() {
        Arrayofaudio[img].play();
    }
}
