const puzzledisplay = document.querySelector('#hangman')
const remaingGuessDisplay = document.querySelector('#remainingGuesses')
let hangman1

 window.addEventListener('keypress', (e) => {
     if (hangman1.getRemainingGuesses() > 0) {
       const guess = String.fromCharCode(e.charCode)  //gets keystroke
       hangman1.guessLetter(guess)
       render()
     }   
 })

const render = () => {
  puzzledisplay.innerHTML = '';
  remaingGuessDisplay.textContent = hangman1.statusMessage
  hangman1.puzzle.split('').forEach((letter, index) => {
    let insertSpan = document.createElement('span')
    insertSpan.setAttribute("id",`letterspan${index}`)    
    insertSpan.textContent = letter  
    puzzledisplay.appendChild(insertSpan) 
  }) 
  }

 const startGame = async () => {
   console.log('button was clicked')
    const puzzle = await getPuzzle('2')
    hangman1 = new Hangman(puzzle,5)
    render()
 }

 document.querySelector('#reset').addEventListener('click', startGame)
 startGame()