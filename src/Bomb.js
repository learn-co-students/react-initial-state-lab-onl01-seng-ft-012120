// your Bomb code here!
// 
import React from 'react'

	

export default class Bomb extends React.Component {

	constructor(props) {
		super()
		this.state = {
			secondsLeft: props.initialCount	
		}
	}

	render() {
		const display = this.state.secondsLeft != 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'  

		return(
			<div>{display}</div>
			)
	}
}
