class Hangman {
  constructor (word,remainingGuesses) {
  this.word = word.toLowerCase().split('')
  this.remainingGuess = remainingGuesses
  this.guessedLetters = []
  this.status = 'playing'
  this.hangmanDisplay = []
  }
  updateHangman() {
    this.guessedLetters.forEach((guessedletter) => {
      this.word.forEach((letter,index) => {
         if (guessedletter === letter) {
            this.hangmanDisplay[index] = letter 
         }             
      })
   })
  }
  get statusMessage() {
    switch (this.status) {
      case 'playing' : return `Guesses left: ${this.getRemainingGuesses()}`
      case 'failed' : return `Nice try! The word was "${this.word.join("")}"`
      case 'finished' : return 'Great Work! You guessed the word.'
     }
  }
  updateStatus () {
    if ((this.word.join("").replace(/\s/g, '') === this.hangmanDisplay.join("")) && (this.remainingGuess > 0)) {
      this.status = "finished"
    } else if (this.remainingGuess === 0 && (this.word.join("") !== this.hangmanDisplay.join(""))) {
      this.status = 'failed'
    }  
  }

  guessLetter (letter) {
    const uniqueGuess = !this.guessedLetters.includes(letter)
   const badGuess = !this.word.includes(letter)
    if (badGuess && uniqueGuess)
     {
       this.remainingGuess--         
     }
     if (uniqueGuess) {         
      this.guessedLetters.push(letter)
      this.updateHangman()
     } 
    this.updateStatus() 
  }
  
  get puzzle() {
    let puzzle = ''  
    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === ' ') {
        puzzle += letter 
      } else {
        puzzle += '*'
      }
    })
    return puzzle 
  }
  getRemainingGuesses () {
    return this.remainingGuess 
  }
}

