const check = document.querySelector('.check');
const next = document.querySelector('.next');
const front = document.querySelector('.front');
const back = document.querySelector('.back');
let currentCard;
const stats = {
    correct: 0,
    wrong: 0
}
const wrongWords = [

]

const statsElement = document.querySelector('.stats');


function set(){
    currentCard = DATA[Math.floor(Math.random() * DATA.length)];

    back.textContent = currentCard['front'];
}

set();

function click(){
    front.textContent = currentCard['back'];
}

function nextWord(){
    front.textContent = '-';
    back.textContent = '-';
    set();

    statsElement.textContent = `Wrong: ${stats.wrong} | Correct: ${stats.correct}`;
}

next.addEventListener('click', nextWord);
check.addEventListener('click', click);


addEventListener('keydown', (e) => {
    if(e.key === 'x'){
        click();
    }
    if(e.key === 'z'){
        wrongWords.push(currentCard["front"]);
        stats.wrong += 1;
        nextWord();
    }
    if(e.key === 'c'){
        stats.correct += 1;
        nextWord();
    }
});