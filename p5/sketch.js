var get_readings;
var x;
var totalWords = [];
var obj = {};

var data;

var avenida = 180;

let hue = 0;
var spaze = 23;
//let mic;

let overBox = false;
let locked = false;

var sound_0;
var sound_1;
var sound_2;
var sound_3;
var sound_4;
var sound_5;
var sound_6;
var sound_7;
var sound_8;
var sound_9;
var sound_10;
var sound_11;
var sound_12;
var sound_13;
var sound_14;
var sound_15;
var sound_16;
var sound_17;
var sound_18;
var sound_19;
var sound_20;

var bx;
var by;
var bx1;
var by1;
var bx2;
var by2;
var bx3;
var by3;
var bx4;
var by4;
var bx5;
var by5;
var bx6;
var by6;
var bx7;
var by7;
var bx8;
var by8;
var bx9;
var by9;
var bx10;
var by10;
var bx11;
var by11;
var bx12;
var by12;
var bx13;
var by13;
var bx14;
var by14;
var bx15;
var by15;
var bx16;
var by16;
var bx17;
var by17;
var bx18;
var by18;
var bx19;
var by19;
var by20;

var x = 100;
var y = 100;

var xspeed = 2.5;
var yspeed = 0.5;

let playMode = 'untilDone';

function preload() {
  futura = loadFont('inc/fonts/futura.otf');
  futuraBold = loadFont('inc/fonts/futura_bold.otf');
    sound_0 = loadSound("sou_nds/20.mp3");
    sound_1 = loadSound("sou_nds/20.mp3");
    sound_2 = loadSound("sou_nds/20.mp3");
    sound_3 = loadSound("sou_nds/20.mp3");
    sound_4 = loadSound("sou_nds/20.mp3");
    sound_5 = loadSound("sou_nds/20.mp3");
    sound_6 = loadSound("sou_nds/20.mp3");
    sound_7 = loadSound("sou_nds/20.mp3");
    sound_8 = loadSound("sou_nds/20.mp3");
    sound_9 = loadSound("sou_nds/20.mp3");
    sound_10 = loadSound("sou_nds/20.mp3");
    sound_11 = loadSound("sou_nds/20.mp3");
    sound_12 = loadSound("sou_nds/20.mp3");
    sound_13 = loadSound("sou_nds/20.mp3");
    sound_14 = loadSound("sou_nds/20.mp3");
    sound_15 = loadSound("sou_nds/20.mp3");
    sound_16 = loadSound("sou_nds/20.mp3");
    sound_17 = loadSound("sou_nds/20.mp3");
    sound_18 = loadSound("sou_nds/20.mp3");
    sound_19 = loadSound("sou_nds/20.mp3");
    sound_20 = loadSound("sou_nds/20.mp3");

    /*
        var poetry_readings = "sgw-poetry-readings_all.json"
        get_readings = loadJSON(poetry_readings);
    */

    var poetry_readings = "words_and_music.json"
    get_readings = loadJSON(poetry_readings);
    

}

var contador = 1;

function setup() {
  
  $("header").css("opacity",1);
  $(".page").css("opacity",1);
  $("footer").css("opacity",1);
  
  setHeaderTextWidth();
  var headerHeight = $("header").height()+68;
  //var headerHeight = 0;
  let cnv = createCanvas(windowWidth, windowHeight-headerHeight);
  
  cnv.parent('page1');
  
  //  createCanvas(windowWidth, windowHeight);
    //background(255, 249, 255);

}

function windowResized() {
  var headerHeight = $("header").height()+68;
  setHeaderTextWidth();
  resizeCanvas(windowWidth, windowHeight-headerHeight);
}


function draw() {

    //background(255, 249, 238);
    clear();

    contador++;

    textFont(futuraBold);

    textSize(14);

    fill(0);

    fill(127);
    stroke(0);

    push();
    cero();
    pop();

    push();
    one();
    pop();

    push();
    two();
    pop();

    push();
    three();
    pop();

    push();
    four();
    pop();

    push();
    five();
    pop();

    push();
    six();
    pop();

    push();
    seven();
    pop();

    push();
    eight();
    pop();

    push();
    nine();
    pop();

    push();
    ten();
    pop();

    push();
    eleven();
    pop();

    push();
    twelve();
    pop();

    push();
    thirteen();
    pop();

    push();
    fourteen();
    pop();

    push();
    fifteen();
    pop();

    push();
    sixteen();
    pop();

    push();
    seventeen();
    pop();

    push();
    eighteen();
    pop();

    push();
    nineteen();
    pop();

    push();
    twenty();
    pop();
}


//////////////////////
// year by function //
//////////////////////

