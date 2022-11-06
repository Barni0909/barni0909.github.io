const buttons = document.querySelectorAll('.grid-item');
const start = document.querySelector('.start');
const timeLeftelement = document.querySelector('#time-left');
const score = document.querySelector('#pont');
var i = 0;
let result = 0;
let timeLeft = 60;
let interval = -1;
start.addEventListener('click', StartGame);

function StartGame(e) {
    result=0;
    score.innerHTML=result;
    timeLeft=60;
    timeLeftelement.innerHTML=timeLeft;
    if(interval!=-1)
    {
        clearInterval(interval);
    }
    buttons.forEach(element => {
        element.classList.remove('pop');
        element.removeEventListener('click', ClickTile);
    });
    i = Math.floor(25*Math.random());
    buttons[i].addEventListener('click', ClickTile);
    buttons[i].classList.add('pop');
    interval=setInterval(()=>{
        timeLeft--;
        timeLeftelement.innerHTML=timeLeft;
        
    },1000)
}

function ClickTile(e) {
    e.target.removeEventListener('click', ClickTile);
    e.target.classList.remove('pop');
    i = Math.floor(25*Math.random());
    buttons[i].addEventListener('click', ClickTile);
    buttons[i].classList.add('pop');
    result++;
    score.innerHTML=result;
}

function countDown() {
    
}