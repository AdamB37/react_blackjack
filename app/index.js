import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'

import { newDeck } from './lib/cards'

let deck = newDeck()
console.log('start deck')
console.log(deck)

// let playerHand = deck.takeLast(2)
// deck = deck.skipLast(2)
// let dealerHand = deck.takeLast(2)
// deck = deck.skipLast(2)
//
// console.log('end deck: ')
// console.log(deck)
// console.log('player hand: ')
// console.log(playerHand)
// console.log('dealer hand: ')
// console.log(dealerHand)

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
