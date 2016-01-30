//when mouse enters a box
var boxes = document.getElementsByClassName("box")
console.log(boxes);

for (i = 0; i < boxes.length; i++) {
  console.log("adding onmouseover to box " + i);
  boxes[i].onmouseover = function() {
    console.log("In a box");
    this.style.backgroundColor = randomColour()
  };
}

//change CSS background colour of that box to a random hexadecimal
var randomColour = function(){
  var newColour = "#";
  for (i=0; i<3; i++) {
    newColour += ("0" + (Math.random()*265|0).toString(16)).substr(-2);   
  }
  return newColour;
}

  console.log(randomColour())