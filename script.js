(function(){
  let name = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < name.length ; i++){
  var firstLetter=name[i].charAt(0);
  if(firstLetter.toLowerCase()=="j"){
    byeSpeaker(name[i]);
  } else{
    helloSpeaker(name[i]);
  }
}
})();
