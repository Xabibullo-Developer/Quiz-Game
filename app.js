const quizData = [
    {
        question: "Qaysi til browser ichida ishlaydi ?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",
        correct: "d",
    },
    {
        question: "CSS ni to'liq shakli qanday?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "HTML ni to'liq shakli qanday?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a"
    },
    {
        question: "Javascript nechinchi yilda chiqqan?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
const btn = document.querySelector(".test-btn");
const answerInputs = document.querySelectorAll(".answer");
const aText = document.querySelector(".a_text");
const bText = document.querySelector(".b_text");
const cText = document.querySelector(".c_text");
const dText = document.querySelector(".d_text");
const quizDiv = document.querySelector(".quiz-container");
const questionElement = document.querySelector(".question");
let currentQuiz = 0;
let score = 0;
function deSelect() {
    answerInputs.forEach(function (input) {
        input.checked = false;
    });
}
function loadQuiz(){
    deSelect();
    questionElement.textContent = quizData[currentQuiz].question;
    aText.textContent = quizData[currentQuiz].a;
    bText.textContent = quizData[currentQuiz].b;
    cText.textContent = quizData[currentQuiz].c;
    dText.textContent = quizData[currentQuiz].d;
}
loadQuiz();
function getAnswer(){
    let answer;
    answerInputs.forEach(function(input){
        if(input.checked){
            answer = input.id;
        }
    });
    return answer;
}
btn.addEventListener('click', function() {
    let answer = getAnswer();
    if (answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
    }
    currentQuiz++;
    if(currentQuiz < quizData.length){
       loadQuiz();
    } else {
        quizDiv.innerHTML = `
        <h2> sizning natijangiz ${score}/4 </h2>
        <button class="test-btn" onclick="location.reload()" >Boshidan Boshlash</button>
        `;
    }
});
