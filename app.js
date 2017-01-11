document.addEventListener("DOMContentLoaded",function(event) {
//your code here!

alert('Press "OK" To Play A Programming Language Hangman Game');
var words = ["javascript", "jquery", "nodejs", "coding", "php", "java", "python", "ruby", "objectivec"];
//random word
var word = words[Math.floor(Math.random() * words.length)];
//answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;
    // game loop
while (remainingLetters > 0) {
    //progress
    alert(answerArray.join(" "));
    // Get a guess from the player
    var guess = prompt("Guess one letter, or click Cancel to stop playing.");
    if (guess === null) {
        // Exit the game loop
        break;
} else if (guess.length !== 1) {
    alert("Please enter a single letter!");
} else {
        // update guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
    // End game loop
}
// The answer
alert(answerArray.join(" "));
alert("The answer was " + word);

})