// 2000
function cero() {

    push();

    var ruidoX = 0.00007;
    bx = noise(millis() * ruidoX) * avenida;

    var ruidoY = 0.000025;
    by = noise(millis() * ruidoY) * avenida;

    bx = bx + xspeed;
    by = by + yspeed;

    if ((bx > width) || (bx < 0)) {
        xspeed = xspeed * -1;
    }

    if ((by > height) || (by < 0)) {
        yspeed = yspeed * -1;
    }


    let segundos = get_readings[0].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 5000, 0, 200);

    fill(246, 166, 84, 200);
    noStroke();

    if (

        mouseX > width/14+bx - 90 &&
        mouseX < width/14+bx + 90 &&
        mouseY > height/7+by - 90 &&
        mouseY < height/7+by + 90

    ) {

        overBox = true;
        fill(
            246, 166, 84, random(255));
        strokeWeight(random(48));
        stroke(
            246, 166, 84, 200);
        sound_0.play();
        sound_0.playMode(playMode);
    } else {
        overBox = false;
        sound_0.stop();
    }

    // mousePressed

    if (

        mouseX > width/14+bx - 90 &&
        mouseX < width/14+bx + 90 &&
        mouseY > height/7+by - 90 &&
        mouseY < height/7+by + 90 && mouseIsPressed

    ) {

        overBox = true;
        //window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }


    ellipse(width/19+bx, height/9+by, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);

    noStroke();

    text(get_readings[0].title, width/19+bx - 18, height/9+by + 10);

    pop();

}

// 2001

function one() {

    push();

    var ruidoX = -0.000031;
    bx1 = noise(millis() * ruidoX) * avenida;

    // var bx1 = 120;

    var ruidoY = 0.0001;
    by1 = noise(millis() * ruidoY) * avenida;


    bx1 = bx1 + xspeed;
    by1 = by1 + yspeed;

    if ((bx1 > windowWidth) || (bx1 < 0)) {
        xspeed = xspeed * -1;
    }

    if ((by1 > windowHeight) || (by1 < 0)) {
        yspeed = yspeed * -1;
    }

    let segundos = get_readings[1].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 5000, 0, 200);
    fill(255, 211, 134, 200);
    noStroke();

    if (

        mouseX > width/5+bx1 - 90 &&
        mouseX < width/5+bx1 + 90 &&
        mouseY > height/9+by1 - 90 &&
        mouseY < height/9+by1 + 90

    ) {

        overBox = true;
        fill(255, 211, 134, random(255));
        strokeWeight(random(48));
        stroke(
            255, 211, 134, 200);
        sound_1.play();
        sound_1.playMode(playMode);
    } else {
        overBox = false;
        sound_1.stop();
    }

    if (

        mouseX > width/5+bx1 - 90 &&
        mouseX < width/5+bx1 + 90 &&
        mouseY > height/9+by1 - 90 &&
        mouseY < height/9+by1 + 90 && mouseIsPressed

    ) {
        overBox = true;
        //window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }

    ellipse(width/5+bx1, height/9+by1, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[1].title, width/5+bx1 - 18, height/9+by1 + 10);

    pop();

}

// 2002

function two() {

    push();

    //translate(300, 0);

    var ruidoX = 0.000039;
    bx2 = noise(millis() * ruidoX) * avenida;

    var ruidoY = 0.000025;
    by2 = noise(millis() * ruidoY) * avenida;

    bx2 = bx2 + xspeed;
    by2 = by2 + yspeed;

    //print(by2);

    if ((bx2 > width) || (bx2 < 0)) {
        xspeed = xspeed * -1;
    }

    if ((by2 > 800) || (by2 < 0)) {
        yspeed = yspeed * -1;
    }

    let segundos = get_readings[2].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 5000, 0, 200);

    fill(148, 80, 67, 200);
    noStroke();

    if (

        mouseX > width/3+bx2 - 90 &&
        mouseX < width/3+bx2 + 90 &&
        mouseY > height/7+by2 - 90 &&
        mouseY < height/7+by2 + 90

    ) {

        overBox = true;
        fill(148, 80, 67, random(255));
        strokeWeight(random(48));
        stroke(
            148, 80, 67, 200);
        sound_2.play();
        sound_2.playMode(playMode);
    } else {
        overBox = false;
        sound_2.stop();
    }

    // mousePressed

    if (

        mouseX > width/3+bx2 - 90 &&
        mouseX < width/3+bx2 + 90 &&
        mouseY > height/7+by2 - 90 &&
        mouseY < height/7+by2 + 90 && mouseIsPressed

    ) {

        overBox = true;
        //window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }

    ellipse(width/3+bx2, height/7+by2, mapeo_segundos, mapeo_segundos);

    fill(244, 244, 246);
    noStroke();

    text(get_readings[2].title, width/3+bx2 - 18, height/7+by2 + 10);

    pop();

}

// 2003

