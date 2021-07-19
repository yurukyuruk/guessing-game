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

typingArea.addEventListener("keydown", (event) => {
  if (isNaN(parseInt(event.key, 10))) {
    event.preventDefault();
  }
})
/*
submitButton.addEventListener("click", (event) => {
  if(typingArea.value === "") {
    event.preventDefault();
  }
})
*/

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
console.log(randomNumber);
  if (randomNumber === Number(typingArea.value)) {
    comment = correctAnswer;
    questionMark.innerHTML = randomNumber;
    questionMark.classList.add("style");
    questionMark.style.fontWeight = "bold";
    questionMark.style.animation = "winner-number 2s linear infinite";
  } else {
    if (isVeryCloseAnswer()) {
      comment = veryCloseAnswer;
    } else if (isCloseAnswer()) {
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
  historyListElement.style.fontFamily = "cursive";
  historyListElement.style.borderRadius = "3rem";
  historyListElement.style.fontSize = "1.5rem";
  historyListElement.style.backgroundColor = "rgb(76, 115, 175)";
  historyListElement.style.width = "45rem";
  historyListElement.style.listStylePosition= "inside";
  historyListElement.style.marginBottom = "0.5rem";

  guessCount.textContent = historyList.childElementCount;
  guessCount.classList.add("style");
  guessCount.style.color = "white";
  guessCount.style.padding = "0 1rem 0 1rem";
  guessHint.textContent = comment;
  guessHint.classList.add("style");
  guessHint.style.fontWeight = "bold";
  guessHint.style.marginBottom = "-1.5rem";
  if (comment === correctAnswer) {
    guessHint.style.color = "rgb(62, 139, 255)";
    historyListElement.style.color = "rgb(62, 139, 255)";
    typingArea.setAttribute("disabled", "disabled");
    submitButton.disabled = true;
  } else if (comment === veryCloseAnswer) {
    guessHint.style.color = "rgb(68, 250, 189)";
    historyListElement.style.color = "rgb(68, 250, 189)";
  } else if (comment === closeAnswer) {
    guessHint.style.color = "rgb(250, 252, 148)";
    historyListElement.style.color = "rgb(250, 252, 148)";
  } else {
    guessHint.style.color = "rgb(255, 64, 64)";
    historyListElement.style.color = "rgb(255, 64, 64)";
  }
  typingArea.value = "";
});


resetButton.addEventListener("click", () => {
  guessHint.textContent = "";
  guessHint.removeAttribute("style");
  questionMark.textContent = "?";
  questionMark.removeAttribute("style");
  historyList.innerHTML = "";
  guessCount.textContent = "";
  typingArea.removeAttribute("disabled");
  randomNumber = Math.floor(Math.random() * 100) + 1;
  submitButton.disabled = false;
});




