"use strict";

// const quizData = [
//     {
//         question: "Which language runs in a web browser?",
//         a: "Java",
//         b: "C",
//         c: "Python",
//         d: "javascript",
//         correct: "d",
//     },
//     {
//         question: "What does CSS stand for?",
//         a: "Central Style Sheets",
//         b: "Cascading Style Sheets",
//         c: "Cascading Simple Sheets",
//         d: "Cars SUVs Sailboats",
//         correct: "b",
//     },
//     {
//         question: "What does HTML stand for?",
//         a: "Hypertext Markup Language",
//         b: "Hypertext Markdown Language",
//         c: "Hyperloop Machine Language",
//         d: "Helicopters Terminals Motorboats Lamborginis",
//         correct: "a",
//     },
//     {
//         question: "What year was JavaScript launched?",
//         a: "1996",
//         b: "1995",
//         c: "1994",
//         d: "none of the above",
//         correct: "b",
//     },
// ];
var quiz = document.getElementById('quiz');
var score = document.getElementById('score');
var countdown = document.getElementById('countdown'); // const answerEls = document.querySelectorAll('.answer');
// const questionEl = document.getElementById('question');
// const a_text = document.getElementById('a_text');
// const b_text = document.getElementById('b_text');
// const c_text = document.getElementById('c_text');
// const d_text = document.getElementById('d_text');

var qaSet = document.querySelectorAll('.quiz-header');
var ansRow = document.querySelectorAll('.quiz-header .qa_ans_row input');
var submitBtn = document.getElementById('submit');
var skipBtn = document.getElementById('skip');
console.log(skipBtn);
var count = 0;
var duration = 0;
var currentQuiz = 0;
score = 0;
skipBtn.addEventListener('click', function () {
  step();
});

var step = function step() {
  count += 1;

  for (var i = 0; i < qaSet.length; i++) {
    qaSet[i].className = 'quiz-header';
  }

  qaSet[count].className = 'quiz-header active';

  if (count == 4) {
    skipBtn.style.display = 'none';
  }
};

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  var currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(function (answerEl) {
    return answerEl.checked = false;
  });
}

var getSelected = function getSelected() {
  var answer;
  answerEls.forEach(function (answerEl) {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
};

submitBtn.addEventListener('click', function () {
  var answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
      score.value = score; //    console.log(score);
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = "\n           <h2>You answered ".concat(score, "/").concat(quizData.length, " questions correctly</h2>\n\n           <button onclick=\"location.reload()\">Reload</button>\n           ");
    }
  }
});