function three() {

    push();

   // translate(70, 150);

    var ruidoX = -0.000081;
    bx3 = noise(millis() * ruidoX) * avenida;

    var ruidoY = -0.000091;
    by3 = noise(millis() * ruidoY) * avenida;

    bx3 = bx3 + xspeed;
    by3 = by3 + yspeed;

    if ((bx3 > windowWidth) || (bx3 < 0)) {
        xspeed = xspeed * -1;
    }

    if ((by3 > windowHeight) || (by3 < 0)) {
        yspeed = yspeed * -1;
    }

    let segundos = get_readings[3].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 5000, 0, 200);

    fill(217, 93, 70, 200);
    noStroke();

    if (

        mouseX > width/2+bx3 - 90 &&
        mouseX < width/2+bx3 + 90 &&
        mouseY > height/7+by3 - 90 &&
        mouseY < height/7+by3 + 90

    ) {

        overBox = true;
        fill(217, 93, 70, random(255));
        strokeWeight(random(48));
        stroke(
            217, 93, 70, 200);
        sound_3.play();
        sound_3.playMode(playMode);
    } else {
        overBox = false;
        sound_3.stop();
    }

    // mousePressed

    if (

        mouseX > width/2+bx3 - 90 &&
        mouseX < width/2+bx3 + 90 &&
        mouseY > height/7+by3 - 90 &&
        mouseY < height/7+by3 + 90 && mouseIsPressed

    ) {

        overBox = true;
        //window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }

    ellipse(width/2+bx3, height/7+by3, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[3].title, width/2+bx3 - 18, height/7+by3 + 10);

    pop();

}

//2004

function four() {

    push();

    var ruidoX = -0.000031;
    bx4 = noise(millis() * ruidoX) * avenida;

    var ruidoY = -0.000051;
    by4 = noise(millis() * ruidoY) * avenida;

    bx4 = bx4 + xspeed;
    by4 = by4 + yspeed;

    if (bx4 > windowWidth) {
        xspeed = -5;
    }

    if (by4 > windowHeight) {
        yspeed = -5;
    }

    let segundos = get_readings[4].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 5000, 0, 200);
    fill(162, 177, 177, 200);
    noStroke();

    if (

        mouseX > width/1.45+bx4 - 80 &&
        mouseX < width/1.45+bx4 + 80 &&
        mouseY > height/7+by4 - 80 &&
        mouseY < height/7+by4 + 80

    ) {

        overBox = true;
        fill(162, 177, 177, random(255));
        strokeWeight(random(48));
        stroke(
            162, 177, 177, 200);
        sound_4.play();
        sound_4.playMode(playMode);
    } else {
        overBox = false;
        sound_4.stop();
    }

    if (

        mouseX > width/1.45+bx4 - 80 &&
        mouseX < width/1.45+bx4 + 80 &&
        mouseY > height/7+by4 - 80 &&
        mouseY < height/7+by4 + 80 && mouseIsPressed

    ) {
        overBox = true;
        //window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }

    ellipse(width/1.45+bx4, height/7+by4, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[4].title, width/1.45+bx4 - 20, height/7+by4 + 10);

    pop();

}

// 2005

function five() {

    push();

    var ruidoX = 0.00007;
    bx5 = noise(millis() * ruidoX) * avenida;

    var ruidoY = 0.000025;
    by5 = noise(millis() * ruidoY) * avenida;


    bx5 = bx5 + xspeed;
    by5 = by5 + yspeed;

    if ((bx5 > windowWidth) || (bx5 < 0)) {
        xspeed = xspeed * -1;
    }

    if ((by5 > windowHeight) || (by5 < 0)) {
        yspeed = yspeed * -1;
    }

    let segundos = get_readings[5].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 5000, 0, 200);

    fill(222, 144, 66, 200);
    noStroke();

    if (

        mouseX > width/1.2+bx5 - 90 &&
        mouseX < width/1.2+bx5 + 90 &&
        mouseY > height/7+by5  - 90 &&
        mouseY < height/7+by5  + 90

    ) {

        overBox = true;
        fill(
            222, 144, 66, random(255));
        strokeWeight(random(48));
        stroke(
            222, 144, 66, 200);
        sound_5.play();
        sound_5.playMode(playMode);
    } else {
        overBox = false;
        sound_5.stop();
    }

    // if - mousePressed

    if (

        mouseX > width/1.2+bx5 - 90 &&
        mouseX < width/1.2+bx5 + 90 &&
        mouseY > height/7+by5  - 90 &&
        mouseY < height/7+by5  + 90 && mouseIsPressed

    ) {

        overBox = true;
        //window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }


    ellipse(width/1.2+bx5, height/7+by5, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);

    noStroke();

    text(get_readings[5].title, width/1.2+bx5 - 18, height/7+by5 + 10);

    pop();

}

// 2006

