let aSlider 
let bSlider 
let cSlider 
let dSlider 

//seleziono la lettera dall'HTML
const lettera = document.getElementById("text")

function preload() {
  // fontRegular = loadFont('CC_provaGX.ttf');
}

function setup(){
  createCanvas(windowWidth,windowHeight);

  fill(255);
  textSize(20);
  noStroke();

  // Slider(inizio, fine, iniziale)
  aSlider = createSlider(-100, 100, 0);
  aSlider.position(30, height-100);  
  bSlider = createSlider(-100, 100, 0);
  bSlider.position(30, height-200);  
  cSlider = createSlider(-100, 100, 0);
  cSlider.position(30, height-300);  
  dSlider = createSlider(-100, 100, 0);
  dSlider.position(30, height-400);

}


function draw(){
  //miusra dimensioni pagina
  const width = window.innerWidth
  const height = window.innerHeight

  const a = aSlider.value();
  const b = bSlider.value();
  const c = cSlider.value();
  const d = dSlider.value();

  text('Sadness/Joy', aSlider.x + aSlider.width + 50, aSlider.y + aSlider.height);
  text('Anticipation/Surprise', bSlider.x + bSlider.width + 50, bSlider.y + bSlider.height);
  text('Disgust/Trust', cSlider.x + cSlider.width + 50, cSlider.y + cSlider.height);
  text('Anger/Fear', dSlider.x + dSlider.width + 50, dSlider.y + dSlider.height);

  //dimesnione font
  lettera.style["font-size"] = "500px";

  //css che va a modificare
  lettera.style["font-variation-settings"] = " 'SAJO' " + a + "," + " 'ANSU' " + b + "," + " 'DITR' " + c + "," + " 'ANFE' " + d;
}

// -- EVENTI ----------------------------------

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}