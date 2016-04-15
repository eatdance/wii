// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

/*
 To Do:
 * >Set phase view for keys (1, M, All)
 * >Add 7 images that fade in (not sure what to do about fading or disapearing out)
 * >Add 7 audio files
 * >Responsive image sizes???
 */

var bdr; //Border between small and large rectangles. Proportional to window
var kw; //Key width for "piano" keys
var kh; //Key height for "piano" keys
var kpx; //Determines X coordinate of keys
var kpy; //Determines y coordinate of keys
var kPhase; // Determines what set of keys will be shown
var img0; //Variable for the images
var imgM; // Main image variable
var imgW; //Width of images. Proportional to window
var imgH; //Height of images. Proportional to window
var songM; //speech
var song0; 
var song1;
var song2;
var song4;
var song5; 
var song6;
var backColor = [];
var keyColor = [];
var imgID; //ID variable that determines which image is shown
var imgT; //Sets and gradually decreases transparency for image and is reset with each image change

function preload(){
	songM = loadSound('assets/songM.mp3');
	imgM = loadImage('assets/img/imgM.png');
	
}

function setup() {
  songM.play();

  
  createCanvas(windowWidth, windowHeight);
  
  kPhase = -1;
  imgID = 0;
  imgT = 0;
  
  stroke(0); 
  backColor = [0,0,0];
  
}

function draw() {
  bdr = windowWidth*.03 + windowHeight*.03;
  kw = windowWidth*.03;
  kh = windowHeight*.2;
  kpx = windowWidth*.50;
  kpy = windowHeight*.81;
  
  imgW = windowWidth/2; //Maximum image width is halfthe window width

  background(backColor);
  
  
  
	//Display images based on key pressed
	imageMode(CENTER);
	
	tint(255, imgT);
	image(imgM, windowWidth/2, windowHeight/2 -(windowHeight/10), (1.3)*imgW, (1.3)*imgW/1.8);
	imgT = imgT + 1;
	
}