function six() {

    push();

    var ruidoX = -0.000081;
    bx6 = noise(millis() * ruidoX) * avenida;

    var ruidoY = 0.0001;
    by6 = noise(millis() * ruidoY) * avenida;

    bx6 = bx6 + xspeed;
    by6 = by6 + yspeed;

    if ((bx6 > windowWidth) || (bx6 < 0)) {
        xspeed = xspeed * -1;
    }

    if ((by6 > windowHeight) || (by6 < 0)) {
        yspeed = yspeed * -1;
    }

    let segundos = get_readings[6].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 5000, 0, 200);
    fill(217, 93, 70, 200);
    noStroke();

    if (

        mouseX > width/10+bx6 - 90 &&
        mouseX < width/10+bx6 + 90 &&
        mouseY > height/3+by6 - 90 &&
        mouseY < height/3+by6 + 90

    ) {

        overBox = true;
        fill(217, 93, 70, random(255));
        strokeWeight(random(48));
        stroke(
            217, 93, 70, 200);
        sound_6.play();
        sound_6.playMode(playMode);
    } else {
        overBox = false;
        sound_6.stop();
    }

    if (

        mouseX > width/10+bx6 - 90 &&
        mouseX < width/10+bx6 + 90 &&
        mouseY > height/3+by6 - 90 &&
        mouseY < height/3+by6 + 90 && mouseIsPressed

    ) {
        overBox = true;
        //window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }

    ellipse(width/10+bx6, height/3+by6, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[6].title, width/10+bx6 - 18, height/3+by6 + 10);

    pop();

}

// 2007

function seven() {

    push();

    var ruidoX = 0.000129;
    bx7 = noise(millis() * ruidoX) * avenida;

    var ruidoY = 0.000025;
    by7 = noise(millis() * ruidoY) * avenida;


    bx7 = bx7 + xspeed;
    by7 = by7 + yspeed;

    if ((bx7 > windowWidth) || (bx7 < 0)) {
        xspeed = xspeed * -1;
    }

    if ((by7 > windowHeight) || (by7 < 0)) {
        yspeed = yspeed * -1;
    }

    let segundos = get_readings[7].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 4000, 0, 200);

    fill(65, 73, 73, 200);
    noStroke();

    if (

        mouseX > width/4+bx7 - 90 &&
        mouseX < width/4+bx7 + 90 &&
        mouseY > height/3+by7 - 90 &&
        mouseY < height/3+by7 + 90

    ) {

        overBox = true;
        fill(65, 73, 73, random(255));
        strokeWeight(random(48));
        stroke(
            65, 73, 73, 200);
        sound_7.play();
        sound_7.playMode(playMode);
    } else {
        overBox = false;
        sound_7.stop();
    }

    // mousePressed

    if (

        mouseX > width/4+bx7 - 90 &&
        mouseX < width/4+bx7 + 90 &&
        mouseY > height/3+by7 - 90 &&
        mouseY < height/3+by7 + 90 && mouseIsPressed

    ) {

        overBox = true;
        //window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }


    ellipse(width/4.3+bx7, height/3+by7, mapeo_segundos, mapeo_segundos);

    fill(244, 244, 246);
    noStroke();

    text(get_readings[7].title, width/4.3+bx7 - 18, height/3+by7 + 10);

    pop();

}

// 2008

function eight() {

    push();

    var ruidoX = 0.000029;
    bx8 = noise(millis() * ruidoX) * avenida;

    var ruidoY = 0.000021;
    by8 = noise(millis() * ruidoY) * avenida;

    bx8 = bx8 + xspeed;
    by8 = by8 + yspeed;

    if ((bx8 > windowWidth) || (bx8 < 0)) {
        xspeed = xspeed * -1;
    }

    if ((by8 > windowHeight) || (by8 < 0)) {
        yspeed = yspeed * -1;
    }


    let segundos = get_readings[8].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 5000, 0, 200);

    fill(255, 211, 134, 200);
    noStroke();

    if (

        mouseX > width/2.8+bx8 - 90 &&
        mouseX < width/2.8+bx8 + 90 &&
        mouseY > height/3.1+by8 - 90 &&
        mouseY < height/3.1+by8 + 90

    ) {

        overBox = true;
        fill(255, 211, 134, random(255));
        strokeWeight(random(48));
        stroke(
            255, 211, 134, 200);
        sound_8.play();
        sound_8.playMode(playMode);
    } else {
        overBox = false;
        sound_8.stop();
    }

    // mousePressed

    if (

        mouseX > width/2.8+bx8 - 90 &&
        mouseX < width/2.8+bx8 + 90 &&
        mouseY > height/3.1+by8 - 90 &&
        mouseY < height/3.1+by8 + 90 && mouseIsPressed

    ) {

        overBox = true;
        //window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }


    ellipse(width/2.8+bx8, height/3.1+by8, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[8].title, width/2.8+bx8 - 18, height/3.1+by8 + 10);

    pop();

}

// 2009

