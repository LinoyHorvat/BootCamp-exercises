// html variable
let questionBox = document.querySelector(".questionBox");
let userTxt = document.querySelector(".userTxt");
let guessesArr = document.querySelector(".guessesArr");
let h2PlayAgain = document.querySelector(".h2Txt");
let btn = document.querySelector("button");

// new variable
const arrayOfGuesses = [];
let letter = randomLetter();
let flag = false;


window.addEventListener("keypress", (e) => guessedKey(e.key));

function guessedKey(guessedLetter) {
  if (!flag) {
    if (!isGuessedKeyALetter(guessedLetter)) {
      userTxt.style.color = "red";
      userTxt.innerText = "Please enter a valid letter.";
    } else {
      if (guessedLetter === letter) {
        userTxt.style.color = "green";
        userTxt.innerText = "Right letter!";
        h2PlayAgain.innerText = "Would you like to play align?";
        guessesArr.style.display = "none";
        btn.style.display = "block";
        questionBox.innerText = letter;
        flag = true;
        btn.addEventListener("click", () => playAgain());
      } else {
        if (!arrayOfGuesses.includes(guessedLetter)) {
          arrayOfGuesses.push(guessedLetter);
          userTxt.style.color = "red";
          userTxt.innerText = "Nope, wrong letter";
          guessesArr.innerText = arrayOfGuesses;
        } else {
          userTxt.style.color = "red";
          userTxt.innerText = `${guessedLetter} has already been guessed!`;
        }
      }
    }
  }
}

function randomLetter() {
  let letter = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 1);
  console.log(letter);
  return letter;
}

function playAgain() {
  flag = false;
  arrayOfGuesses.length = 0;
  userTxt.style.color = "black";
  userTxt.innerText = "Guess a letter";
  guessesArr.innerText = "";
  btn.style.display = "none";
  guessesArr.style.display = "block";
  questionBox.innerText = "?";
  letter = randomLetter();
}

function isGuessedKeyALetter(key) {
  return (/[a-z]/.test(key) && key != "Enter");
}
