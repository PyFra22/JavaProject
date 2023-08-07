
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
        //document.querySelector('.scorePoint').textContent = secretNumber;
    }
});

document.querySelector('.again').addEventListener('click',
function(){
    scorePoint = 20;
    document.querySelector('.score').textContent = scorePoint;
    console.log('Ciao');
    console.log('Ciao');
    

    
});