function nine() {

    push();

    var ruidoX = 0.0000429;
    bx9 = noise(millis() * ruidoX) * avenida;

    var ruidoY = 0.000025;
    by9 = noise(millis() * ruidoY) * avenida;


    bx9 = bx9 + xspeed;
    by9 = by9 + yspeed;

    if ((bx9 > windowWidth) || (bx9 < 0)) {
        xspeed = xspeed * -1;
    }

    if ((by9 > windowHeight) || (by9 < 0)) {
        yspeed = yspeed * -1;
    }

    let segundos = get_readings[9].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 5000, 0, 200);
    fill(255, 168, 81, 200);
    noStroke();

    if (

        mouseX > width/2.07+bx9 - 90 &&
        mouseX < width/2.07+bx9 + 90 &&
        mouseY > height/2.6+by9 - 90 &&
        mouseY < height/2.6+by9 + 90

    ) {

        overBox = true;
        fill(255, 168, 81, random(255));
        strokeWeight(random(48));
        stroke(
            255, 168, 81, 200);
        sound_9.play();
        sound_9.playMode(playMode);
    } else {
        overBox = false;
        sound_9.stop();
    }

    if (

        mouseX > width/2.07+bx9 - 90 &&
        mouseX < width/2.07+bx9 + 90 &&
        mouseY > height/2.6+by9 - 90 &&
        mouseY < height/2.6+by9 + 90 && mouseIsPressed

    ) {
        overBox = true;
        //window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }

    ellipse(width/2.07+bx9, height/2.6+by9, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[9].title, width/2.07+bx9 - 18, height/2.6+by9 + 10);
    // text(get_readings[4].name, bx4 - 150, by4 + spaze);

    pop();

}


// 2010

function ten() {

    push();

    var ruidoX = 0.000029;
    bx10 = noise(millis() * ruidoX) * avenida;

    var ruidoY = 0.000025;
    by10 = noise(millis() * ruidoY) * avenida;


    bx10 = bx10 + xspeed;
    by10 = by10 + yspeed;

    if ((bx10 > windowWidth) || (bx10 < 0)) {
        xspeed = xspeed * -1;
    }

    if ((by10 > windowHeight) || (by10 < 0)) {
        yspeed = yspeed * -1;
    }

    let segundos = get_readings[10].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 4500, 0, 200);
    fill(224, 224, 224, 200);
    noStroke();

    if (

        mouseX > width/1.58+bx10 - 90 &&
        mouseX < width/1.58+bx10 + 90 &&
        mouseY > height/3.1+by10 - 90 &&
        mouseY < height/3.1+by10 + 90 

    ) {

        overBox = true;
        fill(224, 224, 224, random(255));
        strokeWeight(random(48));
        stroke(
            224, 224, 224, 200);
        sound_10.play();
        sound_10.playMode(playMode);
    } else {
        overBox = false;
        sound_10.stop();
    }

    if (

        mouseX > width/1.58+bx10 - 90 &&
        mouseX < width/1.58+bx10 + 90 &&
        mouseY > height/3.1+by10 - 90 &&
        mouseY < height/3.1+by10 + 90 && mouseIsPressed

    ) {
        overBox = true;
        //window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }

    ellipse(width/1.58+bx10, height/3.1+by10, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[10].title, width/1.58+bx10 - 18, height/3.1+by10 + 10);

    pop();

}

// 2011

function eleven() {

    push();

    var ruidoX = 0.00007;
    bx11 = noise(millis() * ruidoX) * avenida;
    // bx = noise(millis() * ruidoX) * windowWidth - 300;

    var ruidoY = 0.000025;
    by11 = noise(millis() * ruidoY) * avenida;
    // by = noise(millis() * ruidoY) * windowHeight - 100;

    bx11 = bx11 + xspeed;
    by11 = by11 + yspeed;

    if ((bx11 > width) || (bx11 < 0)) {
        xspeed = xspeed * -1;
    }

    if ((by11 > height) || (by11 < 0)) {
        yspeed = yspeed * -1;
    }

    let segundos = get_readings[11].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 5000, 0, 200);

    fill(148, 80, 67, 200);
    noStroke();

    if (

        mouseX > width/1.25+bx11 - 90 &&
        mouseX < width/1.25+bx11 + 90 &&
        mouseY > height/2.6+by11 - 90 &&
        mouseY < height/2.6+by11 + 90

    ) {

        overBox = true;
        fill(
            148, 80, 67, random(255));
        strokeWeight(random(48));
        stroke(
            148, 80, 67, 200);
        sound_11.play();
        sound_11.playMode(playMode);
    } else {
        overBox = false;
        sound_11.stop();
    }

    // mousePressed

    if (

        mouseX > width/1.25+bx11 - 90 &&
        mouseX < width/1.25+bx11 + 90 &&
        mouseY > height/2.6+by11 - 90 &&
        mouseY < height/2.6+by11 + 90 && mouseIsPressed

    ) {

        overBox = true;
        //window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }


    ellipse(width/1.25+bx11, height/2.6+by11, mapeo_segundos, mapeo_segundos);

    fill(244, 244, 246);

    noStroke();

    text(get_readings[11].title, width/1.25+bx11 - 18, height/2.6+by11 + 10);
    // text(get_readings[0].name, bx - 10, by + spaze);

    pop();

}

// 2012

