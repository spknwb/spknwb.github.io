var get_readings;
var x;
var totalWords = [];
var obj = {};

var data;

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

let playMode = 'untilDone';

function preload() {

    sound_0 = loadSound("sou_nds/00.mp3");
    sound_1 = loadSound("sou_nds/01.mp3");
    sound_2 = loadSound("sou_nds/02.mp3");
    sound_3 = loadSound("sou_nds/03.mp3");
    sound_4 = loadSound("sou_nds/04.mp3");

/*
    var poetry_readings = "sgw-poetry-readings_all.json"
    get_readings = loadJSON(poetry_readings);
*/

    var poetry_readings = "words_and_music.json"
    get_readings = loadJSON(poetry_readings);

}

var contador = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);

    // Create an Audio input
     mic = new p5.AudioIn();

    // start the Audio Input.
    // By default, it does not .connect() (to the computer speakers)
     mic.start();
}

function draw() {

    background(234);

    contador++;

    hue = ++hue % 255;

    textFont("Inconsolata");

    textSize(18);

    fill(0);

    fill(127);
    stroke(0);

    push();

    al_purdy_0();

    pop();

    push();

    ginsberg_1();

    pop();

    push();

    hecht_2();

    pop();

    push();

    schroeder_3();

    pop();

    push();

    schroeder_4();

    pop();

}


//////////////////////
// year by function //
//////////////////////


function al_purdy_0() {

    push();

    var ruidoX = 0.00007;
    bx = noise(millis() * ruidoX) * width;

    var ruidoY = 0.000025;
    by = noise(millis() * ruidoY) * height - 100;

    let segundos = get_readings[0].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 6000, 0, 300);

    fill(255, 170);
    noStroke();

    if (

        mouseX > bx - 90 &&
        mouseX < bx + 90 &&
        mouseY > by - 90 &&
        mouseY < by + 90

    ) {

        overBox = true;
        fill(
            131, 255, 190, random(255));
        strokeWeight(random(48));
        stroke(
            131, 255, 190, 170);
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

    fill(0);
    noStroke();

    text(get_readings[0].title, bx - 13, by);
    text(get_readings[0].name, bx - 150, by + spaze);

    pop();

}

function ginsberg_1() {

    push();

    var ruidoX = 0.000029;
    bx1 = noise(millis() * ruidoX) * width + 100;

    var ruidoY = 0.000025;
    by1 = noise(millis() * ruidoY) * height + 100;

    let segundos = get_readings[1].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 6000, 0, 400);

    fill(255, 170, 0, 170);
    noStroke();

    if (

        mouseX > bx1 - 120 &&
        mouseX < bx1 + 120 &&
        mouseY > by1 - 120 &&
        mouseY < by1 + 120

    ) {

        overBox = true;
        fill(255, 170, 0, random(255));
        strokeWeight(random(48));
        stroke(
            255, 160, 0, 170);
        sound_1.play();
        sound_1.playMode(playMode);
    } else {
        overBox = false;
        sound_1.stop();
    }

    // mousePressed

    if (

        mouseX > bx1 - 120 &&
        mouseX < bx1 + 120 &&
        mouseY > by1 - 120 &&
        mouseY < by1 + 120 && mouseIsPressed

    ) {

        overBox = true;
        window.open("1970");
    } else {
        overBox = false;
    }


    ellipse(bx1, by1, mapeo_segundos, mapeo_segundos);

    fill(0);
    noStroke();

    text(get_readings[1].title, bx1 - 13, by1);
    text(get_readings[1].name, bx1 - 150, by1 + spaze);

    pop();

}

function hecht_2() {

    push();

    var ruidoX = 0.000029;
    bx2 = noise(millis() * ruidoX) * width + 200;

    var ruidoY = 0.000025;
    by2 = noise(millis() * ruidoY) * height + 300;

    let segundos = get_readings[5].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 6000, 0, 400);

    fill(255, 100, 3, 170);
    noStroke();

    if (

        mouseX > bx2 - 90 &&
        mouseX < bx2 + 90 &&
        mouseY > by2 - 90 &&
        mouseY < by2 + 90

    ) {

        overBox = true;
        fill(255, 100, 3,  random(255));
        strokeWeight(random(48));
        stroke(
            255, 100, 3,  170);
        sound_2.play();
        sound_2.playMode(playMode);
    } else {
        overBox = false;
        sound_2.stop();
    }

    // mousePressed

    if (

        mouseX > bx2 - 90 &&
        mouseX < bx2 + 90 &&
        mouseY > by2 - 90 &&
        mouseY < by2 + 90 && mouseIsPressed

    ) {

        overBox = true;
        window.open("1970");
    } else {
        overBox = false;
    }


    ellipse(bx2, by2, mapeo_segundos, mapeo_segundos);

    fill(0);
    noStroke();

    text(get_readings[5].title, bx2 - 13, by2);
    text(get_readings[5].name, bx2 - 150, by2 + spaze);

    pop();

}


function schroeder_3() {

    push();

    var ruidoX = 0.0000429;
    bx3 = noise(millis() * ruidoX) * width + 100;

    var ruidoY = 0.000025;
    by3 = noise(millis() * ruidoY) * height + 200;

    let segundos = get_readings[3].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 6000, 0, 400);
    fill(84, 252, 217, 170);
    noStroke();

    if (

        mouseX > bx3 - 75 &&
        mouseX < bx3 + 75 &&
        mouseY > by3 - 75 &&
        mouseY < by3 + 75

    ) {

        overBox = true;
        fill(84, 252, 217, random(255));
        strokeWeight(random(48));
        stroke(
            84, 252, 217, 170);
        sound_3.play();
        sound_3.playMode(playMode);
    } else {
        overBox = false;
        sound_3.stop();
    }

    if (

        mouseX > bx3 - 75 &&
        mouseX < bx3 + 75 &&
        mouseY > by3 - 75 &&
        mouseY < by3 + 75 && mouseIsPressed

    ) {
        overBox = true;
        window.open("1970");
    } else {
        overBox = false;
    }

    ellipse(bx3, by3, mapeo_segundos, mapeo_segundos);

    fill(0);
    noStroke();

    text(get_readings[3].title, bx3 - 13, by3);
    text(get_readings[3].name, bx3 - 150, by3 + spaze);

    pop();

}



function schroeder_4() {

    push();

    var ruidoX = 0.00009;
    bx4 = noise(millis() * ruidoX) * width;

    var ruidoY = 0.000025;
    by4 = noise(millis() * ruidoY) * height;

    let segundos = get_readings[4].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 6000, 0, 400);
    fill(255, 50, 200, 170);
    noStroke();

    if (

        mouseX > bx4 - 30 &&
        mouseX < bx4 + 30 &&
        mouseY > by4 - 30 &&
        mouseY < by4 + 30

    ) {

        overBox = true;
        fill(255, 0, 200, random(255));
        strokeWeight(random(48));
        stroke(
            255, 50, 200, 170);
        sound_4.play();
        sound_4.playMode(playMode);
    } else {
        overBox = false;
        sound_4.stop();
    }

    if (

        mouseX > bx4 - 30 &&
        mouseX < bx4 + 30 &&
        mouseY > by4 - 30 &&
        mouseY < by4 + 30 && mouseIsPressed

    ) {
        overBox = true;
        window.open("1970");
    } else {
        overBox = false;
    }

    ellipse(bx4, by4, mapeo_segundos, mapeo_segundos);

    fill(0);
    noStroke();

    text(get_readings[4].title, bx4 - 13, by4);
    text(get_readings[4].name, bx4 - 150, by4 + spaze);

    pop();

}