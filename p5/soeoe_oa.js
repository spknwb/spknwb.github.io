var espacio = 100;
var space = 23;
var spaze = 23;

function al_purdy_0() {


    push();

    var ruidoX = 0.00007;
    var posX = noise(millis() * ruidoX) * width;

    var ruidoY = 0.000025;
    var posY = noise(millis() * ruidoY) * height - 100;

    let segundos = get_readings[0].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 6000, 0, 300);


    fill(0);
    noStroke();

    text(get_readings[0].title, posX - 200, posY);
    text(get_readings[0].name, posX - 150, posY + spaze);

    pop();

}


function ginsberg_1() {

    push();

    var ruidoX = 0.000029;
    var posX = noise(millis() * ruidoX) * width + 100;

    var ruidoY = 0.000025;
    var posY = noise(millis() * ruidoY) * height + 100;

    let segundos = get_readings[1].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 6000, 0, 400);

    fill(255, 170, 0, 170);
    //stroke(0, 100);
    noStroke();

    ellipse(posX, posY, mapeo_segundos, mapeo_segundos);

    fill(0);
    noStroke();

    text(get_readings[1].title, posX - 200, posY);
    text(get_readings[1].name, posX - 150, posY + spaze);

    pop();

}

function ginsberg_2() {

    push();

    var ruidoX = 0.000029;
    var posX = noise(millis() * ruidoX) * width + 100;

    var ruidoY = 0.000025;
    var posY = noise(millis() * ruidoY) * height + 100;

    let segundos = get_readings[2].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 6000, 0, 400);

    fill(255, 0, 255, 170);
    //stroke(0, 100);
    noStroke();

    ellipse(posX, posY, mapeo_segundos, mapeo_segundos);

    fill(0);
    noStroke();

    text(get_readings[2].title, posX - 200, posY);
    text(get_readings[2].name, posX - 150, posY + spaze);

    pop();

}

function schroeder_3() {

    push();

    var ruidoX = 0.0000429;
    var posX = noise(millis() * ruidoX) * width + 100;

    var ruidoY = 0.000025;
    var posY = noise(millis() * ruidoY) * height + 200;

    let segundos = get_readings[3].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 6000, 0, 400);

    fill(84, 252, 217, 170);
    //stroke(0, 100);
    noStroke();

    //ellipse();
    ellipse(posX, posY, mapeo_segundos, mapeo_segundos);

    fill(0);
    noStroke();

    text(get_readings[3].title, posX - 200, posY);
    text(get_readings[3].name, posX - 150, posY + spaze);

    pop();


}



function hecht_5() {

    push();

    var ruidoX = 0.000029;
    var posX = noise(millis() * ruidoX) * width + 200;

    var ruidoY = 0.000025;
    var posY = noise(millis() * ruidoY) * height + 300;

    let segundos = get_readings[5].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 6000, 0, 400);

    fill(255, 100, 3, 170);
    //stroke(0, 100);
    noStroke();

    ellipse(posX, posY, mapeo_segundos, mapeo_segundos);

    fill(0);
    noStroke();

    text(get_readings[5].title, posX - 200, posY);
    text(get_readings[5].name, posX - 150, posY + spaze);

    pop();


}

function howes_6() {

    push();

    var x = width / 100;
    var y = height / 7;

    let segundos = get_readings[6].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 197875, 0, 600);
    fill(255, 40);
    stroke(0, 100);

    ellipse(x + space * 24 + espacio, y + space * 18, mapeo_segundos, mapeo_segundos);


    pop();


}

function bisset_7() {

    push();

    var x = width / 100;
    var y = height / 7;

    let segundos = get_readings[7].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 4000, 0, 300);

    fill(255, 170, 0, 120);
    stroke(0, 100);

    ellipse(x + space * 28 + espacio, y + space * 21, mapeo_segundos, mapeo_segundos);


    pop();


}

function nichol_8() {

    push();

    var x = width / 100;
    var y = height / 7;

    let segundos = get_readings[8].audio.duration.seconds;

    let mapeo_segundos = map(segundos, 0, 4000, 0, 300);

    fill(255, 70);
    stroke(0, 100);

    ellipse(x + space * 32 + espacio, y + space * 24, mapeo_segundos, mapeo_segundos);


    pop();


}