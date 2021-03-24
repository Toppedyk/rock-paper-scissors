function play(playerChoice){
  let compChoice = computer()
  let msg =''
  if(playerChoice === compChoice){
    msg = `It's a draw!`
    console.log(`It's a draw!`)
  }
  else if(playerChoice === 'rock'){
    if(compChoice==='scissors'){
      msg = 'Congrats you won!!'
      console.log(`You Win!`)
    }else if(compChoice==='paper'){
      msg = 'Oh no, you lost! :(.'
      console.log(`You lost!`)
    }
  }
  else if(playerChoice === 'paper'){
    if(compChoice==='rock'){
      msg = 'Congrats you won!!'
      console.log(`You Win!`)
    }else if(compChoice==='scissors'){
      msg = 'Oh no, you lost! :(.'
      console.log(`You lost!`)
    }
  }
  else if(playerChoice === 'scissors'){
    if(compChoice==='paper'){
      msg = 'Congrats you won!!'
      console.log(`You Win!`)
    }else if(compChoice==='rock'){
      msg = 'Oh no, you lost! :(.'
      console.log(`You lost!`)
    }
  }
  else{
    console.log('Theres an Error')
  }
  document.getElementById('update').innerHTML = `${msg} Your opponent chose ${compChoice}.`
}

let statW = 0
let statL = 0
let statD = 0

function computer(){
  let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']
  let index = Math.floor(Math.random()*Math.floor(choices.length))
  let computer = choices[index]
  console.log(computer)
  return computer
}

function myPlay(playerChoice){
  let compChoice = computer()
  let msg =''
  if(playerChoice === compChoice){
    msg = `It's a draw!`
    console.log(`It's a draw!`)
    statD++
  }
  else if(wins[playerChoice].includes(compChoice)){
      msg = 'Congrats you won!!'
      console.log(`You Win!`)
      statW++
    }else {
      msg = 'Oh no, you lost! :(.'
      console.log(`You lost!`)
      statL++
  }

  document.getElementById('update').innerHTML = `${msg} Your opponent chose ${compChoice}.`
  document.getElementById('win').innerHTML = `Wins: ${statW}`
  document.getElementById('lose').innerHTML = `Losses: ${statL}`
  document.getElementById('draw').innerHTML = `Draws: ${statD}`
}


let wins ={
  rock :['scissors','lizard'],
  paper: ['rock','spock'],
  scissors: ['paper','lizard'],
  lizard: ['spock','paper'],
  spock: ['rock', 'scissors']
}