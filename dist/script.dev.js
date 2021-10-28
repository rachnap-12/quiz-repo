"use strict";

var quiz = document.getElementById('quiz');
var score = document.getElementById('score');
var countdown = document.getElementById('countdown');
var totalScore = document.getElementById('totalScore');
var qaSet = document.querySelectorAll('.quiz_header');
var ansRow = document.querySelectorAll('.quiz_header .qa_ans_row input');
console.log(ansRow); // const submitBtn = document.getElementById('submit');

var skipBtn = document.getElementById('skip');
console.log(skipBtn);
var count = 0;
var duration = 0; // let currentQuiz = 0;

var scoreCount = 0;
skipBtn.addEventListener('click', function () {
  step();
  duration = 10;
});

var step = function step() {
  count += 1;

  for (var i = 0; i < qaSet.length; i++) {
    qaSet[i].className = 'quiz_header';
  }

  qaSet[count].className = 'quiz_header active';

  if (count == 4) {
    skipBtn.style.display = 'none';
    clearInterval(durationTime);
    countdown.innerHTML = 0;
  }
};

ansRow.forEach(function (ansRowSingle) {
  ansRowSingle.addEventListener('click', function () {
    setTimeout(function () {
      step();
      duration = 10;
    }, 500);
    var valid = ansRowSingle.getAttribute("valid");

    if (valid == "valid") {
      scoreCount += 10;
      score.innerHTML = scoreCount;
      totalScore.innerHTML = score;
    } else {
      scoreCount = scoreCount;
      score.innerHTML = scoreCount;
      totalScore.innerHTML = score;
    }
  });
});
var durationTime = setInterval(function () {
  if (duration == 10) {
    duration = 0;
  }

  duration += 1;
  countdown.innerHTML = duration;

  if (countdown.innerHTML == "10") {
    step();
  }
}, 1000); // loadQuiz()
// function loadQuiz() {
//     deselectAnswers()
//     const currentQuizData = quizData[currentQuiz]
//     questionEl.innerText = currentQuizData.question
//     a_text.innerText = currentQuizData.a
//     b_text.innerText = currentQuizData.b
//     c_text.innerText = currentQuizData.c
//     d_text.innerText = currentQuizData.d
// }
// function deselectAnswers() {
//     answerEls.forEach(answerEl => answerEl.checked = false)
// }
// const getSelected = () => {
//     let answer
//     answerEls.forEach(answerEl => {
//         if(answerEl.checked) {
//             answer = answerEl.id
//         }
//     })
//     return answer
// }
// submitBtn.addEventListener('click', () => {
//     const answer = getSelected()
//     if(answer) {
//        if(answer === quizData[currentQuiz].correct) {
//            score++;
//            score.value=score;
//         //    console.log(score);
//        }
//        currentQuiz++
//        if(currentQuiz < quizData.length) {
//            loadQuiz()
//        } else {
//            quiz.innerHTML = `
//            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
//            <button onclick="location.reload()">Reload</button>
//            `
//        }
//     }
// })