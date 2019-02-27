'use strict'
let request = prompt("Введите время через двоеточие");
let timeStamp = request.split(':');

for (let i = 0; i < timeStamp.length; i++) {
    timeStamp[i] = +timeStamp[i];
}

function checker(timeStamp) {
    if (timeStamp[2] >= 60) {
        timeStamp[1] += Math.floor(timeStamp[2] / 60);
        timeStamp[2] = (timeStamp[2] % 60);
    }
    if (timeStamp[1] >= 60) {
        timeStamp[0] += Math.floor(timeStamp[1] / 60);
        timeStamp[1] = (timeStamp[1] % 60);
    }
    return timeStamp;
}

console.log(timeStamp);
let audio = new Audio('./audio.mp3');

const timer = (time, call) => {
    timer.timerInterval = setInterval(function(){
        call(time[0],time[1],time[2]);
        
        if (time[0] === 0 && time[1] === 0 && time[2] === 0) {
                clearInterval(timer.timerInterval);
                $("#timer").text(`0:0:0`);
            audio.play();
           }
        if (time[2] === 0 ) {
                time[2] = 59;
                time[1]--;
                    if (time[1] === 0) {
                            time[1] = 59;
                        time[0]--;
                    }
            }
        time[2]--;
        
    }, 1000)
}

timer(checker(timeStamp), function(h,m,s){
    $("#timer").text(`${h}:${m}:${s}`);
})