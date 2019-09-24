var get_readings;
var x;
var totalWords = [];
var obj = {};

var data;

var avenida = 400;

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
    createCanvas(windowWidth, windowHeight);
    background(255, 249, 255);

    // Create an Audio input
    // mic = new p5.AudioIn();

    // start the Audio Input.
    // By default, it does not .connect() (to the computer speakers)
    //mic.start();

    //translate(150, 0)
}

function draw() {

    background(255, 249, 238);

    contador++;

    textFont("Futura");

    textSize(20);

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
    // bx = noise(millis() * ruidoX) * windowWidth - 300;

    var ruidoY = 0.000025;
    by = noise(millis() * ruidoY) * avenida;
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

    fill(246, 166, 84, 200);
    noStroke();

    if (

        mouseX > bx - 90 &&
        mouseX < bx + 90 &&
        mouseY > by - 90 &&
        mouseY < by + 90

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

    text(get_readings[0].title, bx - 20, by + 10);
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

    text(get_readings[1].title, bx1 - 20, by1 + 10);
    //text(get_readings[1].name, bx1 - 150, by1 + spaze);

    pop();

}

function two() {

    push();

    translate(300, 0);

    var ruidoX = 0.00009;
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

    text(get_readings[2].title, bx2 - 20, by2 + 10);
    //text(get_readings[2].name, bx2 - 150, by2 + spaze);

    pop();

}

function three() {

    push();

    translate(70, 150);

    var ruidoX = 0.000081;
    bx3 = noise(millis() * ruidoX) * avenida;

    var ruidoY = 0.000051;
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

    text(get_readings[3].title, bx3 - 20, by3 + 10);
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
    by4 = noise(millis() * ruidoY) * avenida;

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

    text(get_readings[4].title, bx4 - 20, by4 + 10);
    // text(get_readings[4].name, bx4 - 150, by4 + spaze);

    pop();

}

function five() {

    push();

    translate(350, 200);

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

    text(get_readings[5].title, bx5 - 20, by5 + 10);
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

    text(get_readings[6].title, bx6 - 20, by6 + 10);
    //text(get_readings[1].name, bx1 - 150, by1 + spaze);

    pop();

}

function seven() {

    push();

    translate(150, 400);

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

    text(get_readings[7].title, bx7 - 20, by7 + 10);
    //text(get_readings[2].name, bx2 - 150, by2 + spaze);

    pop();

}

function eight() {

    push();

    translate(400, 350);

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

    text(get_readings[8].title, bx8 - 20, by8 + 10);
    // text(get_readings[3].name, bx3 - 150, by3 + spaze);

    pop();

}

function nine() {

    push();

    translate(40, 500);

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

    text(get_readings[9].title, bx9 - 20, by9 + 10);
    // text(get_readings[4].name, bx4 - 150, by4 + spaze);

    pop();

}


function ten() {

    push();

    translate(300, 480);

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

    text(get_readings[10].title, bx10 - 20, by10 + 10);
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

    text(get_readings[11].title, bx11 - 20, by11 + 10);
    // text(get_readings[0].name, bx - 10, by + spaze);

    pop();

}

function twelve() {

    push();

    translate(700, 0);

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

        mouseX > bx12 + 700 - 90 &&
        mouseX < bx12 + 700 + 90 &&
        mouseY > by12 - 90 &&
        mouseY < by12 + 90

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

        mouseX > bx12 + 700 - 90 &&
        mouseX < bx12 + 700 + 90 &&
        mouseY > by12 - 90 &&
        mouseY < by12 + 90 && mouseIsPressed

    ) {
        overBox = true;
        window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }


    ellipse(bx12, by12, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[12].title, bx12 - 20, by12 + 10);
    //text(get_readings[1].name, bx1 - 150, by1 + spaze);

    pop();

}

function thirteen() {

    push();

    translate(900, 0);

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

        mouseX > bx13 + 900 - 90 &&
        mouseX < bx13 + 900 + 90 &&
        mouseY > by13 - 90 &&
        mouseY < by13 + 90

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

        mouseX > bx13 + 900 - 90 &&
        mouseX < bx13 + 900 + 90 &&
        mouseY > by13 - 90 &&
        mouseY < by13 + 90 && mouseIsPressed

    ) {

        overBox = true;
        window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }


    ellipse(bx13, by13, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[13].title, bx13 - 20, by13 + 10);
    //text(get_readings[2].name, bx13 - 150, by13 + spaze);

    pop();

}

function fourteen() {

    push();

    translate(500, 150);

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

        mouseX > bx14 + 500 - 90 &&
        mouseX < bx14 + 500 + 90 &&
        mouseY > by14 + 150 - 90 &&
        mouseY < by14 + 150 + 90

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

        mouseX > bx14 + 500 - 90 &&
        mouseX < bx14 + 500 + 90 &&
        mouseY > by14 + 150 - 90 &&
        mouseY < by14 + 150 + 90 && mouseIsPressed

    ) {

        overBox = true;
        window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }

    ellipse(bx14, by14, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[14].title, bx14 - 20, by14 + 10);
    // text(get_readings[3].name, bx14 - 150, by14 + spaze);

    pop();

}

