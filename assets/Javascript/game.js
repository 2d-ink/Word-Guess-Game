alert("Press Any letter from A-Z to start Guessing");
var listOfWords = [
  "madonna", 
  "cher", 
  "sunny", 
  "starburst", 
  "direction", 
  "one",
  "milky",
  "crunch",
  "nerds",
  "hello", 
];
var wordPick = "";
var lettersPick = [];
var blankFields = 0;
var successes = [];
var incorrectGuess = [];
var letterGuess = "";

var win = 0;
var loss = 0;
var numberOfGuess = 9;

function startGame() {

  numberOfGuess = 9;

  wordPick = listOfWords[Math.floor(Math.random() * listOfWords.length)];

  lettersPick = wordPick.split("");

  blankFields = lettersPick.length;

  successes = [];

  incorrectGuess = [];

  for (var i = 0; i < blankFields; i++) {
    successes.push("_");
  }

  document.getElementById("remaining").innerHTML = numberOfGuess;

  document.getElementById("blankWord").innerHTML = successes.join(" ");

  document.getElementById("wrong").innerHTML = incorrectGuess.join(" ");
}

function checkLetters(letter) {

  var letterInWord = false;

  for (var i = 0; i < blankFields; i++) {

    if (wordPick[i] === letter) {

      letterInWord = true;
    }
  }

  if (letterInWord) {

    for (var j = 0; j < blankFields; j++) {

      if (wordPick[j] === letter) {

        successes[j] = letter;
      }
    }
  }

  else {

    incorrectGuess.push(letter);

    numberOfGuess--;
  }

}

function roundComplete() {

  document.getElementById("remaining").innerHTML = numberOfGuess;

  document.getElementById("blankWord").innerHTML = successes.join(" ");

  document.getElementById("wrong").innerHTML = incorrectGuess.join(" ");

  if (lettersPick.toString() === successes.toString()) {

    win++;
   
   alert("You Win"); 

    document.getElementById("win").innerHTML = win;

    startGame();
  }

  else if (numberOfGuess === 0) {

    loss++;

    alert("You lose");

    document.getElementById("loss").innerHTML = loss;

    startGame();
  }

}

startGame();

document.onkeyup = function(event) {

  letterGuess = String.fromCharCode(event.which).toLowerCase();
  
  checkLetters(letterGuess);
  
  roundComplete();
};
