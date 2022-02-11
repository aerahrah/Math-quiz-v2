'use strict';
let TwetyfiveQuestion = [];
let CheckAnswer;
let AnswerText;
let UserAnswer;
let FirstNum;
let SecondNum;
let thirdNum;
let score = 0;
let highscore = 0;
let Tquestion = 0;
let counter = 0;

function question() {
  let RandomTwoPicker = [];
  for (let j = 0; j < 2; j++) {
    thirdNum = Math.trunc(Math.random() * 2);
    RandomTwoPicker[j] = thirdNum;
  }
  //

  FirstNum = Math.trunc(
    (Math.random() * 17 + 8) * (Math.round(Math.random()) ? 1 : -1)
  );

  SecondNum = Math.trunc(
    (Math.random() * 23 + 1) * (Math.round(Math.random()) ? 1 : -1)
  );

  if (RandomTwoPicker[0] === 0) {
    CheckAnswer = FirstNum + SecondNum;
    AnswerText = `${FirstNum} + ${SecondNum}`;
    //prompt(`${FirstNum} + ${SecondNum}`);
  } else {
    CheckAnswer = FirstNum + SecondNum;
    //prompt(`${FirstNum} - ${SecondNum}`);
    AnswerText = `${FirstNum} + ${SecondNum}`;
  }
  document.querySelector('.number').textContent = AnswerText;
}
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;

};

document.querySelector('.next').addEventListener('click', function () {
  counter += 1;
  document.querySelector('.next').disabled = true;
  document.querySelector('.title').textContent = `Question # ${counter}`;
  document.querySelector('.check').disabled = false;
  displayMessage('Start Answering...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  question();
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (document.querySelector('.number').textContent === '-') {
    displayMessage('Click start first');
  } else if (guess == CheckAnswer) {
    if (Tquestion < 10) {
      score++;
      Tquestion++;
      document.querySelector('.title').textContent = `CORRECT ANSWER`;
      displayMessage('🎉 Correct Answer!');
      document.querySelector('.score').textContent = score;
      document.querySelector('.check').disabled = true;
      document.querySelector('.next').disabled = false;
      document.querySelector('body').style.backgroundColor = '#1E6F5C';
    } else {
      displayMessage('🎉 Click Start to Start Again');
      document.querySelector('.score').textContent = score;
      document.querySelector('.highscore').textContent = score;
      document.querySelector('body').style.backgroundColor = '#1E6F5C';
      if (score === 10) {
        document.getElementById("lock").style.display = "block";
        document.getElementById("unlock").style.display = "none";
        document.getElementById("unlock1").style.display = "none";
        document.getElementById("lock1").style.display = "none";
      }
    }
  } else if (guess != CheckAnswer) {
    if (Tquestion < 10) {
      document.querySelector('.check').disabled = true;
      document.querySelector('.next').disabled = false;
      document.querySelector('.title').textContent = `WRONG ANSWER`;
      document.querySelector('body').style.backgroundColor = '#7D0633';
      displayMessage(
        `❌ Wrong answer... Correct Asnwer for: ${AnswerText} is ${CheckAnswer}`
      );
      document.querySelector('.score').textContent = score;
      Tquestion++;
    } else {
      displayMessage('🎉 Click Start to Start Again');
      document.querySelector('.score').textContent = score;
      document.querySelector('.highscore').textContent = score;
      document.querySelector('body').style.backgroundColor = '#1E6F5C';
      if (score == 10) {
        document.getElementById("lock").style.display = "block";
        document.getElementById("unlock").style.display = "none";
      }
    }
  }
});

document.querySelector('.start').addEventListener('click', function () {
  counter = 1;
  score = 0;
  Tquestion = 0;
  question();
  displayMessage('Start Answering...');
  document.querySelector('.next').disabled = true;
  document.querySelector('.title').textContent = `Question # ${counter}`;
  document.querySelector('.between').textContent = 'Credits: Ivan';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
