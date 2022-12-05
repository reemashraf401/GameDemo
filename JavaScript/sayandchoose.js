import letter from './letters.json' assert {type : 'json'};
var randomaudio=Math.floor(Math.random()*26);
var startclicked=0;
var randomword;
var word;
var audio;
document.getElementById("start").addEventListener('click',()=>{
  document.getElementById("win").style.display = "none"
  document.getElementById("gameover").style.display = "none"
  startclicked=0;
    document.getElementById("music").src=letter.words[randomaudio]["audioSrc"]  //arr[ra].src
    document.getElementById("music").type="audio/mpeg"
    randomword=letter.words[randomaudio]["imageSrc"];
    audio=document.getElementById("music");
    
    var ind = randomword.lastIndexOf("/");
    word=randomword.slice(ind+1,)
    // console.log(na)
    
    audio.play()
startclicked++;
});
document.getElementById("try").addEventListener('click',()=>{
  document.getElementById("win").style.display = "none"
  document.getElementById("gameover").style.display = "none"
  randomaudio=Math.floor(Math.random()*26);
  startclicked=0;
  document.getElementById("music").src=letter.words[randomaudio]["audioSrc"]  //arr[ra].src
  document.getElementById("music").type="audio/mpeg"
  randomword=letter.words[randomaudio]["imageSrc"];
  audio=document.getElementById("music");
  
  var ind = randomword.lastIndexOf("/");
  word=randomword.slice(ind+1,)
  // console.log(na)
  
  audio.play()
startclicked++;
});
var img ;
for(var i=0;i<letter.words.length;i++)
{
    img = document.createElement("img");
    img.src = letter.words[i]["imageSrc"];
    document.getElementById('all').appendChild(img);
    img.addEventListener("click" ,function(event){
      var x=document.getElementById("music");
      var fullPath = event.target.src;
      var indexx = fullPath.lastIndexOf("/");
      var name=fullPath.slice(indexx+1,)
      console.log(name);
      console.log(word);
      if(startclicked==1){
       for(var i=0;i<name.length;i++){
        if(name[i]=='.'){
         name =  name.slice(0,i);
        }
        if(word[i]=='.'){
          word =  word.slice(0,i);
        }
      }
        if(word==name){
          startclicked=0;
            document.getElementById("music").src="../Audio/bravo.mp3"
            document.getElementById("music").type="audio/mpeg"
            audio.play()
            document.getElementById("win").style.display = "block";
            document.getElementById("gameover").style.display = "none";
            randomaudio=Math.floor(Math.random()*26);
            }
        else{
            document.getElementById("music").src="../Audio/gameover.mp3"
            document.getElementById("music").type="audio/mpeg"
            audio.play()
            document.getElementById("gameover").style.display = "block"
            document.getElementById("win").style.display = "none";
            // console.log(na)
            // console.log(name)
            }
         }
    else {
      document.getElementById("gameover").style.display = "none"
            document.getElementById("win").style.display = "none";
        document.getElementById("music").src="../Audio/tryagain.mp3"
        document.getElementById("music").type="audio/mpeg"
        audio.play();
    }
    })
  }
  console.log("nooooooo")




