import React, { Component } from 'react';

export default class Bomb extends Component {

    constructor(props) {
        super()
        this.state = {
          secondsLeft: props.initialCount
        }
      }
    
    render() {
        if (this.state.secondsLeft > 0) {
            return `${this.state.secondsLeft} seconds left before I go boom!`;
        } else if (this.state.secondsLeft === 0) {
            return 'Boom!';
        }
    }
}

// It should render the text `'<SECONDS_LEFT> seconds left before I go boom!'`,
// where `<SECONDS_LEFT>` is the value of `secondsLeft`.
// 5.  **If `secondsLeft` equals `0`, it should render `'Boom!'` instead.**