/*
To Do:
* 0. Load and play song :)
* 1. Add Haiku Text to Screen
* 	>Title auto appear  :)
*   >Add new lines with mouse click  :)
* 	>Animate lines to start from the bottom  :)
*   >Make text white and background black  :)
* 	>Make text size proportional to screen size  :)
*       >Hands
*       >These hands have crossed lines
*       >On private spaces divine
*       >I'm very sorry
* 
* 2. Fade out Haiku :)
* 
* 3. Display four squares/rectangles 
* 
* 4. Display images 
* 
* 5. Animate background
 */

var w; //windowWidth
var h; //windowHeight
var wh; //width+height

var sound0; //Sketch music

var s0; // square or rectangle color
var s1; // square or rectangle color
var s2; // square or rectangle color
var s3; // square or rectangle color

var img0; //sketch hairy image
var img1; //sketch hairy image
var img2; //sketch hairy image
var img3; //sketch hairy image

var imgHer; //gal profile image
var imgHim; //guy profile image
var imgEgg0; //egg profile image
var imgEgg1; //egg profile image

var count; //mouse click count

var hT; //Haiku title text
var l1; //Haiku line 1
var l2; //Haiku line 2
var l3; //Haiku line 3

var L1H; //Height of line 1
var L2H; //Height of line 2
var L3H; //Height of line 3

var tTr; //Transparency of text

function preload(){
	//sound0 = loadSound("assets/sound/silence.mp3");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	//sound0.play();
	
	s0 = [255,0,0];
	s1 = [0,255,0];
	s2 = [0,0,255];
	s3 = [255,255,0];
	
	imgHer = loadImage("assets/img/her.png");
	imgHim = loadImage("assets/img/him.png");
	imgEgg0 = loadImage("assets/img/egg0.png");
	imgEgg1 = loadImage("assets/img/egg1.png");
	
	img0 = loadImage("assets/img/hair0.png");
	img1 = loadImage("assets/img/hair1.png");
	img2 = loadImage("assets/img/hair2.png");
	img3 = loadImage("assets/img/hair3.png");
	
	count = 0;
	
	hT = "Hands";
	l1 = "These hands have crossed lines";
	l2 = "On private spaces divine";
	l3 = "I'm very sorry";
	
	L1H = windowHeight*1.1;
	L2H = windowHeight*1.1;
	L3H = windowHeight*1.1;
	
	tTr = 255;
}

function draw() {
  w = windowWidth;
  h = windowHeight;
  wh = w+h ;
  
  createCanvas(w, h);
  
  background(0);
  
  textSize(wh/20); //previously 64
  textAlign("center");
  fill(255,0,0,tTr);
  text(hT, w/2, h/2 - wh/20);
  fill(255,255,255,tTr);
  
  textSize(wh/40);
  if(count > 0){
	  text(l1, w/2, L1H + 00);
	  if( L1H > h/2 ){
			L1H = L1H - 7;
		}
	  }
  if(count > 1){
	  text(l2, w/2, L2H + wh/20);
	  if( L2H > h/2 ){
			L2H = L2H - 6;
		}
	  }
  if(count > 2){
	  text(l3, w/2, L3H + wh/10);
	  if( L3H > h/2 ){
			L3H = L3H - 3;
		}
	  }
  if(count > 3){
	  tTr = tTr - 1;
	  }
  /*
  if(count > 4){ //draw four squares
	  rectMode("center");
	  fill(s0);
	  rect(w/4,h/4,w/2,h/2);
	  
	  fill(s1);
	  rect(w*.75,h/4,w/2,h/2);
	  
	  fill(s2);
	  rect(w/4,h*.75,w/2,h/2);
	  
	  fill(s3);
	  rect(w*.75,h*.75,w/2,h/2);
	  
  }
  
  if(count > 5){ //draw facial hair
	  imageMode("center");
	  
	  //profile images
	  image(imgHer, w/4, h/4.2, w*.30,h*.39);
	  image(imgEgg0, w*.75, h/4,  w*.30,h*.39);
	  image(imgEgg1, w/4, h*.75, w*.30,h*.39);
	  image(imgHim, w*.75, h*.75, w*.30,h*.39);
	  
	  //facial hair images
	  image(img0, w/4, h/3.9, w*.30,h*.39);
	  image(img1, w*.75, h*.30,  w*.30,h*.39);
	  image(img2, w/4, h*.96, w*.30,h*.39);
	  image(img3, w*.75, h*.83, w*.30,h*.39);
	  
	  }
  if(count > 6){ //animate background
	  s0 = [random(255),random(255),random(255)];
	  s1 = [random(255),random(255),random(255)];
	  s2 = [random(255),random(255),random(255)];
	  s3 = [random(255),random(255),random(255)];
	  } */
}


function mouseClicked(){
	count = count + 1;
}
