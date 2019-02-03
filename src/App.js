import React, { Component } from 'react'
import './App.css'

import Card from './Card'
import GuessCount from './GuessCount'


class App extends Component {

	handleCardClic(card){
		alert(`${card} Cliked`)
	} 

  	render() {
  		const won = new Date().getSeconds() % 2 === 0;
    	return (
    		<div className="memory">
    			<GuessCount guesses={0} />
    			<Card card="😀" feedback="hidden" onClick={this.handleCardClic} />
    			<Card card="🎉" feedback="justMatched" onClick={this.handleCardClic} />
    			<Card card="💖" feedback="justMismatched" onClick={this.handleCardClic} />
    			<Card card="🎩" feedback="visible" onClick={this.handleCardClic} />
    			<Card card="🐶" feedback="hidden" onClick={this.handleCardClic} />
    			<Card card="🐱" feedback="justMatched" onClick={this.handleCardClic} />
    			{won && <p>C'est Gagné</p>}
    		</div>)

  	}
}

export default App