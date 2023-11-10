let myVideo;

function setup() {
  createCanvas(640, 480); // Set up the canvas
  myVideo = createVideo('sunflower.mp4', videoLoaded); // Load the video
  myVideo.hide(); // Hide the default HTML5 video controls
}

function videoLoaded() {
  myVideo.loop(); // Loop the video once it's loaded
}

function draw() {
  background(0); // Set the background to black
  image(myVideo, 0, 0, width, height); // Draw the video to the canvas

  // Example effect: overlay a semi-transparent rectangle that changes color over time
  fill(255, 0, 0, 50); // Semi-transparent red
  rect(0, 0, width, height); // Cover the entire video
}

function mousePressed() {
  // Play or pause the video when the canvas is clicked
  if (myVideo.isPlaying()) {
    myVideo.pause();
  } else {
    myVideo.loop();
  }
}
