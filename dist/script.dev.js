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
var duration = 0;
var scoreCount = 0; //skip button logic

skipBtn.addEventListener('click', function () {
  traverse();
  duration = 20;
});

var traverse = function traverse() {
  count += 1;

  for (var i = 0; i < qaSet.length; i++) {
    qaSet[i].className = 'quiz_header';
  }

  qaSet[count].className = 'quiz_header active';

  if (count == 5) {
    skipBtn.style.display = 'none';
    clearInterval(durationTime);
    countdown.innerHTML = 0;
  }
};

ansRow.forEach(function (ansRowSingle) {
  ansRowSingle.addEventListener('click', function () {
    setTimeout(function () {
      traverse();
      duration = 20;
    }, 1500);
    var valid = ansRowSingle.getAttribute("valid");

    if (valid == "valid") {
      scoreCount += 10;
      score.innerHTML = scoreCount;
      console.log("******");
      console.log(score);
      totalScore.innerHTML = scoreCount;
      console.log(totalScore);
    } else {
      scoreCount = scoreCount;
      score.innerHTML = scoreCount;
      totalScore.innerHTML = scoreCount;
    }
  });
}); //set the timer  

var durationTime = setInterval(function () {
  if (duration == 20) {
    duration = 0;
  }

  duration += 1;
  countdown.innerHTML = duration;

  if (countdown.innerHTML == "20") {
    traverse();
  }
}, 1000);