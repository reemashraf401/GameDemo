import letter from './letters.json' assert {type : 'json'};
var Arrayofaudio = new Array();
var divs = document.getElementById("divall");
var Arrayofimage = new Array();
for(var i=0;i<letter.letters.length;i++){
    Arrayofimage[i] = document.createElement("img");

    Arrayofaudio[i] = document.createElement("audio");
    console.log(Arrayofimage[i]);
    // Arrayofimage[i] .addEventListener("click", playA(i));
    // Arrayofimage[i].ClassName = "images"
}
var index=0;
document.getElementById("myaudio").src = letter.others[0]["audioSrc"];
var n;
  setInterval(() => {
    app();
  }, 1300)

function app()
{
 n =  setTimeout(()=>{
    divs.appendChild(Arrayofimage[index]);
    console.log(Arrayofimage[index])
    divs.appendChild(Arrayofaudio[index]);
    Arrayofimage[index].src = letter.letters[index]["imageSrc"]
    Arrayofaudio[index].src = letter.letters[index]["audioSrc"]
    index++;  
  },2500);
}
   
if(index==30){
  clearTimeout(n);
  document.getElementById("myaudio").pause();
}

  console.log(index)
function playA(img){
    return function() {
        Arrayofaudio[img].play();
      }
    console.log(img)
   
  }
