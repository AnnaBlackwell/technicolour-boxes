//when mouse enters a box
  var newColour = document.getElementsByClassName("box").addEventListener("mouseenter", function(){
    this.style.backgroundColor = randomColour
  });

//change CSS background colour of that box to a random hexadecimal
var randomColour = function(){
  var newColour = "#";
  for (i=0; i<3; i++) {
    newColour += ("0" + (Math.random()*265|0).toString(16)).substr(-2);   
  }}