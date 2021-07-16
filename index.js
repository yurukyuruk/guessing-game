let randomNumber = Math.floor(Math.random() * 100) + 1;
let typingArea = document.querySelector(".typing-area");
let submitButton = document.querySelector(".submit-button");
const resetButton = document.querySelector(".reset-button");
const questionMark = document.querySelector(".question-mark");
let guessHint = document.querySelector(".guess-hint");
let historyList = document.querySelector(".history-list");
let guessCounter = document.querySelector(".guess-counter");
let guessCount = document.querySelector(".guess-count");
let historyListElement;
let invalidInput = document.querySelector(".invalid-input");
const correctAnswer = "CORRECT ANSWER";
const veryCloseAnswer = "VERY CLOSE";
const closeAnswer = "CLOSE";
const farAnswer = "FAR";

/*function validateInput() {
  let x = typingArea.value;
  if(x !== 0 || x !== 1 || x !== 2 || x !== 3 || x !== 4 || x !== 5 || x !== 6 || x !== 7 || x !== 8 || x !== 9) {
    invalidInput.textContent = "Please enter a number.";
    submitButton.disabled = true;
  }
}

typingArea.addEventListener("keyup", () => {
  validateInput();
  }
)*/

function getXPercentageOfNumberMagnitude(x) {
  return Math.floor(Math.pow(10, randomNumber.toString().length) * x) + 1;
}

function isVeryCloseAnswer() {
  return Math.abs(randomNumber - typingArea.value) < getXPercentageOfNumberMagnitude(0.05);
}

function isCloseAnswer() {
  return Math.abs(randomNumber - typingArea.value) < getXPercentageOfNumberMagnitude(0.1);
}

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  let comment;
  
  if(randomNumber === Number(typingArea.value)) {
    comment = correctAnswer;
    questionMark.innerHTML = randomNumber;
    questionMark.classList.add("style");
    questionMark.style.fontWeight = "bold";
    questionMark.style.color = "blue";
  } else {
      if(isVeryCloseAnswer()) {
        comment = veryCloseAnswer; 
      } else if(isCloseAnswer()) {
        comment = closeAnswer;
      } else {
        comment = farAnswer;
      }
  };
  
  historyListElement = document.createElement("li");
  historyList.append(historyListElement);
  historyListElement.textContent = typingArea.value + " " + comment;
  historyListElement.classList.add("style");
  historyListElement.style.fontWeight = "bold";
  
  guessCount.textContent = historyList.childElementCount;
  guessCount.classList.add("style");
  guessCount.style.marginLeft = "5rem";
  guessCount.style.color = "rgb(175, 59, 59)";
  guessHint.textContent = comment;
  guessHint.classList.add("style");
  guessHint.style.fontWeight = "bold";
  if(comment === correctAnswer) {
    guessHint.style.color = "blue";
    historyListElement.style.color = "blue";
    typingArea.setAttribute("disabled", "disabled");
    submitButton.disabled = true;
  } else if(comment === veryCloseAnswer) {
    guessHint.style.color = "green";
    historyListElement.style.color = "green";
  } else if(comment === closeAnswer) {
    guessHint.style.color = "orange";
    historyListElement.style.color = "orange";
  } else {
    guessHint.style.color = "red";
    historyListElement.style.color = "red";
  }
  typingArea.value = ""; 
});


resetButton.addEventListener("click", () => {
  guessHint.textContent = "Please enter a number between 1-100";
  guessHint.removeAttribute("style");
  questionMark.textContent = "?";
  questionMark.removeAttribute("style");
  historyList.innerHTML = "";
  guessCount.textContent= "";
  typingArea.removeAttribute("disabled");
  randomNumber = Math.floor(Math.random() * 100) + 1;
  submitButton.disabled = false;
});




