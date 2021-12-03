var bg
var play
var gameState="wait"
var trex 
var trex_img
var logo


function preload(){


logo = loadImage("images/video.gif")
}
function setup(){
    
createCanvas(windowWidth-20,windowHeight-20)
    

  play=createImg("images/homegrey.png")  
  play.position(100,100)
  play.size(100,100)

  
about=createImg("images/infon.png")
about.position(windowWidth-200,100)
about.size(100,100)
}
                            
function draw(){
background(logo)

if(play.mousePressed()){
  gameState = "play"
}

} 