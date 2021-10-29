const quiz = document.getElementById('quiz');
let score = document.getElementById('score');
const countdown = document.getElementById('countdown');
let totalScore = document.getElementById('totalScore');
let qaSet = document.querySelectorAll('.quiz_header');
let ansRow = document.querySelectorAll('.quiz_header .qa_ans_row input');
console.log(ansRow);
// const submitBtn = document.getElementById('submit');
const skipBtn = document.getElementById('skip');
console.log(skipBtn);

let count = 0;
let duration = 0;  
let scoreCount = 0;

skipBtn.addEventListener('click',() => {
    traverse();
    duration = 10;
  })

const traverse = () => {
    count += 1;
    for (let i = 0; i < qaSet.length ; i++){
        qaSet[i].className = 'quiz_header';
    }
      qaSet[count].className = 'quiz_header active';
      if(count == 5) {
          skipBtn.style.display='none';
          clearInterval(durationTime);
          countdown.innerHTML = 0;
      }

}

ansRow.forEach((ansRowSingle) => {
    ansRowSingle.addEventListener('click',() => {
        setTimeout(() => {
            traverse();
            duration = 10;
        }, 500)
       
        let valid = ansRowSingle.getAttribute("valid");
        if(valid == "valid") {
            scoreCount += 10;
            score.innerHTML = scoreCount;
            console.log("******");
            console.log(score);
            totalScore.innerHTML = scoreCount;
            console.log(totalScore);       
            
        }else{
            scoreCount = scoreCount;
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;

        }
    })
});

   
const durationTime = setInterval(() => {
    if(duration == 10) {
        duration = 0;
    }    
     duration += 1;
     countdown.innerHTML = duration;
     if(countdown.innerHTML == "10"){
        traverse();
     }
 }, 1000);



