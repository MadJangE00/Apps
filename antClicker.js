var time = 0;
var score = 0;
var numAnt = 0;

function click() {
  if (score === 0){
    time = 5;
    numAnt = numAnt + 1;
    score = score + numAnt;
    return {score, time, numAnt}
  } else if (time > 0){
    time = time - 1;
    numAnt = numAnt + 1;
    score = score + numAnt;
    return {score, time, numAnt}
  } else {
    console.log("Game Over");
    return {score, time, numAnt}
  }
  console.log(score, time, numAnt) 
}

var Ant = {}

var qAnt
var jAnt
var nAnt
