
const secretNumber = Math.trunc(Math.random()*20) + 1;
let scorePoint = 20;

document.querySelector('.check').addEventListener('click',
function(){
    const guessNumber = Number (document.querySelector('.guess').value);
    if(!guessNumber){
        document.querySelector('.message').textContent = 'No number Give⛔️';
    }else if(guessNumber>secretNumber){
        document.querySelector('.message').textContent = 'Too High ⬆️';
        scorePoint = scorePoint - 1;
        document.querySelector('.score').textContent = scorePoint;
    }else if(guessNumber<secretNumber){
        document.querySelector('.message').textContent = 'Too Low ⬇️';
        scorePoint = scorePoint - 1;
        document.querySelector('.score').textContent = scorePoint;
    }else if(guessNumber === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number 🏆';
        document.querySelector('.highscore').textContent = scorePoint;
        document.querySelector('.number').textContent = secretNumber;
    }
});

document.querySelector('.again').addEventListener('click',
function(){
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start Guessing';
});
