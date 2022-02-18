"use strict";

// make timer
const timer = document.querySelector('#timer');
let timerInterval;

function startTimer(limit = 60){
    const magni = 100;
    let time = limit * magni;
    let timerId = setInterval(() => {
        time -= 1;
        timer.querySelector('text').innerHTML = time / magni;
        if(isDebug & time % 10 == 0){console.log(time)}
        if(time <= 0){
            toggleTimer();
            timer.querySelector('text').innerHTML = 0;
            // mixAllHex();
            alertScore();
            reset();
        }
    }, 1000 / magni);
    return timerId;
}

function toggleTimer(limit = 60){
    if(timerInterval){
        clearInterval(timerInterval);
        timerInterval = null;
    }else{
        score = 0;
        timerInterval = startTimer(limit);
        start();
    }
}

function alertScore(alertedScore = score){
    alert('score : ' + alertedScore);
}
timer.addEventListener('click', () => {toggleTimer(60);});
