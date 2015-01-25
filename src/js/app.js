var hangmanWords = [
"the","of","and","a","to","in","is","you","that","it","he",
"was","for","on","are","as","with","his","they","I","at","be",
"this","have","from","or","one","had","by","word","but","not",
"what","all","were","we","when","your","can","said","there",
"use","an","each","which","she","do","how","their","if","will",
"up","other","about","out","many","then","them","these","so",
"some","her","would","make","like","him","into","time","has",
"look","two","more","write","go","see","number","no","way",
"could","people","my","than","first","water","been","call",
"who","oil","its","now","find","long","down","day","did","get",
"come","made","may","part"
];

//create qualifying array of words 3 letters or more:

var threeLettersOrMore = hangmanWords.filter(function (qualifyingWord){
  return qualifyingWord.length >= 3;
  });

// store random index of qualifying words in new array variable:

var randomWord = threeLettersOrMore[Math.floor(Math.random() * threeLettersOrMore.length)];

console.log("computer generated word:", randomWord);

//display word as dashes by turning it from a string into its own array ["h", "a", "d"]:

var randomWordToArray = randomWord.split("");

//turn array word into a string of dashes: ["_", "_", "_"]

var dashedRandomWord = randomWordToArray.map(function (char) {
    return "_";
});

//turn string of dashes back into an array: [_, _, _]

var dashedDisplayWord = dashedRandomWord.join(" ");

console.log("the dashed word the computer generated", dashedDisplayWord);

// Step 2: display blanks for random word in HTML:

document.querySelector('.dash-display').textContent=dashedDisplayWord;


// //DEFINE VARIABLES AND 2 FUNCTIONS TO RUN:
// //1. UPDATE DASH DISPLAY
// //2. SET GUESS (USER GUESS)
// //3. CHECK GUESS


var userGuess;

function updateDashDisplay(theText) {

  var element = document.querySelector('.dash-display');

  element.textContent = theText;
}

function setGuess(guessInputValue) {

  userGuess = guessInputValue.toLowerCase();
}

function checkGuess() {

  turnsRemaining();

  dashedDisplayWord = dashedDisplayWord.split(" ");

  for (var i = 0; i < randomWordToArray.length; ++i) {
    if (userGuess === randomWordToArray[i]) {
      dashedDisplayWord[i] = userGuess;
    }
  }

  dashedDisplayWord = dashedDisplayWord.join(' ');
  updateDashDisplay(dashedDisplayWord);
}

function turnsRemaining() {

  var element = document.querySelector('.turn-count');

  var livesRemaining = Number(element.textContent) - 1;

  element.textContent = livesRemaining;

}