function twelve() {

    push();

    var ruidoX = -0.000031;
    bx12 = noise(millis() * ruidoX) * avenida;

    // var bx1 = 120;

    var ruidoY = 0.0001;
    by12 = noise(millis() * ruidoY) * avenida;


    bx12 = bx12 + xspeed;
    by12 = by12 + yspeed;

    if ((bx12 > windowWidth) || (bx12 < 0)) {
        xspeed = xspeed * -1;
    }

    if ((by12 > windowHeight) || (by12 < 0)) {
        yspeed = yspeed * -1;
    }

    let segundos = get_readings[12].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 5000, 0, 200);
    fill(255, 211, 134, 200);
    noStroke();

    if (

        mouseX > width/12+bx12 - 90 &&
        mouseX < width/12+bx12 + 90 &&
        mouseY > height/1.9+by12 - 90 &&
        mouseY < height/1.9+by12 + 90

    ) {

        overBox = true;
        fill(255, 211, 134, random(255));
        strokeWeight(random(48));
        stroke(
            255, 211, 134, 200);
        sound_12.play();
        sound_12.playMode(playMode);
    } else {
        overBox = false;
        sound_12.stop();
    }

    if (

        mouseX > width/12+bx12 - 90 &&
        mouseX < width/12+bx12 + 90 &&
        mouseY > height/1.9+by12 - 90 &&
        mouseY < height/1.9+by12 + 90 && mouseIsPressed

    ) {
        overBox = true;
        //window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }


    ellipse(width/12+bx12, height/1.9+by12, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[12].title, width/12+bx12 - 18, height/1.9+by12 + 10);

    pop();

}

// 2013

function thirteen() {

    push();

    var ruidoX = 0.00009;
    bx13 = noise(millis() * ruidoX) * avenida;

    var ruidoY = 0.000025;
    by13 = noise(millis() * ruidoY) * avenida;

    bx13 = bx13 + xspeed;
    by13 = by13 + yspeed;

    //print(by13);

    if ((bx13 > width) || (bx13 < 0)) {
        xspeed = xspeed * -1;
    }

    if ((by13 > 800) || (by13 < 0)) {
        yspeed = yspeed * -1;
    }

    let segundos = get_readings[13].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 5000, 0, 200);

    fill(222, 144, 66, 200);
    noStroke();

    if (

        mouseX > width/4+bx13 - 90 &&
        mouseX < width/4+bx13 + 90 &&
        mouseY > height/1.9+by13 - 90 &&
        mouseY < height/1.9+by13 + 90

    ) {

        overBox = true;
        fill(222, 144, 66, random(255));
        strokeWeight(random(48));
        stroke(
            222, 144, 66, 200);
        sound_13.play();
        sound_13.playMode(playMode);
    } else {
        overBox = false;
        sound_13.stop();
    }

    // mousePressed

    if (

        mouseX > width/4+bx13 - 90 &&
        mouseX < width/4+bx13 + 90 &&
        mouseY > height/1.9+by13 - 90 &&
        mouseY < height/1.9+by13 + 90 && mouseIsPressed

    ) {

        overBox = true;
        //window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }


    ellipse(width/4+bx13, height/1.9+by13, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[13].title, width/4+bx13 - 20, height/1.9+by13 + 10);

    pop();

}

// 2014

function fourteen() {

    push();

    var ruidoX = 0.000081;
    bx14 = noise(millis() * ruidoX) * avenida;

    var ruidoY = 0.000051;
    by14 = noise(millis() * ruidoY) * avenida;

    bx14 = bx14 + xspeed;
    by14 = by14 + yspeed;

    if ((bx14 > windowWidth) || (bx14 < 0)) {
        xspeed = xspeed * -1;
    }

    if ((by14 > windowHeight) || (by14 < 0)) {
        yspeed = yspeed * -1;
    }

    let segundos = get_readings[14].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 5000, 0, 200);

    fill(217, 93, 70, 200);
    noStroke();

    if (

        mouseX > width/2.5+bx14 - 90 &&
        mouseX < width/2.5+bx14 + 90 &&
        mouseY > height/1.9+by14 - 90 &&
        mouseY < height/1.9+by14 + 90

    ) {

        overBox = true;
        fill(217, 93, 70, random(255));
        strokeWeight(random(48));
        stroke(
            217, 93, 70, 200);
        sound_14.play();
        sound_14.playMode(playMode);
    } else {
        overBox = false;
        sound_14.stop();
    }

    // mousePressed

    if (

        mouseX > width/2.5+bx14 - 90 &&
        mouseX < width/2.5+bx14 + 90 &&
        mouseY > height/1.9+by14 - 90 &&
        mouseY < height/1.9+by14 + 90 && mouseIsPressed

    ) {

        overBox = true;
        //window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }

    ellipse(width/2.5+bx14, height/1.9+by14, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[14].title, width/2.5+bx14 - 18, height/1.9+by14 + 10);

    pop();

}

// 2015

