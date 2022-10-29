var r = 190
var g = 100
var b = 128
let xoff = 100
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  background(0)
  noFill()
  stroke(205)

  translate(width/2, height/2)
  for (var i = 0; i < 200; i++){
    r += random(-1,1)
    g += random(-1,1)
    b += random(-1,1)
    push()
    fill(r,g,b,20)

    rotate(sin(frameCount + 2*i) * 120)

    rect(0, 0, 600-i*3, 600-i*3, 200-i)

    pop()
  }

}
