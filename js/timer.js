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
timer.innerHTML = '<circle cx="50" cy="50" r="50" fill="#FDB900"/>\n<path fill="none" stroke-linecap="round" stroke-width="10" stroke="#fff"\nstroke-dasharray="0,250"\nd="M50 10\n a 40 40 0 0 1 0 80\n a 40 40 0 0 1 0 -80"/>\n<text x="50" y="50" text-anchor="middle" dy="7" font-size="20">Start!</text>'
timer.addEventListener('click', () => {toggleTimer(60);});
