let minimumInput = document.querySelector(".minimum-input");
let maximumInput = document.querySelector(".maximum-input");
minimumInput.value = "1";
maximumInput.value = "100";
let randomNumber = Math.floor(Math.random() * Math.abs(Number(maximumInput.value) - Number(minimumInput.value)) + Math.min(Number(minimumInput.value), Number(maximumInput.value)));
let typingArea = document.querySelector(".typing-area");
let submitButton = document.querySelector(".submit-button");
const resetButton = document.querySelector(".reset-button");
let questionMark = document.querySelector(".question-mark");
let guessHint = document.querySelector(".guess-hint");
let historyList = document.querySelector(".history-list");
let guessCounter = document.querySelector(".guess-counter");
let guessCount = document.querySelector(".guess-count");
let historyListElement;
let rangeInputs = document.querySelector(".range-inputs");

const correctAnswer = "CORRECT ANSWER!";
const veryCloseAnswer = "VERY CLOSE";
const closeAnswer = "CLOSE";
const farAnswer = "FAR";

window.addEventListener('load', (event) => {
  const inputList = JSON.parse(localStorage.getItem("inputList"));
  if(inputList.length > 0) {
    let continueOrNot = window.confirm("Do you want to continue?");
    if(continueOrNot === true) {
      minimumInput.disabled = true;
      maximumInput.disabled = true;
      randomNumber = Number(localStorage.getItem("drawnNumber"));
      minimumInput.value = localStorage.getItem("minimumInputValue") ?? "1";
      maximumInput.value = localStorage.getItem("maximumInputValue") ?? "100";
      for(let i = 0; i < inputList.length; i++) {
      historyList.append(createHistoryItem(Number(inputList[i]), getCommentMessage(Number(inputList[i]))));
      }
      guessCount.textContent = inputList.length;
      const lastGuess = Number(inputList[inputList.length - 1]);
      const lastComment = getCommentMessage(lastGuess);
      guessHint = editGuessHint(lastComment);
      questionMark = editQuestionMark(lastComment);
      if(lastComment === correctAnswer) {
        typingArea.setAttribute("disabled", "disabled");
        submitButton.disabled = true;
      }
    } else { localStorage.clear();
    }
  }
});

window.addEventListener("beforeunload", function (e) {
  const historyElements = Array.from(document.querySelectorAll(".history-list-element"));
  const userGuesses = historyElements.map(x => x.textContent.split(" ")[0]);
  localStorage.setItem("drawnNumber", randomNumber);
  localStorage.setItem("inputList", JSON.stringify(userGuesses));
  localStorage.setItem("minimumInputValue", minimumInput.value);
  localStorage.setItem("maximumInputValue", maximumInput.value);
});

typingArea.addEventListener("keydown", handleNumberInputKeydownEvent);

function handleNumberInputKeydownEvent(event) {
  if (isNaN(parseInt(event.key, 10)) && event.key !== "Backspace" && event.key !== "Enter" && event.key !== "Tab") {
    event.preventDefault();
  }
}

function getXPercentageOfNumberMagnitude(x) {
  return Math.floor(Math.pow(10, randomNumber.toString().length) * x) + 1;
}

function isVeryCloseAnswer(guessNumber) {
  return Math.abs(randomNumber - guessNumber) < getXPercentageOfNumberMagnitude(0.05);
}

function isCloseAnswer(guessNumber) {
  return Math.abs(randomNumber - guessNumber) < getXPercentageOfNumberMagnitude(0.1);
}

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  minimumInput.disabled = true;
  maximumInput.disabled = true;
  if (typingArea.value === "") {
    window.alert("Your guess can not be empty");
    return void 0;
  }
  if (Number(typingArea.value) < Math.min(Number(minimumInput.value), Number(maximumInput.value)) || Number(typingArea.value) > Math.max(Number(minimumInput.value), Number(maximumInput.value))) {
    window.alert("Your guess is not in the range");
    typingArea.value = "";
    return void 0;
  }
  let comment = getCommentMessage(Number(typingArea.value));
  editQuestionMark(comment);
  editGuessHint(comment);
  historyList.append(createHistoryItem(typingArea.value, comment));
  guessCount.textContent = historyList.childElementCount;
  if (comment === correctAnswer) {
    typingArea.setAttribute("disabled", "disabled");
    submitButton.disabled = true;
  }
  typingArea.value = "";
});

function getCommentMessage(guessNumber) {
  let result;
  if (randomNumber === guessNumber) {
    result = correctAnswer;
  } else if (isVeryCloseAnswer(guessNumber)) {
    result = veryCloseAnswer;
  } else if (isCloseAnswer(guessNumber)) {
    result = closeAnswer;
  } else {
    result = farAnswer;
  }
  return result;
}

function createHistoryItem(guessNumber, commentMessage) {
  const historyListElement = document.createElement("li");
  historyListElement.textContent = `${guessNumber} ${commentMessage}`;
  if (commentMessage === correctAnswer) {
    historyListElement.className ="history-list-element correct-answer";
  } else if (commentMessage === veryCloseAnswer) {
    historyListElement.className = "history-list-element very-close-answer";
  } else if (commentMessage === closeAnswer) {
    historyListElement.className = "history-list-element close-answer";
  } else {
    historyListElement.className = "history-list-element far-answer";
  }
  return historyListElement;
}

function editGuessHint(commentMessage) {
  guessHint.textContent = commentMessage;
  if (commentMessage === correctAnswer) {
    guessHint.className ="guess-hint correct-answer";
  } else if (commentMessage === veryCloseAnswer) {
    guessHint.className = "guess-hint very-close-answer";
  } else if (commentMessage === closeAnswer) {
    guessHint.className = "guess-hint close-answer";
  } else {
    guessHint.className = "guess-hint far-answer";
  }
  return guessHint;
}

function editQuestionMark(commentMessage) {
  if (commentMessage === correctAnswer) {
    questionMark.innerHTML = randomNumber;
    questionMark.className = "question-mark correct-answer";
  }
  return questionMark;
}

resetButton.addEventListener("click", () => {
  localStorage.clear();
  guessHint.textContent = "GUESS ME!";
  guessHint.className = "guess-hint";
  questionMark.textContent = "?";
  questionMark.className = "question-mark";
  historyList.innerHTML = "";
  guessCount.textContent = "0";
  typingArea.removeAttribute("disabled");
  randomNumber = Math.floor(Math.random() * 100) + 1;
  submitButton.disabled = false;
  minimumInput.disabled = false;
  maximumInput.disabled = false;
  minimumInput.value = "1";
  maximumInput.value = "100";
});

rangeInputs.addEventListener("keydown", handleNumberInputKeydownEvent);

rangeInputs.addEventListener("change", () => {
  randomNumber = Math.floor(Math.random() * Math.abs(Number(maximumInput.value) - Number(minimumInput.value)) + Math.min(Number(minimumInput.value), Number(maximumInput.value)));
});
 