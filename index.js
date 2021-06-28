/*
const randomNumber = Math.floor(Math.random() * 100) + 1;

function userGuess(number) {  
    if (number > randomNumber) {
       return 'TOO BIG';
    } else if (number < randomNumber) {
      return 'TOO SMALL';
    } else if (number === randomNumber){
      return 'YOU WIN';
    }
}

while(true) {
  const number = Number(prompt('Please enter a number:'));
  const resultOfUserGuess = userGuess(number);
  if (isNaN(number)) {
    alert('Please enter a number value');
  } else if (resultOfUserGuess === 'TOO SMALL') {
    alert('TOO SMALL');
  } else if (resultOfUserGuess === 'TOO BIG') {
    alert('TOO BIG');
  } else if (resultOfUserGuess === 'YOU WIN') {
    alert('YOU WIN');
    break;
  } 
}
*/

let randomNumber = Math.floor(Math.random() * 100) + 1;
let typingArea = document.querySelector(".typing-area");
const guessHint = document.querySelector(".guess-hint");
const questionMark = document.querySelector(".question-mark");

const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  let comment;
  const correctAnswer = "CORRECT ANSWER";
  const veryCloseAnswer = "VERY CLOSE";
  const closeAnswer = "CLOSE";
  const farAnswer = "FAR";
  
  if(randomNumber == typingArea.value) {
    comment = correctAnswer;
    questionMark.innerHTML = randomNumber;
  } else if(typingArea.value < 10) {
      if(Math.abs(randomNumber - typingArea.value) === 1) {
        comment = veryCloseAnswer;    
      } else if(Math.abs(randomNumber - typingArea.value) < 6) {
        comment = closeAnswer;
      } else {
        comment = farAnswer;
      }
  } else {
      if(Math.abs(randomNumber - typingArea.value) < 11) {
        comment = veryCloseAnswer; 
      } else if(Math.abs(randomNumber - typingArea.value) < 51) {
        comment = closeAnswer;
      } else {
        comment = farAnswer;
      }
  };

  let historyList = document.createElement("li");
  historyList.className = "list-elements";
  ul.append(historyList);
  historyList.innerHTML = typingArea.value + " " + comment;
  guessHint.innerHTML = comment;
  typingArea.value = ""; 
});

const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", function(event) {
  guessHint.innerHTML = "";
  questionMark.innerHTML = "?";
  const guessList = document.querySelectorAll(".list-elements");
  for(let i = 0; i < guessList.length; i++) {
    guessList[i].remove();
  }
  randomNumber = Math.floor(Math.random() * 100) + 1;
});




