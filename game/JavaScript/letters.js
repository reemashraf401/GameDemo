// var student = [
//     {
//         "ID" : 1,
//         "first name":"reem",
//         "seconed name":"ashraf",
//         "age":23,
//         "adrees":{
//             "city" : "new assuit",
//             "street" : "south univ"
//         },
//         "phone" : [1234,1234],
//         "skills" : ["piano","running","reading"]
//     },
//     {
//         "ID" : 2,
//         "first name":"mariam",
//         "seconed name":"ali",
//         "age":15,
//         "adrees":{
//             "city" : "assuit",
//             "street" : "mohafza"
//         },
//         "phone" : [12345,12345],
//         "skills" : ["basketball","cooking","guitar"]
//     },
//     {
//         "ID" : 3,
//         "first name":"ahmed",
//         "seconed name":"mohamed",
//         "age":15,
//         "adrees":null,
//         "phone" : [12345,12345],
//         "skills" : ["football"]
//     }
// ]
var student = 
[{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"apple.jpg","audio":"a.mp3","enable":"false"},
{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"noon-logo-en.svg","audio":"child.mp3","enable":"false"}
]
var Arrayofaudio = new Array();
var divs = document.getElementById("all");
var Arrayofimage = new Array();
var i;
for(i=0;i<student.length;i++){
    Arrayofimage[i] = document.createElement("img");
    Arrayofaudio[i] = document.createElement("audio");
    Arrayofimage[i] .addEventListener("click", playA(i))
    divs.appendChild(Arrayofimage[i]);
    divs.appendChild(Arrayofaudio[i]);
}

for(var i=0;i<student.length;i++){
    Arrayofimage[i].src = student[i]["avatar"]
    Arrayofaudio[i].src = student[i]["audio"]
    console.log(Arrayofaudio[i])
}
function playA(img){
    return function() {
        Arrayofaudio[img].play();
      }
    console.log(img)
   
    // .currentTarget.style.opacity=0.0;
  }
  function songs(){
    
  }