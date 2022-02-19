"use strict";

// make timer
const timer = document.querySelector('#timer');

timer.innerHTML = '<circle cx="50" cy="50" r="50" fill="#FDB900"/><path fill="none" stroke-linecap="round" stroke-width="10" stroke="#00f" d="M50 10 a 40 40 0 0 1 0 80"/><text x="50" y="50" text-anchor="middle" dy="5" font-size="150%">60.00</text>';
const timerHand = document.createElement('path');

// const timer = document.createElement('svg');
// timer.setAttribute('id', 'timer');

// const timerBG = document.createElement('circle');
// for(const [attribute, value] of Object.entries({"cx": "50%", "cy": "50%", "r": "50%", "fill": "#FDB900"})){
//     timerBG.setAttribute(attribute, value);
// }

// const timerHand = document.createElement('path');
// for(const [attribute, value] of Object.entries({"fill": "none", "stroke-linecap": "round", "stroke-width": "10", "stroke": "#fff", "stroke-dasharray": "0,250", "d": "M50 10\n a 40 40 0 0 1 0 80\n a 40 40 0 0 1 0 -80"})){
//     timerHand.setAttribute(attribute, value);
// }

// const timerText = document.createElement('text');
// for(const [attribute, value] of Object.entries({"x": "50" , "y": "50", "text-anchor": "middle" , "dy": "7", "font-size": "20"})){
//     timerText.setAttribute(attribute, value);
// }
// timerText.innerHTML = 'Start';
// document.querySelector('#controls').appendChild(timer);

// [timerBG, timerHand, timerText].forEach(element => timer.appendChild(element));

let timerInterval;

function startTimer(limit = 60){
    const magni = 100;
    let time = limit * magni;
    let timerId = setInterval(() => {
        time -= 1;
        timer.querySelector('text').innerHTML = time / magni;
        rotateTimerHand(time, limit * magni);
        if(isDebug & time % 10 == 0){console.log(time)}
        if(time <= 0){
            toggleTimer();
            timer.querySelector('text').innerHTML = 0;
            rotateTimerHand(0, limit);
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

function rotateTimerHand(currnet, limit, total = 250.2){
    timerHand.setAttribute('stroke-dasharray', `${currnet / limit * total},${total}`);
}

function alertScore(alertedScore = score){
    alert('score : ' + alertedScore);
}
timer.addEventListener('click', () => {toggleTimer(60);});