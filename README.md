# GUESSING GAME
1. About the Game
2. Game Rules
3. Setting Options
4. Memory
## About the Game
- Game is played by guessing the randomly generated number between the default range or a range decided by the player. **Setting options** allows player to set the range of numbers to guess and it is between **1-100** by default. 
- Game player enters a number in the **guess bar** and clicks **confirm** button and guess bar is cleared. 
- Each time after submitting, **guess history** section lists each guessed number with its hint. 
- It is possible to make this **guess history list** visible or hidden by clicking on this section. 
- There is also a **guess counter** which counts the number of player's guesses. 
- A **guess hint** appears after each submit upper the guess bar which tells about the relation between the generated number and the guessed number. 
- If user guesses the generated number, **question mark** on the top will be replaced with the guessed number with CSS animation. 
- If player clicks **reset** button, range will become the default range, a new random number will be generated, guess bar, guess hints, guess history and guess counter will be cleared and if number is guessed, guessed number on the top will be replaced with the question mark again.
## Game Rules
- Only numbers between the range is allowed to submit. If a number out of range is entered, an **alert box** will be displayed.  
- Basing on how close user was to the correct answer a guess hint will be displayed over input:
  - **CORRECT ANSWER** → is displayed if player guess is equal to random number. Displayed guess hint is a big, bold text which changes color from green to blue in the infinity animation(CSS animation used).
  - **VERY CLOSE** → is displayed if the player was wrong by no more than 5% of the order of magnitude + 1 of the guessing number. Displayed guess hint is a big, bold green text.
  - **CLOSE** → is displayed if the player was wrong by no more than 10% of the order of magnitude + 1 of the guessing number. Displayed guess hint is a big, bold orange text.
  - **FAR** → is displayed in the other cases. Displayed guess hint is big, bold red text.
