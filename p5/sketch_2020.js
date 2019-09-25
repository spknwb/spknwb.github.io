var get_readings;
var x;
var totalWords = [];
var obj = {};

var data;

var avenida = 800;
var avenidaY = 300;

var font_space = 45;

let hue = 0;
var spaze = 23;
let mic;

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


    /*
        var poetry_readings = "sgw-poetry-readings_all.json"
        get_readings = loadJSON(poetry_readings);
    */

    var poetry_readings = "words_2020.json"
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
  
  cnv.parent('page2');
  
  //  createCanvas(windowWidth, windowHeight);
    //background(255, 249, 255);

    // Create an Audio input
    mic = new p5.AudioIn();

    // start the Audio Input.
    // By default, it does not .connect() (to the computer speakers)
    mic.start();

    translate(150, 0)
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

}


//////////////////////
// month by function //
//////////////////////

// january
function cero() {

    push();

    var ruidoX = 0.00007;
    bx = noise(millis() * ruidoX) * avenida;
    // bx = noise(millis() * ruidoX) * windowWidth - 300;

    var ruidoY = 0.000025;
    by = noise(millis() * ruidoY) * avenidaY;
    // by = noise(millis() * ruidoY) * windowHeight - 100;

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

    fill(217, 93, 70, 200);
    noStroke();

    if (

        mouseX > bx - 90 &&
        mouseX < bx + 90 &&
        mouseY > by - 90 &&
        mouseY < by + 90

    ) {

        overBox = true;
        fill(
            217, 93, 70, random(255));
        strokeWeight(random(48));
        stroke(
            217, 93, 70, 200);
        sound_0.play();
        sound_0.playMode(playMode);
    } else {
        overBox = false;
        sound_0.stop();
    }

    // mousePressed

    if (

        mouseX > bx - 90 &&
        mouseX < bx + 90 &&
        mouseY > by - 90 &&
        mouseY < by + 90 && mouseIsPressed

    ) {

        overBox = true;
        window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }


    ellipse(bx, by, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);

    noStroke();

    text(get_readings[0].title, bx - font_space, by + 10);
    // text(get_readings[0].name, bx - 10, by + spaze);

    pop();

}


function one() {

    push();

    translate(200, 0);

    var ruidoX = -0.000031;
    bx1 = noise(millis() * ruidoX) * avenida;

    // var bx1 = 120;

    var ruidoY = 0.0001;
    by1 = noise(millis() * ruidoY) * avenidaY;


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

        mouseX > bx1 + 200 - 90 &&
        mouseX < bx1 + 200 + 90 &&
        mouseY > by1 - 90 &&
        mouseY < by1 + 90

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

        mouseX > bx1 + 200 - 90 &&
        mouseX < bx1 + 200 + 90 &&
        mouseY > by1 - 90 &&
        mouseY < by1 + 90 && mouseIsPressed

    ) {
        overBox = true;
        window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }


    ellipse(bx1, by1, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[1].title, bx1 - font_space, by1 + 10);
    //text(get_readings[1].name, bx1 - 150, by1 + spaze);

    pop();

}

function two() {

    push();

    translate(300, 0);

    var ruidoX = 0.00009;
    bx2 = noise(millis() * ruidoX) * avenida;

    var ruidoY = 0.000025;
    by2 = noise(millis() * ruidoY) * avenidaY;

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

        mouseX > bx2 + 300 - 90 &&
        mouseX < bx2 + 300 + 90 &&
        mouseY > by2 - 90 &&
        mouseY < by2 + 90

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

        mouseX > bx2 + 300 - 90 &&
        mouseX < bx2 + 300 + 90 &&
        mouseY > by2 - 90 &&
        mouseY < by2 + 90 && mouseIsPressed

    ) {

        overBox = true;
        window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }


    ellipse(bx2, by2, mapeo_segundos, mapeo_segundos);

    fill(244, 244, 246);
    noStroke();

    text(get_readings[2].title, bx2 - font_space, by2 + 10);
    //text(get_readings[2].name, bx2 - 150, by2 + spaze);

    pop();

}

function three() {

    push();

    translate(70, 150);

    var ruidoX = 0.000081;
    bx3 = noise(millis() * ruidoX) * avenida;

    var ruidoY = 0.000051;
    by3 = noise(millis() * ruidoY) * avenidaY;

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

    fill(224, 224, 224, 200);
    noStroke();

    if (

        mouseX > bx3 + 70 - 90 &&
        mouseX < bx3 + 70 + 90 &&
        mouseY > by3 + 150 - 90 &&
        mouseY < by3 + 150 + 90

    ) {

        overBox = true;
        fill(224, 224, 224, random(255));
        strokeWeight(random(48));
        stroke(
            224, 224, 224, 200);
        sound_3.play();
        sound_3.playMode(playMode);
    } else {
        overBox = false;
        sound_3.stop();
    }

    // mousePressed

    if (

        mouseX > bx3 + 70 - 90 &&
        mouseX < bx3 + 70 + 90 &&
        mouseY > by3 + 150 - 90 &&
        mouseY < by3 + 150 + 90 && mouseIsPressed

    ) {

        overBox = true;
        window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }

    ellipse(bx3, by3, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[3].title, bx3 - font_space, by3 + 10);
    // text(get_readings[3].name, bx3 - 150, by3 + spaze);

    pop();

}

