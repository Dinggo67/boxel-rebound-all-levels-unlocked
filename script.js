//Make Boxel Rebound full screen then go into the dev tools(crtl+shift+i) and go into console and paste 
var level = Number(prompt("What is the top level at the moment"))+1;
var score = prompt("What do you want the score to be", "00:01");
for (i = 0; i < level; i++) {
  var score = "00:01"
  localStorage.setItem('level_' + i + '_score', score);
  console.log("Unlocked Level " + i + " with a score of " + score);               }
