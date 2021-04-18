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




