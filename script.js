

const submitButton = document.querySelector('.submit-button');
const input = document.querySelector('#input-container');
const question = document.querySelector('.question-container');

let scoreContainer = document.querySelector('.score-container')

let questionIndex = 0;

let answerList = ["Patrick Kane", "The Chicago Blackhawks", "Nico Hischier", "Erica Colabella", "Tim Lincecum", "Sidney Crosby"];

let questionList = ["Who is Showtime?", "What team won the Stanley Cup in 2013?", 
    "Who is the princess of Switzerland?", 
    "Who is the curse of the Yankees?",
    "Who is the Freak (Giants)?",
    "Who is the destined goalie of the Pittsburgh Penguins?"
];

let score = 0;

let submitFunction = () =>{
    submitButton.addEventListener('click', () =>{
        if(input.value === answerList[questionIndex]){
            questionIndex += 1;
            score += 1;
            question.textContent = questionList[questionIndex];
            scoreContainer.textContent = "Score: " + score;
        }else {
            score -= 1;
            scoreContainer.textContent = "Score: " + score;
        }
        /// put endgame function here 
    });
}

question.textContent = questionList[questionIndex];

let endGame = () => {
    if(questionIndex > 5){
        scoreContainer.textContent = "Final Score:"
    }
}