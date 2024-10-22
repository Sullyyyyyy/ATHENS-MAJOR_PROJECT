var img;

function preload() {
    img = loadImage("data/athen.png");
}

function setup() {
    createCanvas(2000, 1300);
    frameRate(500);
     filter(BLUR, 4);
}

function draw() {
    image(img, 0, 0, img.width, img.height);
   var x = constrain(mouseX, 0, img.width - 1);
    var y = constrain(mouseY, 0, img.height - 1);
     var zoom = img.get(x, y, 100, 100);
     
      fill(000);  
  textSize(60); 
  textAlign(CENTER, CENTER); 
  textFont('Courier New');
   
text("Focus is identified as a class position", width/2, height/2);  



  
  image(zoom, mouseX, mouseY, zoom.width*2, zoom.height*2);
  
}