function fifteen() {

    push();

    var ruidoX = -0.000031;
    bx15 = noise(millis() * ruidoX) * avenida;

    //    bx15 = noise(millis() * ruidoX) * width + 100 - 300;

    var ruidoY = -0.000051;
    by15 = noise(millis() * ruidoY) * avenida;

    //    by15 = noise(millis() * ruidoY) * height + 400;

    //print(by15);


    bx15 = bx15 + xspeed;
    by15 = by15 + yspeed;

    if (bx15 > windowWidth) {
        xspeed = -5;
    }

    if (by15 > windowHeight) {
        yspeed = -5;
    }


    let segundos = get_readings[15].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 5000, 0, 200);
    fill(162, 177, 177, 200);
    noStroke();

    if (

        mouseX > width/1.7+bx15 - 80 &&
        mouseX < width/1.7+bx15 + 80 &&
        mouseY > height/1.9+by15 - 80 &&
        mouseY < height/1.9+by15 + 80

    ) {

        overBox = true;
        fill(162, 177, 177, random(255));
        strokeWeight(random(48));
        stroke(
            162, 177, 177, 200);
        sound_15.play();
        sound_15.playMode(playMode);
    } else {
        overBox = false;
        sound_15.stop();
    }

    if (

        mouseX > width/1.7+bx15 - 80 &&
        mouseX < width/1.7+bx15 + 80 &&
        mouseY > height/1.9+by15 - 80 &&
        mouseY < height/1.9+by15 + 80 && mouseIsPressed

    ) {
        overBox = true;
        //window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }

    ellipse(width/1.7+bx15, height/1.9+by15, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[15].title, width/1.7+bx15 - 18, height/1.9+by15 + 10);

    pop();

}

// 2016

function sixteen() {

    push();

    var ruidoX = 0.00007;
    bx16 = noise(millis() * ruidoX) * avenida;

    var ruidoY = 0.000025;
    by16 = noise(millis() * ruidoY) * avenida;


    bx16 = bx16 + xspeed;
    by16 = by16 + yspeed;

    if ((bx16 > windowWidth) || (bx16 < 0)) {
        xspeed = xspeed * -1;
    }

    if ((by16 > windowHeight) || (by16 < 0)) {
        yspeed = yspeed * -1;
    }

    let segundos = get_readings[16].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 5000, 0, 200);

    fill(255, 211, 134, 200);
    noStroke();

    if (

        mouseX > width/1.33+bx16 - 90 &&
        mouseX < width/1.33+bx16 + 90 &&
        mouseY > height/1.9+by16 - 90 &&
        mouseY < height/1.9+by16 + 90

    ) {

        overBox = true;
        fill(
            255, 211, 134, random(255));
        strokeWeight(random(48));
        stroke(
            255, 211, 134, 200);
        sound_16.play();
        sound_16.playMode(playMode);
    } else {
        overBox = false;
        sound_16.stop();
    }

    // mousePressed

    if (

        mouseX > width/1.33+bx16 - 90 &&
        mouseX < width/1.33+bx16 + 90 &&
        mouseY > height/1.9+by16 - 90 &&
        mouseY < height/1.9+by16 + 90 && mouseIsPressed

    ) {

        overBox = true;
        //window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }


    ellipse(width/1.33+bx16, height/1.9+by16, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);

    noStroke();

    text(get_readings[16].title, width/1.33+bx16 - 18, height/1.9+by16 + 10);

    pop();

}

// 2017

function seventeen() {

    push();

    var ruidoX = -0.000081;
    bx17 = noise(millis() * ruidoX) * avenida;

    // var bx1 = 120;

    var ruidoY = 0.0001;
    by17 = noise(millis() * ruidoY) * avenida;

    bx17 = bx17 + xspeed;
    by17 = by17 + yspeed;

    if ((bx17 > windowWidth) || (bx17 < 0)) {
        xspeed = xspeed * -1;
    }

    if ((by17 > windowHeight) || (by17 < 0)) {
        yspeed = yspeed * -1;
    }

    let segundos = get_readings[17].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 5000, 0, 200);
    fill(65, 73, 73, 200);
    noStroke();

    if (

        mouseX > width/7+bx1 - 90 &&
        mouseX < width/7+bx1 + 90 &&
        mouseY > height/1.5+by17 - 90 &&
        mouseY < height/1.5+by17 + 90

    ) {

        overBox = true;
        fill(65, 73, 73, random(255));
        strokeWeight(random(48));
        stroke(
            65, 73, 73, 200);
        sound_17.play();
        sound_17.playMode(playMode);
    } else {
        overBox = false;
        sound_17.stop();
    }

    if (

        mouseX > width/7+bx1 - 90 &&
        mouseX < width/7+bx1 + 90 &&
        mouseY > height/1.5+by17 - 90 &&
        mouseY < height/1.5+by17 + 90 && mouseIsPressed

    ) {
        overBox = true;
        //window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }

    ellipse(width/7+bx17, height/1.5+by17, mapeo_segundos, mapeo_segundos);

    fill(244, 244, 246);
    noStroke();

    text(get_readings[17].title, width/7+bx17 - 18, height/1.5+by17 + 10);

    pop();

}

// 2018

