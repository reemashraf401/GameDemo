import Numbers from './calc.json' assert {type : 'json'};
var divs = document.getElementById("all");
var Arrayofaudio = new Array();
var Arrayofimage = new Array();
// var i=0;
for(var i=0;i<Numbers.length;i++){
    Arrayofimage[i] = document.createElement("img");
    Arrayofaudio[i] = document.createElement("audio");
    Arrayofimage[i] .addEventListener("click", play(i))
    divs.appendChild(Arrayofimage[i]);
    divs.appendChild(Arrayofaudio[i]);
}

for(i=0;i<Numbers.length;i++){
    Arrayofimage[i].src = Numbers[i]["imageSrc"]
    Arrayofaudio[i].src = Numbers[i]["audioSrc"]
    console.log(Arrayofimage[i])
}

function play(img){
    return function() {
        Arrayofaudio[img].play();
    }
}
