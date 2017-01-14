// <script>
// var play = document.getElementById('play')
// play.addEventListener("click", playGame)
// function playGame() {
//     function pickWord() {
//       var words = ["javascript", "jquery", "nodejs", "coding", "php", "java", "python", "ruby", "objectivec"];
//       return words[Math.floor(Math.random() * words.length)];
//     };
//     function setupAnswerArray(word) {
//       var answerArray = [];
//       for (i=0; i < word.length; i++) {
//         answerArray[i] = "_";
//       }
//       return answerArray;
//     };
//     function showPlayerProgress(answerArray) {
//       alert(answerArray.join(" "));
//     };
//     function getGuess() {
//       var guess = prompt("Guess a letter, or click Cancel to stop playing");
//       return guess = guess.toLowerCase();
//     };
//     function updateGameState(guess, word, answerArray) {
//       var numberOfGuesses = 0;
//       for (var j = 0; j < word.length; j++) {
//         if (word[j] === guess) {
//           answerArray[j] = guess;
//           numberOfGuesses++;
//         }
//       }
//       return numberOfGuesses;
//     };
//     function showAnswerAndCongratulatePlayer(answerArray) {
//         alert("Decent! The answer was " + (answerArray.join("")));
//     };
//     var word = pickWord();
//     var answerArray = setupAnswerArray(word);
//     var remainingLetters = word.length;
//     while (remainingLetters > 0) {
//       showPlayerProgress(answerArray);
//       var guess = getGuess();
//       if (guess === null) {
//         break;
//       } else if (guess.length !== 1) {
//         alert("Please enter a single letter.");
//       } else {
//             var correctGuesses = updateGameState(guess, word, answerArray);
//             remainingLetters -= correctGuesses;
//           }
//         };
//         showAnswerAndCongratulatePlayer(answerArray);
// }
// </script>
