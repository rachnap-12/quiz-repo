const quiz = document.getElementById('quiz');
let score = document.getElementById('score');
const countdown = document.getElementById('countdown');
let qaSet = document.querySelectorAll('.quiz_header');
let ansRow = document.querySelectorAll('.quiz_header .qa_ans_row input');
console.log(ansRow);
// const submitBtn = document.getElementById('submit');
const skipBtn = document.getElementById('skip');
console.log(skipBtn);

let count = 0;
let duration = 0;  
// let currentQuiz = 0;
let scoreCount = 0;

skipBtn.addEventListener('click',() => {
    step();
  })

const step = () => {
    count += 1;
    for (let i = 0; i < qaSet.length ; i++){
        qaSet[i].className = 'quiz_header';
    }
      qaSet[count].className = 'quiz_header active';
      if(count == 4) {
          skipBtn.style.display='none';
      }

}

ansRow.forEach((ansRowSingle) => {
    ansRowSingle.addEventListener('click',() => {
        setTimeout(() => {
            step();
        }, 500)
       
        let valid = ansRowSingle.getAttribute("valid");
        if(valid == "valid") {
            scoreCount += 10;
            score.innerHTML = scoreCount;
            
        }else{
            scoreCount = scoreCount;
            score.innerHTML = scoreCount;

        }
    })
});





// loadQuiz()

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

