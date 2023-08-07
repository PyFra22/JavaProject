let secretNumber = Math.trunc(Math.random()*20) + 1;
let scorePoint = 20;
let highScore = 0

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
        if(scorePoint>highScore){
            document.querySelector('.highscore').textContent = scorePoint;
        }else{
            document.querySelector('.highscore').textContent = highScore;
        }
        document.querySelector('body').style.backgroundColor = '#60b347';
    }
    if(scorePoint === 0){
        document.querySelector('.message').textContent = 'You lost the game';
    }
});

document.querySelector('.again').addEventListener('click',
function(){
    scorePoint = 20
    document.querySelector('.score').textContent = scorePoint;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start Guessing';
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
});
