var circle1X = 100
var circle1Y = 100

var keyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

var keyNum;

var Score = 0

var a = 0

var Timer = 30

var circleCOL = 0
// var circleG = 0
// var circleB = 0

var coins = 0

var Mode;

var backCOL = 255
var backCOLG = 255
var BackCOLB = 255
var textCOL = 0

var BlueX = 0

var highscore = 0

function setup() {
  createCanvas(1900, 800);
  Mode = 0
  keyNum = random(keyNums)
}


function keyTyped() {
  if(key === '' + keyNum && Mode == 1) {
    circle1X = random(50, 1850)
    circle1Y = random(50, 750)
    keyNum = random(keyNums)
    Score += 1
    
  }
}

function draw() {
  if(Mode == 0) {
    backCOLG = backCOL
    backCOLB = backCOL
    background(backCOL, backCOLG, backCOLB)
    noStroke();
    fill(textCOL);
    strokeWeight(10)
    rect(1550, 600, 300, 150)
    rect(50, 600, 300, 150)
    fill(backCOL);
    textSize(100)
    text('Play', 1600, 700)
    textSize(80)
    text('Settings', 55, 700)
    fill(textCOL)
    textSize(150)
    text('Tap The', 100, 200);
    text('Keys', 225, 350)
    textSize(50)
    text('Highscore:' + highscore, 1550, 50)
    text('Coins:' + coins, 1550, 100)
    
    if(Score > highscore) {
      highscore = Score
    }
    
    coins = coins + Score
  
    Score = 0
    Timer = 30
  }
  if(Mode == 1){
  background(backCOL, backCOLG, backCOLB);
  fill(textCOL)
  textSize(50)
  text('Score:' + Score, 10, 50)
  text('Timer:' + Timer, 1675, 50)
  fill(circleCOL)
  circle(circle1X, circle1Y, 50)
  fill(backCOL)
  textSize(35)
  text('' + keyNum, circle1X - 10, circle1Y + 10)
  
  if(Timer < 1) {
    Mode = 2
  }
    
    backCOLG = backCOL
    backCOLB = backCOL
}    
  
  if(a == 60) {
      a = 0
      Timer -= 1
    }
  a += 1
  
  if(Mode == 2) {
  background(backCOL, backCOLG, backCOLB);
  fill(textCOL);
  textSize(50)
  text('Final Score:' + Score, 10, 50)
  fill(textCOL);
  strokeWeight(10)
  rect(1550, 600, 300, 150)
  fill(backCOL);
  textSize(100)
  text('Home', 1567, 700)
    backCOLG = backCOL
    backCOLB = backCOL
  }
  
  if(Mode == 3) {
    background(backCOL, backCOLG, backCOLB)
    noStroke();
    strokeWeight(0)
    fill(textCOL, textCOL, textCOL)
    rect(85, 175, 175, 75)
    fill(textCOL, textCOL, textCOL)
    rect(335, 175, 175, 75)
    fill(textCOL, textCOL, textCOL)
    rect(85, 325, 175, 75)
    fill(textCOL, textCOL, textCOL)
    rect(335, 325, 175, 75)
    fill(backCOL, backCOL, backCOL)
    textSize(50)
    text('Black', 110, 230)
    fill(backCOL, backCOL, backCOL)
    textSize(50)
    text('White', 360, 230)
    fill(backCOL, backCOL, backCOL)
    textSize(50)
    text('Gray', 110, 380)
    text('Blue', 370, 380)
    fill(textCOL, textCOL, textCOL)
    textSize(50)
    text(' Backround Color', 100, 100)
    fill(textCOL, textCOL, textCOL)
    textSize(25)
    text('Free', 80, 150)
    fill(textCOL, textCOL, textCOL)
    textSize(25)
    text('Premium', 80, 300)
    strokeWeight(10)
    stroke(textCOL, textCOL, textCOL)
    noFill();
    rect(50, 50, 500, 700)
    
    if(highscore < 49) {
      stroke(5);
      fill(backCOL)
      line(85, 327, 260, 397)
      line(260, 327, 85, 397)
      
    }
    
    if(BlueX == 0) {
      stroke(5);
      fill(backCOL)
      line(335, 327, 512, 397)
      line(512, 327, 335, 397)
    }
    backCOLG = backCOL
    backCOLB = backCOL
  }
  if(Mode == 4) {
   background(backCOL, backCOLG, backCOLB)
    noStroke();
    strokeWeight(0)
    fill(textCOL, textCOL, textCOL, 100)
    rect(85, 175, 175, 75)
    fill(textCOL, textCOL, textCOL, 100)
    rect(335, 175, 175, 75)
    fill(textCOL, textCOL, textCOL, 100)
    rect(85, 325, 175, 75)
    fill(textCOL, textCOL, textCOL, 100)
    rect(335, 325, 175, 75)
    fill(backCOL, backCOL, backCOL, 100)
    textSize(50)
    text('Black', 110, 230)
    fill(backCOL, backCOL, backCOL, 100)
    textSize(50)
    text('White', 360, 230)
    fill(backCOL, backCOL, backCOL, 100)
    textSize(50)
    text('Gray', 110, 380)
    text('Blue', 370, 380)
    fill(textCOL, textCOL, textCOL, 100)
    textSize(50)
    text(' Backround Color', 100, 100)
    fill(textCOL, textCOL, textCOL, 100)
    textSize(25)
    text('Free', 80, 150)
    fill(textCOL, textCOL, textCOL, 100)
    textSize(25)
    text('Premium', 80, 300)
    strokeWeight(10)
    stroke(textCOL, textCOL, textCOL, 100)
    noFill();
    rect(50, 50, 500, 700)
    
    stroke(textCOL)
    fill(backCOL)
    rect(500, 100, 400, 600)
    noStroke();
    fill(textCOL)
    textSize(25)
    text('EXIT', 510, 690)
    textSize(35)
    text('To Unlock This Premium', 510, 135)
    text('Background Color Get A', 510, 170)
    text('Minimum Score of 50 in', 510, 205)
    text('A Single Game.', 510, 240)
    
    backCOLG = backCOL
    backCOLB = backCOL
    
    if(highscore < 49) {
      stroke(backCOL, backCOL, backCOL, 100);
      line(85, 327, 260, 397)
      line(260, 327, 85, 397)
    }
    
    if(BlueX == 0) {
      stroke(backCOL, backCOL, backCOL, 100);
      line(335, 327, 512, 397)
      line(512, 327, 335, 397)
    }
  }
}


