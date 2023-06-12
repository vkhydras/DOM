const startStop = document.querySelector('#start')
const reset =  document.querySelector('#reset')

let sec = 0;
let min = 0;
let hrs = 0;

let leadinSec = 0
let leadinMin= 0
let leadinHrs = 0

let timerInterval = null
let timerStatus = "stopped"

function stopWatch(){
    sec++
    if(sec/60 === 1){
        sec = 0
        min++
    }
    if(min/60 === 1){
        min = 0
        hrs++
    }
if (sec < 10){
    leadinSec = "0" + sec.toString();
} else{
    leadinSec = sec;
}
if (min < 10){
    leadinMin = "0" + min.toString();
} else{
    leadinMin = min;
}
if (hrs < 10){
    leadinHrs = "0" + hrs.toString();
} else{
    leadinHrs = hrs;
}

    let display = document.getElementById('timer').innerText = leadinHrs+":"+leadinMin+":"+leadinSec;
}


startStop.addEventListener('click',function(){
    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch,1000)
        document.getElementById('start').innerHTML ="⏸️"
        document.getElementById('start').style.backgroundColor = 'transparent'
        timerStatus = "started"
    } else{
        window.clearInterval(timerInterval)
        document.getElementById('start').innerHTML =" ▶"
        document.getElementById('start').style.backgroundColor = 'green'
        timerStatus = "stopped"
    }
})

reset.addEventListener('click',function(){
    window.clearInterval(timerInterval)
    sec = 0
    min = 0
    hrs = 0
    document.getElementById('timer').innerText = '00:00:00'
})