let minimumInput = document.querySelector(".minimum-input");
let maximumInput = document.querySelector(".maximum-input");
minimumInput.value = "1";
maximumInput.value = "100";
let randomNumber = Math.floor(Math.random() * Math.abs(Number(maximumInput.value) - Number(minimumInput.value))  + Math.min(Number(minimumInput.value), Number(maximumInput.value)) + 1);
let typingArea = document.querySelector(".typing-area");
let submitButton = document.querySelector(".submit-button");
const resetButton = document.querySelector(".reset-button");
const questionMark = document.querySelector(".question-mark");
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



submitButton.disabled = true;
typingArea.addEventListener("input", () => {
  if(typingArea.value === "") {
    return void 0;
  } 
  submitButton.disabled = false;  
  if(Number(typingArea.value) < Math.min(Number(minimumInput.value), Number(maximumInput.value)) || Number(typingArea.value) > Math.max(Number(minimumInput.value), Number(maximumInput.value))) {
    window.alert("Your guess is not in the range");
    submitButton.disabled = true;
  }
})

typingArea.addEventListener("keydown", handleNumberInputKeydownEvent);

function handleNumberInputKeydownEvent(event) {
  if (isNaN(parseInt(event.key, 10)) && event.key !== "Backspace" && event.key !== "Enter" && event.key !== "Tab") {
    event.preventDefault();
  }
}

function getXPercentageOfNumberMagnitude(x) {
  return Math.floor(Math.pow(10, randomNumber.toString().length) * x) + 1;
}

function isVeryCloseAnswer() {
  return Math.abs(randomNumber - Number(typingArea.value)) < getXPercentageOfNumberMagnitude(0.05);
}

function isCloseAnswer() {
  return Math.abs(randomNumber - Number(typingArea.value)) < getXPercentageOfNumberMagnitude(0.1);
}

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  let comment;

  

  minimumInput.disabled = true;
  maximumInput.disabled = true;

  if (randomNumber === Number(typingArea.value)) {
    comment = correctAnswer;
    questionMark.innerHTML = randomNumber;
    questionMark.style.background = "none";
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

  guessHint.textContent = comment;

  historyListElement = document.createElement("li");
  historyList.append(historyListElement);
  historyListElement.textContent = typingArea.value + " " + comment;
  historyListElement.classList.add("history-list-element");
  
  guessCount.textContent = historyList.childElementCount;
  
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
    guessHint.style.color = "rgb(253, 123, 123)";
    historyListElement.style.color = "rgb(253, 123, 123)";
  }

  typingArea.value = "";
  submitButton.disabled = true;

});


resetButton.addEventListener("click", () => {
  guessHint.textContent = "GUESS ME!";
  guessHint.style.color = "white";
  
  questionMark.textContent = "?";
  questionMark.style.animation = "none";
  questionMark.style.color = "rgb(38, 80, 143)";
  questionMark.style.background ="rgb(76, 115, 175";
  
  historyList.innerHTML = "";
  
  guessCount.textContent = "0";
  
  typingArea.removeAttribute("disabled");
  
  randomNumber = Math.floor(Math.random() * 100) + 1;
  
  submitButton.disabled = true;
  minimumInput.disabled = false;
  maximumInput.disabled = false;
  
  minimumInput.value = "1";
  maximumInput.value = "100";
});

rangeInputs.addEventListener("keydown", handleNumberInputKeydownEvent);

rangeInputs.addEventListener( "change", () => {
  randomNumber = Math.floor(Math.random() * Math.abs(maximumInput.value - minimumInput.value)  + Math.min(minimumInput.value, maximumInput.value) + 1);
})




