var coke = {'name': 'coke', 'point': 100}
var pep = {'name': 'pep', 'point' : 120}

function battle (a, b){
  if (a[point] - b[point]) > 0){
    console.log(a + ' win')
  } else if (a[point] - b[point]) < 0){
    console.log(b + ' win')
  } else {
    console.log(draw)
  }
}
