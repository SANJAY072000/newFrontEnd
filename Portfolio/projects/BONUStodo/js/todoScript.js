var typed = new Typed('.blink', {
  strings: ["TODO APP is finally there !^1500", "Use it at your fullest !^1500","Helps you to remember !^1500",
  "Enjoy the online textpad !^1500","TODO APP"],
  typeSpeed: 100
});
$(document).ready(function(){
$(".btn-danger").click(function(){
  if($("ul").text() != "")$("ul").text("");
  else alert("There's nothing to delete. ");
});
});
$(document).ready(function(){
$(".btn-success").click(function(){
  if($("#todo").val() != ""){
  var list=document.createElement("li");
  var text= $("#todo").val();
  var uli=document.getElementById("list");
  list.innerHTML=text;
document.getElementById("todo").value="";
uli.appendChild(list);
}
  else alert("Kindly type a todo first. ");
});
});
