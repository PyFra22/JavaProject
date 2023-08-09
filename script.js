let secretNumber = Math.trunc(Math.random()*20) + 1;
let scorePoint = 20;
let highScore = 0

const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}
const colorBackGround = function(color){
    document.querySelector('body').style.backgroundColor = color
}


document.querySelector('.check').addEventListener('click',
function(){
    const guessNumber = Number (document.querySelector('.guess').value);
    if(!guessNumber){
        displayMessage('No number give⛔️');
    }else if(guessNumber !== secretNumber){
        displayMessage(guessNumber > secretNumber ? 
            'Too High ⬆️': 'Too Low ⬇️');
        scorePoint = scorePoint - 1;
        document.querySelector('.score').textContent = scorePoint;
    }if(guessNumber === secretNumber){
        displayMessage('Correct Number 🏆');
        document.querySelector('.number').textContent = secretNumber;
        if(scorePoint>highScore){
            highScore = scorePoint
            document.querySelector('.highscore').textContent = scorePoint;
        }
        colorBackGround('#60b347');
    }
    if(scorePoint === 0){
        displayMessage('You lost the game')
    }
});

document.querySelector('.again').addEventListener('click',
function(){
    scorePoint = 20
    document.querySelector('.score').textContent = scorePoint;
    document.querySelector('.number').textContent = '?';
    displayMessage('Start Guessing');
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.guess').value = '';
    colorBackGround('#222');
});
