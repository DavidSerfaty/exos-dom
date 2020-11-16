var clickerButton = document.getElementById("clicker");

var onButtonClick = function(){
  clickerButton.textContent = "Oh wow;"
};
clickerButton.addEventListener("click", onButtonClick);

// EXO 2

var clickerCatPic = document.getElementById("cat-pic");
var catChat = document.getElementById("cat-chat");

var onCatClick = function(){
  catChat.textContent = "Meowwww";
};

clickerCatPic.addEventListener("click",onCatClick);

// EXO 3
var face = document.getElementById("face");

var onMouseMove = function(e){
  console.log(e);
  document.getElementById('message').textContent += "moooove";
  var beard = document.createElement("div");
  beard.className = "beard";
  document.body.appendChild(beard);
  beard.style.top = e.clientY + "px";
  beard.style.left = e.clientX + "px";

};
face.addEventListener("mousemove",onMouseMove);

// EXO 4
var catPic = document.getElementById("cat-pic");
var onCatClick = function(e) {
  console.log(e);
  var stashePic = document.getElementById("mustache-pic");
  stashePic.style.top = e.clientY + "px";
  stashePic.style.left = e.clientX + "px";
};
catPic.addEventListener("click", onCatClick);

// EXO 5