function four() {

    push();

    translate(200, 200);

    var ruidoX = -0.000031;
    bx4 = noise(millis() * ruidoX) * avenida;

    //    bx4 = noise(millis() * ruidoX) * width + 100 - 300;

    var ruidoY = -0.000051;
    by4 = noise(millis() * ruidoY) * avenidaY;

    //    by4 = noise(millis() * ruidoY) * height + 400;

    //print(by4);


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

        mouseX > bx4 + 200 - 80 &&
        mouseX < bx4 + 200 + 80 &&
        mouseY > by4 + 200 - 80 &&
        mouseY < by4 + 200 + 80

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

        mouseX > bx4 + 200 - 80 &&
        mouseX < bx4 + 200 + 80 &&
        mouseY > by4 + 200 - 80 &&
        mouseY < by4 + 200 + 80 && mouseIsPressed

    ) {
        overBox = true;
        window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }

    ellipse(bx4, by4, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[4].title, bx4 - font_space, by4 + 10);
    // text(get_readings[4].name, bx4 - 150, by4 + spaze);

    pop();

}

function five() {

    push();

    translate(350, 200);

    var ruidoX = 0.00007;
    bx5 = noise(millis() * ruidoX) * avenida;

    var ruidoY = 0.000025;
    by5 = noise(millis() * ruidoY) * avenidaY;


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

        mouseX > bx5 + 350 - 90 &&
        mouseX < bx5 + 350 + 90 &&
        mouseY > by5 + 200 - 90 &&
        mouseY < by5 + 200 + 90

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

    // mousePressed

    if (

        mouseX > bx5 + 350 - 90 &&
        mouseX < bx5 + 250 + 90 &&
        mouseY > by5 + 200 - 90 &&
        mouseY < by5 + 200 + 90 && mouseIsPressed

    ) {

        overBox = true;
        window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }


    ellipse(bx5, by5, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);

    noStroke();

    text(get_readings[5].title, bx5 - font_space, by5 + 10);
    // text(get_readings[0].name, bx - 10, by + spaze);

    pop();

}

function six() {

    push();

    translate(0, 300);

    var ruidoX = -0.000081;
    bx6 = noise(millis() * ruidoX) * avenida;

    // var bx1 = 120;

    var ruidoY = 0.0001;
    by6 = noise(millis() * ruidoY) * avenidaY;

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

        mouseX > bx6 - 90 &&
        mouseX < bx6 + 90 &&
        mouseY > by6 + 300 - 90 &&
        mouseY < by6 + 300 + 90

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

        mouseX > bx6 - 90 &&
        mouseX < bx6 + 90 &&
        mouseY > by6 + 300 - 90 &&
        mouseY < by6 + 300 + 90 && mouseIsPressed

    ) {
        overBox = true;
        window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }

    ellipse(bx6, by6, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[6].title, bx6 - font_space, by6 + 10);
    //text(get_readings[1].name, bx1 - 150, by1 + spaze);

    pop();

}

function seven() {

    push();

    translate(150, 400);

    var ruidoX = 0.000129;
    bx7 = noise(millis() * ruidoX) * avenida;

    var ruidoY = 0.000025;
    by7 = noise(millis() * ruidoY) * avenidaY;


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

        mouseX > bx7 + 150 - 90 &&
        mouseX < bx7 + 150 + 90 &&
        mouseY > by7 + 400 - 90 &&
        mouseY < by7 + 400 + 90

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

        mouseX > bx7 + 150 - 90 &&
        mouseX < bx7 + 150 + 90 &&
        mouseY > by7 + 400 - 90 &&
        mouseY < by7 + 400 + 90 && mouseIsPressed

    ) {

        overBox = true;
        window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }


    ellipse(bx7, by7, mapeo_segundos, mapeo_segundos);

    fill(244, 244, 246);
    noStroke();

    text(get_readings[7].title, bx7 - font_space, by7 + 10);
    //text(get_readings[2].name, bx2 - 150, by2 + spaze);

    pop();

}

