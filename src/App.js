import React, { Component } from 'react'
import './App.css'

import Card from './Card'
import GuessCount from './GuessCount'


class App extends Component {

	handleCardClic(card){
		alert(`${card} Cliked`)
	} 
	
  	render() {
    	return (
    		<div className="memory">
    			<GuessCount guesses={0} />
    			<Card card="😀" feedback="hidden" onClick={this.handleCardClic} />
    			<Card card="🎉" feedback="justMatched" onClick={this.handleCardClic} />
    			<Card card="💖" feedback="justMismatched" onClick={this.handleCardClic} />
    			<Card card="🎩" feedback="visible" onClick={this.handleCardClic} />
    			<Card card="🐶" feedback="hidden" onClick={this.handleCardClic} />
    			<Card card="🐱" feedback="justMatched" onClick={this.handleCardClic} />
    		</div>)
  	}
}

export default App