function addUser(){
user_name=document.getElementById("user_name").value;
localStorage.setItem("user_name",user_name);
console.log (localStorage.getItem("user_name"));
window.location="kwitter_room.html";

}