function eight() {

    push();

    translate(400, 350);

    var ruidoX = 0.000029;
    bx8 = noise(millis() * ruidoX) * avenida;

    var ruidoY = 0.000021;
    by8 = noise(millis() * ruidoY) * avenidaY;

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

        mouseX > bx8 + 400 - 90 &&
        mouseX < bx8 + 400 + 90 &&
        mouseY > by8 + 350 - 90 &&
        mouseY < by8 + 350 + 90

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

        mouseX > bx8 + 400 - 90 &&
        mouseX < bx8 + 400 + 90 &&
        mouseY > by8 + 350 - 90 &&
        mouseY < by8 + 350 + 90 && mouseIsPressed

    ) {

        overBox = true;
        window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }


    ellipse(bx8, by8, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[8].title, bx8 - font_space, by8 + 10);
    // text(get_readings[3].name, bx3 - 150, by3 + spaze);

    pop();

}

function nine() {

    push();

    translate(40, 500);

    var ruidoX = 0.0000429;
    bx9 = noise(millis() * ruidoX) * avenida;

    var ruidoY = 0.000025;
    by9 = noise(millis() * ruidoY) * avenidaY;


    bx9 = bx9 + xspeed;
    by9 = by9 + yspeed;

    if ((bx9 > windowWidth) || (bx9 < 0)) {
        xspeed = xspeed * -1;
    }

    if ((by9 > windowHeight) || (by9 < 0)) {
        yspeed = yspeed * -1;
    }

    let segundos = get_readings[9].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 4000, 0, 200);
    fill(255, 168, 81, 200);
    noStroke();

    if (

        mouseX > bx9 + 40 - 90 &&
        mouseX < bx9 + 40 + 90 &&
        mouseY > by9 + 500 - 90 &&
        mouseY < by9 + 500 + 90

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

        mouseX > bx9 + 40 - 90 &&
        mouseX < bx9 + 40 + 90 &&
        mouseY > by9 + 500 - 90 &&
        mouseY < by9 + 500 + 90 && mouseIsPressed

    ) {
        overBox = true;
        window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }

    ellipse(bx9, by9, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[9].title, bx9 - font_space, by9 + 10);
    // text(get_readings[4].name, bx4 - 150, by4 + spaze);

    pop();

}


function ten() {

    push();

    translate(300, 480);

    var ruidoX = 0.000029;
    bx10 = noise(millis() * ruidoX) * avenida;

    var ruidoY = 0.000025;
    by10 = noise(millis() * ruidoY) * avenidaY;


    bx10 = bx10 + xspeed;
    by10 = by10 + yspeed;

    if ((bx10 > windowWidth) || (bx10 < 0)) {
        xspeed = xspeed * -1;
    }

    if ((by10 > windowHeight) || (by10 < 0)) {
        yspeed = yspeed * -1;
    }

    let segundos = get_readings[10].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 4000, 0, 200);
    fill(224, 224, 224, 200);
    noStroke();

    if (

        mouseX > bx10 + 300 - 90 &&
        mouseX < bx10 + 300 + 90 &&
        mouseY > by10 + 480 - 90 &&
        mouseY < by10 + 480 + 90

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

        mouseX > bx10 + 300 - 90 &&
        mouseX < bx10 + 300 + 90 &&
        mouseY > by10 + 480 - 90 &&
        mouseY < by10 + 480 + 90 && mouseIsPressed

    ) {
        overBox = true;
        window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }

    ellipse(bx10, by10, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[10].title, bx10 - font_space, by10 + 10);
    // text(get_readings[4].name, bx4 - 150, by4 + spaze);

    pop();

}

/////////////////////////////
// second line of the grid //
/////////////////////////////


function eleven() {

    push();

    translate(550, 0);

    var ruidoX = 0.00007;
    bx11 = noise(millis() * ruidoX) * avenida;
    // bx = noise(millis() * ruidoX) * windowWidth - 300;

    var ruidoY = 0.000025;
    by11 = noise(millis() * ruidoY) * avenidaY;
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

    fill(224, 224, 224, 200);
    noStroke();

    if (

        mouseX > bx11 + 550 - 90 &&
        mouseX < bx11 + 550 + 90 &&
        mouseY > by11 - 90 &&
        mouseY < by11 + 90

    ) {

        overBox = true;
        fill(
            224, 224, 224, random(255));
        strokeWeight(random(48));
        stroke(
            224, 224, 224, 200);
        sound_11.play();
        sound_11.playMode(playMode);
    } else {
        overBox = false;
        sound_11.stop();
    }

    // mousePressed

    if (

        mouseX > bx11 + 550 - 90 &&
        mouseX < bx11 + 550 + 90 &&
        mouseY > by11 - 90 &&
        mouseY < by11 + 90 && mouseIsPressed

    ) {

        overBox = true;
        window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }


    ellipse(bx11, by11, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);

    noStroke();

    text(get_readings[11].title, bx11 - font_space, by11 + 10);
    // text(get_readings[0].name, bx - 10, by + spaze);

    pop();

}


