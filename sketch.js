let osc, envelope;

function setup() {
  createCanvas(640, 480);
  
  osc = new p5.SinOsc();
  osc.amp(0);
  osc.start();
  
  osc2 = new p5.SinOsc();
  osc2.amp(0);
  osc2.start();
  
  envelope = new p5.Env();
  envelope.setADSR(0.3, 0.9, 0.6, 0);
  envelope.setRange(1,0);
  
  envelope2 = new p5.Env();
  envelope2.setADSR(0.3, 0.9, 0.6, 0);
  envelope2.setRange(1,0);
}

function draw() {
  background(0);
  if (mouseIsPressed) {
  let freq = map(mouseX, 0, width, 20, 1000);
  osc.freq(freq);
  let amp = map(mouseY, 0, height, 0.01, 0.7);
  envelope.play(osc, 0, 0.1);
  } else {
  }
   if (mouseIsPressed) {
  let freq = map(mouseX, 0, width, 1000, 20);
  osc2.freq(freq);
  let amp = map(mouseY, 0, height, 0.01, 0.7);
  envelope.play(osc2, 0, 0.1);
  } else {
  }
  
  
}