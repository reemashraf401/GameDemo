import word from './letters.json' assert {type : 'json'};
var ra=Math.floor(Math.random()*word.words.length);
var Wordchosen;
var len;
var spann;
var str="";
var n=0;
var imgs = document.getElementById("imgdiv")
document.getElementById("choose").addEventListener('click',()=>{
    document.getElementById("win").style.display = "none";
    document.getElementById("gameover").style.display = "none";
    str="";
    n=0
    document.getElementById("music").src=word.words[ra]["audioSrc"] 
     document.getElementById("music").type=word.words[ra].type
     var x=document.getElementById("music");
     Wordchosen=word.words[ra]["LetterName"];
     len=Wordchosen.length;
     console.log(len);
     x.play()
write();
 })
 document.getElementById("try").addEventListener('click',()=>{
    document.getElementById("win").style.display = "none";
    document.getElementById("gameover").style.display = "none";
    str="";
    ra=Math.floor(Math.random()*word.words.length);
    n=0
    document.getElementById("music").src=word.words[ra]["audioSrc"] 
     document.getElementById("music").type=word.words[ra].type
     var x=document.getElementById("music");
     Wordchosen=word.words[ra]["LetterName"];
     len=Wordchosen.length;
     console.log(len);
     x.play()
write();
 })
 var dragElem;
function write(){
    imgs.innerHTML = "" ;
for(var i=0; i<len; i++){
   spann=document.createElement('div');
   spann.className="dragdiv";
   spann.addEventListener("dragover",(event)=>{
    event.preventDefault()
   })
   spann.addEventListener("drop",(event)=>{
    str+=dragElem.value;
    console.log("aaa");
    event.preventDefault()
    var dropped = dragElem.cloneNode(true);//document.getElementById(asd)
            for(var i=0;i<word.letters.length;i++){
                if(dropped.id==word.letters[i]["id"])
            {
                event.target.appendChild(dropped);}
            }
            spann.id="false";
   })
  spann.style.backgroundColor="red";
    spann.style.width="7%";
    spann.style.height="12vh";
    spann.style.marginLeft="2%"
    spann.style.marginRight="2%"
    spann.style.marginBottom="2%"
    // spann.style.float="left"

    spann.style.display="inline-block"
    imgs.style.textAlign="center"
  
    // var b=document.createElement("div");
    // b.style.clear="both"
   
    imgs.appendChild(spann)
  

    }

    }


var oneletter;
for(var i=0;i<word.words.length;i++){
    oneletter = document.createElement('img');
    oneletter.src =word.letters[i]["imageSrc"]
    oneletter.value=word.letters[i]["LetterName"];
    oneletter.id = word.letters[i]["id"];
    oneletter.setAttribute("draggable","true");
    oneletter.addEventListener("dragstart",(event)=>{
        dragElem=event.target
    })
    oneletter.onclick="selected(this)"
    

    document.getElementById("numberofletters").appendChild(oneletter);
    oneletter.addEventListener("dragend",(event)=>{  
   if(str.toLowerCase()==Wordchosen.toLowerCase()){
    ra=Math.floor(Math.random()*word.words.length);
    document.getElementById("win").style.display = "block";
    document.getElementById("gameover").style.display = "none";
    document.getElementById("music").src="../Audio/bravo.mp3"
    document.getElementById("music").type="audio/mpeg"
    var x=document.getElementById("music");
      x.play()
    str="aaaaaaaaaaaaaaaa";
    } 
   else if(str.length==Wordchosen.length && Wordchosen!=str)
   {
    document.getElementById("win").style.display = "none";
    document.getElementById("gameover").style.display = "block";
    oneletter.draggable = "false";
    console.log("NOOOOO")
    document.getElementById("music").src="../Audio/gameover.mp3"
    document.getElementById("music").type="audio/mpeg"
    var x=document.getElementById("music");
    x.play()
    }
   else{
    n++;
}
console.log(Wordchosen);
console.log(str)

})}

    //     if(y==1){
    //       if(name== amg){
    //           document.getElementById("music").src="audio/bravo.mp3"
    //           document.getElementById("music").type="audio/mpeg"
    //           x.play() }
    //       else{
    //           document.getElementById("music").src="audio/error.mp3"
    //           document.getElementById("music").type="audio/mpeg"
    //          x.play() }}
    //   else{
    //       document.getElementById("music").src="audio/try.mp3"
    //       document.getElementById("music").type="audio/mpeg"
    //       x.play()
    //     }  

// var str;
// var n=0;
// function selected(){
//    str[n]=event.target.value;
//    console.log(str[n])
//    if(str==word){
//     console.log("bravo")
//    }
//    else if(str.len==word.len && word!=str){
//     console.log("NOOOOO")

//    }
//    else{
//     v++
//    }
// }