function mousePressed() {
  if(mouseX > 1550 && mouseX < 1850 && mouseY > 600 && mouseY < 750 && Mode == 0){
    Mode = 1
  }
  
  if(mouseX > 50 && mouseX < 350 && mouseY > 600 && mouseY < 750 && Mode == 0){
    Mode = 3
  }
  
  if(mouseX > 50 && mouseX < 350 && mouseY > 600 && mouseY < 750 && Mode == 0){
    Mode = 3
  }
  
  if(mouseX > 1550 && mouseX < 1850 && mouseY > 600 && mouseY < 750 && Mode == 2){
    Mode = 0
  }
  
  if(mouseX > 85 && mouseX < 260 && mouseY > 175 && mouseY < 250 && Mode == 3){
    Mode = 0
    textCOL = 255
    backCOL = 0
    circleCOL = 255
  }
  
  if(mouseX > 335 && mouseX < 515 && mouseY > 175 && mouseY < 250 && Mode == 3){
    Mode = 0
    textCOL = 0
    backCOL = 255
    circleCOL = 0
  }
  
  if(mouseX > 85 && mouseX < 260 && mouseY > 325 && mouseY < 400 && Mode == 3 && highscore > 49){
    Mode = 0
    textCOL = 0
    backCOL = 150
    circleCOL = 255
    
  }else if(mouseX > 85 && mouseX < 260 && mouseY > 325 && mouseY < 400 && Mode == 3 && highscore < 49) {
    Mode = 4
  }
  
  if(mouseX > 335 && mouseX < 510 && mouseY > 325 && mouseY < 400 && Mode == 3 && BlueX > 0){
    Mode = 0
    textCOL = 255
    backCOL = 255
    circleCOL = 255
    
  }else if(mouseX > 335 && mouseX < 510 && mouseY > 325 && mouseY < 400 && Mode == 3 && BlueX == 0) {
    Mode = 4
  }
  
  if(mouseX > 510 && mouseX < 550 && mouseY > 665 && mouseY < 690 && Mode == 4){
    Mode = 0
  }
}