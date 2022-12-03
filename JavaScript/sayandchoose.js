
import letter from './letters.json' assert {type : 'json'};
var ra=Math.floor(Math.random()*26);
var y=0;
var amg;
var na;
var x;
var w;
document.getElementById("s").addEventListener('click',()=>{
  document.getElementById("win").style.display = "none"
  document.getElementById("gameover").style.display = "none"
    y=0;
    document.getElementById("music").src=letter.words[ra]["audioSrc"]  //arr[ra].src
    document.getElementById("music").type="audio/mpeg"
    amg=letter.words[ra]["imageSrc"];
    x=document.getElementById("music");
    
    var ind = amg.lastIndexOf("/");
    na=amg.slice(ind+1,)
    // console.log(na)
    
x.play()
y++;
});
document.getElementById("try").addEventListener('click',()=>{
  document.getElementById("win").style.display = "none"
  document.getElementById("gameover").style.display = "none"
  ra=Math.floor(Math.random()*26);
  y=0;
  document.getElementById("music").src=letter.words[ra]["audioSrc"]  //arr[ra].src
  document.getElementById("music").type="audio/mpeg"
  amg=letter.words[ra]["imageSrc"];
  x=document.getElementById("music");
  
  var ind = amg.lastIndexOf("/");
  na=amg.slice(ind+1,)
  // console.log(na)
  
x.play()
y++;
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
      console.log(na);
      if(y==1){
       for(var i=0;i<name.length;i++){
        if(name[i]=='.'){
         name =  name.slice(0,i);
        }
        if(na[i]=='.'){
          na =  na.slice(0,i);
        }
      }
        if(na==name){
          y=0;
            document.getElementById("music").src="../Audio/bravo.mp3"
            document.getElementById("music").type="audio/mpeg"
            x.play()
            document.getElementById("win").style.display = "block";
            document.getElementById("gameover").style.display = "none";
            ra=Math.floor(Math.random()*26);
            }
        else{
            document.getElementById("music").src="../Audio/gameover.mp3"
            document.getElementById("music").type="audio/mpeg"
            x.play()
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
        x.play();
    }
    })
  }
  console.log("nooooooo")




