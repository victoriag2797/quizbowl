let questionList = ["Who is Showtime?", "What team won the Stanley Cup in 2013?", "Who is the princess of Switzerland?", "Who is the curse of the Yankees?", "Who is the Freak (Giants)?", "Who is the destined goalie of the Pittsburgh Penguins?"];
let answerList = ["Patrick Kane", "The Chicago Blackhawks", "Nico Hischier", "Erica Colabella", "Tim Lincecum", "Sidney Crosby"];
let score = 0;
let questionIndex = 0;

const question = document.querySelector('.question-container');
const button = document.querySelector('button');
const input = document.querySelector('#input-field');
let scoreContainer = document.querySelector('.score-container')

question.textContent = questionList[questionIndex];

let submitFunction = () =>{
    button.addEventListener('click', () =>{
        if(input.value === answerList[questionIndex]){
            questionIndex += 1;
            console.log(questionIndex);
            score += 1;
            question.textContent = questionList[questionIndex];
            scoreContainer.textContent = "Score: " + score;
        }else{
            score -= 1;
            scoreContainer.textContent = "Score: " + score;
        }
        /// put endgame function here 
        endGame();
    });
}

let endGame = () =>{
    if(questionIndex > 5){
        scoreContainer.textContent = "Final Score: " + score;
        question.textContent = "Congratulations, play again!";
        input.style.display = "none";
        button.style.display = "none";
    }
}

submitFunction();