function fifteen() {

    push();

    translate(700, 200);

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

        mouseX > bx15 + 700 - 80 &&
        mouseX < bx15 + 700 + 80 &&
        mouseY > by15 + 200 - 80 &&
        mouseY < by15 + 200 + 80

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

        mouseX > bx15 + 700 - 80 &&
        mouseX < bx15 + 700 + 80 &&
        mouseY > by15 + 200 - 80 &&
        mouseY < by15 + 200 + 80 && mouseIsPressed

    ) {
        overBox = true;
        window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }

    ellipse(bx15, by15, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[15].title, bx15 - 20, by15 + 10);
    // text(get_readings[4].name, bx15 - 150, by15 + spaze);

    pop();

}

function sixteen() {

    push();

    translate(850, 200);

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

    fill(148, 80, 67, 200);
    noStroke();

    if (

        mouseX > bx16 + 850 - 90 &&
        mouseX < bx16 + 850 + 90 &&
        mouseY > by16 + 200 - 90 &&
        mouseY < by16 + 200 + 90

    ) {

        overBox = true;
        fill(
            148, 80, 67, random(255));
        strokeWeight(random(48));
        stroke(
            148, 80, 67, 200);
        sound_16.play();
        sound_16.playMode(playMode);
    } else {
        overBox = false;
        sound_16.stop();
    }

    // mousePressed

    if (

        mouseX > bx16 + 850 - 90 &&
        mouseX < bx16 + 850 + 90 &&
        mouseY > by16 + 200 - 90 &&
        mouseY < by16 + 200 + 90 && mouseIsPressed

    ) {

        overBox = true;
        window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }


    ellipse(bx16, by16, mapeo_segundos, mapeo_segundos);

    fill(244, 244, 246);

    noStroke();

    text(get_readings[16].title, bx16 - 20, by16 + 10);
    // text(get_readings[0].name, bx - 10, by + spaze);

    pop();

}

function seventeen() {

    push();

    translate(540, 300);

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

        mouseX > bx17 + 540 - 90 &&
        mouseX < bx17 + 540 + 90 &&
        mouseY > by17 + 300 - 90 &&
        mouseY < by17 + 300 + 90

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

        mouseX > bx17 + 540 - 90 &&
        mouseX < bx17 + 540 + 90 &&
        mouseY > by17 + 300 - 90 &&
        mouseY < by17 + 300 + 90 && mouseIsPressed

    ) {
        overBox = true;
        window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }

    ellipse(bx17, by17, mapeo_segundos, mapeo_segundos);

    fill(244, 244, 246);
    noStroke();

    text(get_readings[17].title, bx17 - 20, by17 + 10);
    //text(get_readings[1].name, bx1 - 150, by1 + spaze);

    pop();

}

function eighteen() {

    push();

    translate(750, 400);

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

        mouseX > bx18 + 750 - 90 &&
        mouseX < bx18 + 750 + 90 &&
        mouseY > by18 + 400 - 90 &&
        mouseY < by18 + 400 + 90

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

        mouseX > bx18 + 750 - 90 &&
        mouseX < bx18 + 750 + 90 &&
        mouseY > by18 + 400 - 90 &&
        mouseY < by18 + 400 + 90 && mouseIsPressed

    ) {

        overBox = true;
        window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }


    ellipse(bx18, by18, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[18].title, bx18 - 20, by18 + 10);
    //text(get_readings[2].name, bx2 - 150, by2 + spaze);

    pop();

}

function nineteen() {

    push();

    translate(910, 350);

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

        mouseX > bx19 + 910 - 90 &&
        mouseX < bx19 + 910 + 90 &&
        mouseY > by19 + 350 - 90 &&
        mouseY < by19 + 350 + 90

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

        mouseX > bx19 + 910 - 90 &&
        mouseX < bx19 + 910 + 90 &&
        mouseY > by19 + 350 - 90 &&
        mouseY < by19 + 350 + 90 && mouseIsPressed

    ) {

        overBox = true;
        window.open("https://yecto.github.io/");
    } else {
        overBox = false;
    }


    ellipse(bx19, by19, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[19].title, bx19 - 20, by19 + 10);
    // text(get_readings[3].name, bx3 - 150, by3 + spaze);

    pop();

}


function twenty() {

    push();

    translate(540, 500);

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

        mouseX > bx20 + 540 - 90 &&
        mouseX < bx20 + 540 + 90 &&
        mouseY > by20 + 500 - 90 &&
        mouseY < by20 + 500 + 90

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

        mouseX > bx20 + 540 - 90 &&
        mouseX < bx20 + 540 + 90 &&
        mouseY > by20 + 500 - 90 &&
        mouseY < by20 + 500 + 90 && mouseIsPressed

    ) {
        overBox = true;
        window.open("2020.html");
    } else {
        overBox = false;
    }

    ellipse(bx20, by20, mapeo_segundos, mapeo_segundos);

    fill(42, 45, 45);
    noStroke();

    text(get_readings[20].title, bx20 - 20, by20 + 10);
    // text(get_readings[4].name, bx4 - 150, by4 + spaze);

    pop();

}



/* 


650 379 9946
Mayer


*/