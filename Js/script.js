const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const ComputerScore = document.querySelector('[data-computer-score]')
const scoreScore = document.querySelector('[data-your-score]')


function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
  }



const SELECTIONS = [
    {
        name: 'rock',
        emoji: '👊',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '🖐️',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✌️',
        beats: 'paper'
    }
]


selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
    const selectionName =  selectionButton.dataset.selection
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeSelection(selection)
    })
})

function makeSelection(selection){
    const computerSelection = randomSelection()
    const Yourwinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
 
    AddTheResult(computerSelection, computerWinner)
    AddTheResult(selection, Yourwinner)
    if (Yourwinner) incrementScore(scoreScore) 
    
    if (computerWinner)incrementScore(ComputerScore)

   
    

    
}

// function incrementScore(scoreScore){
//     scoreScore.innerText = parseInt(scoreScore.innerText) + 1
//     console.log(parseInt(scoreScore.innerText))
//     console.log(parseInt(ComputerScore.innerText))
 
//     if (parseInt(scoreScore.innerText) === 3) {
//         alert(` Winner winner chicken dinner!!`)
//         location.reload(true)
//       }
//       else if (parseInt(ComputerScore.innerText) === 3) {
//         alert(`Pc Win!'`)
//         location.reload(true)
//       }
      
// }


function incrementScore(score){
    score.innerText = parseInt(score.innerText) + 1

    if (parseInt(scoreScore.innerText) === 3) {
        alert(` Winner winner chicken dinner!!`)
        location.reload(true)
      } 
    else if (parseInt(ComputerScore.innerText) === 3) {
        alert('Pc Win!')
        location.reload(true)
      }
      
}



function AddTheResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji;
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
    

}

function isWinner(selection, opponentSelection){
    return selection.beats === opponentSelection.name
}



function randomSelection(){

    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}

