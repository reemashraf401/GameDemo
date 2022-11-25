
import letter from './letters.json' assert {type : 'json'};
// var arr=[{"src":"audio/bgsound.mp3","type":"audio/mpeg","srcI":"a.png"},{"src":"audio/horse.mp3","type":"audio/mpeg","srcI":"b.png"}]
// var arr2=["a.png","b.png","c.png","d.png","e.png","f.png","g.png","h.png","i.png","j.png"]
// var arr3=[{"src":"audio/bravo.mp3","type":"audio/mpeg"},{"src":"audio/error.mp3","type":"audio/mpeg"}]
var ra=Math.floor(Math.random()*25);
var y=0;
var amg;
var img;
var na;
document.getElementById("s").addEventListener('click',()=>{
    console.log("ooo")
    y=0;
    document.getElementById("music").src=letter.words[ra]["audioSrc"]  //arr[ra].src
    document.getElementById("music").type="audio/mpeg"
    amg=letter.words[ra]["imageSrc"];
    var x=document.getElementById("music");
    
    var ind = amg.lastIndexOf("/");
    na=amg.slice(ind+1,)
    console.log(na)
    
x.play()
y++;
});
for(var i=0;i<letter.words.length;i++){
    img = document.createElement('img');
    img.src =letter.words[i]["imageSrc"]    //arr2[i]
    img.style.marginRight="16px"
    img.style.marginBottom="5px"
    document.getElementById('body').appendChild(img);
    img.addEventListener("click",(event)=>{   
      var x=document.getElementById("music");
      var fullPath = event.target.src;
      var indexx = fullPath.lastIndexOf("/");
      var name=fullPath.slice(indexx+1,)
      console.log(name)
    
      if(y==1){
        if(name== na){
            document.getElementById("music").src="audio/bravo.mp3"
            document.getElementById("music").type="audio/mpeg"
            x.play() }
        else{
            document.getElementById("music").src="../Audio/gameOver.wav"
            document.getElementById("music").type="audio/wav"
           x.play() }}
    else{
        document.getElementById("music").src="audio/try.mp3"
        document.getElementById("music").type="audio/mpeg"
        x.play()
      }
    })
    }