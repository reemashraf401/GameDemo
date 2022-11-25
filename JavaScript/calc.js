function dis(r){
    document.getElementById("inputt").value+=r;
}
function equal(){
  const x=document.getElementById("inputt").value;
  const v=eval(x);
 document.getElementById("inputt").value+="="+v;
}
function clea(){
    document.getElementById("inputt").value='';
    
}