function eighteen() {

    push();

    var ruidoX = 0.000129;
    bx18 = noise(millis() * ruidoX) * avenida;

    var ruidoY = 0.000025;
    by18 = noise(millis() * ruidoY) * avenida;


    bx18 = bx18 + xspeed;
    by18 = by18 + yspeed;

    if ((bx18 > windowWidth) || (bx18 < 0)) {
        xspeed = xspeed * -1;
    }

    if ((by18 > windowHeight) || (by18 < 0)) {
        yspeed = yspeed * -1;
    }

    let segundos = get_readings[18].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 4000, 0, 200);

    fill(224, 224, 224, 200);
    noStroke();

    if (

        mouseX > width/3.6+bx18 - 90 &&
        mouseX < width/3.6+bx18 + 90 &&
        mouseY > height/1.4+by18 - 90 &&
        mouseY < height/1.4+by18 + 90

    ) {

        overBox = true;
        fill(224, 224, 224, random(255));
        strokeWeight(random(48));
        stroke(
            224, 224, 224, 200);
        sound_18.play();
        sound_18.playMode(playMode);
    } else {
        overBox = false;
        sound_18.stop();
    }

    // mousePressed

    if (

        mouseX > width/3.6+bx18 - 90 &&
        mouseX < width/3.6+bx18 + 90 &&
        mouseY > height/1.4+by18 - 90 &&
        mouseY < height/1.4+by18 + 90 && mouseIsPressed

    ) {

        overBox = true;
        //window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }


    ellipse(width/3.6+bx18, height/1.4+by18, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[18].title, width/3.6+bx18 - 18, height/1.4+by18 + 10);

    pop();

}

// 2019

function nineteen() {

    push();

    var ruidoX = 0.000029;
    bx19 = noise(millis() * ruidoX) * avenida;

    var ruidoY = 0.000021;
    by19 = noise(millis() * ruidoY) * avenida;

    bx19 = bx19 + xspeed;
    by19 = by19 + yspeed;

    if ((bx19 > windowWidth) || (bx19 < 0)) {
        xspeed = xspeed * -1;
    }

    if ((by19 > windowHeight) || (by19 < 0)) {
        yspeed = yspeed * -1;
    }


    let segundos = get_readings[19].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 5000, 0, 200);

    fill(255, 211, 134, 200);
    noStroke();

    if (

        mouseX > width/2+bx19 - 90 &&
        mouseX < width/2+bx19 + 90 &&
        mouseY > height/1.4+by19 - 90 &&
        mouseY < height/1.4+by19 + 90

    ) {

        overBox = true;
        fill(255, 211, 134, random(255));
        strokeWeight(random(48));
        stroke(
            255, 211, 134, 200);
        sound_19.play();
        sound_19.playMode(playMode);
    } else {
        overBox = false;
        sound_19.stop();
    }

    // mousePressed

    if (

        mouseX > width/2+bx19 - 90 &&
        mouseX < width/2+bx19 + 90 &&
        mouseY > height/1.4+by19 - 90 &&
        mouseY < height/1.4+by19 + 90 && mouseIsPressed

    ) {

        overBox = true;
        //window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }


    ellipse(width/2+bx19, height/1.4+by19, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[19].title, width/2+bx19 - 18, height/1.4+by19 + 10);

    pop();

}

// 2020

function twenty() {

    push();

    var ruidoX = 0.0000429;
    bx20 = noise(millis() * ruidoX) * avenida;

    var ruidoY = 0.000025;
    by20 = noise(millis() * ruidoY) * avenida;


    bx20 = bx20 + xspeed;
    by20 = by20 + yspeed;

    if ((bx20 > windowWidth) || (bx20 < 0)) {
        xspeed = xspeed * -1;
    }

    if ((by20 > windowHeight) || (by20 < 0)) {
        yspeed = yspeed * -1;
    }

    let segundos = get_readings[20].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 4000, 0, 200);
    fill(217, 93, 70, 200);
    noStroke();

    if (
        
        mouseX > width/1.5+bx20 - 90 &&
        mouseX < width/1.5+bx20 + 90 &&
        mouseY > height/1.4+by20 - 90 &&
        mouseY < height/1.4+by20 + 90

    ) {

        overBox = true;
        fill(217, 93, 70, random(255));
        strokeWeight(random(48));
        stroke(
            217, 93, 70, 200);
        sound_20.play();
        sound_20.playMode(playMode);
    } else {
        overBox = false;
        sound_20.stop();
    }

    if (

        mouseX > width/1.5+bx20 - 90 &&
        mouseX < width/1.5+bx20 + 90 &&
        mouseY > height/1.4+by20 - 90 &&
        mouseY < height/1.4+by20 + 90 && mouseIsPressed

    ) {
        overBox = true;
        window.open("2020.html");
    } else {
        overBox = false;
    }

    ellipse(width/1.5+bx20, height/1.4+by20, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[20].title, width/1.5+bx20 - 18, height/1.4+by20 + 10);

    pop();

}



/* 


650 379 9946
Mayer


*/