window.onload=()=>{
    document.querySelector('#calculate').onclick = calculate;
    document.querySelector('#reset').onclick = reset;
}

function calculate (){
    const date = document.querySelector('#date').value;
    const time = document.querySelector('#time').value;

    const stop = document.querySelector('#stop');

    const endTime = new Date(date + "" + time);

    const interval = setInterval(()=> calculateTime(endTime), 1000);

    stop.addEventListener('click', ()=>{
        clearInterval(interval);
    })
}

function calculateTime(endTime){
    const currentTime = new Date();

    const days = document.querySelector('#count-days');
    const hours = document.querySelector('#count-hours');
    const minutes = document.querySelector('#count-minutes');
    const seconds = document.querySelector('#count-seconds');

    if(endTime > currentTime){
        const timeLeft = (endTime - currentTime) /1000;
        
        days.innerText = Math.floor(timeLeft  /(24 * 60 * 60));
        hours.innerText = Math.floor((timeLeft / (60 * 60)) % 24);
        minutes.innerText = Math.floor((timeLeft / 60) % 60);
        seconds.innerText = Math.floor(timeLeft  % 60);
    }else{
        days.innerText = 0
        hours.innerText = 0
        minutes.innerText = 0
        seconds.innerText = 0
    }
}
function reset(){
     document.querySelector('#count-days').innerText;
     document.querySelector('#count-hours').innerText;
     document.querySelector('#count-minutes').innerText;
     document.querySelector('#count-seconds').innerText;
}