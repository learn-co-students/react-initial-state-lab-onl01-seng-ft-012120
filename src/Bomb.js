import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super()
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }
  
  render() {
    let message = ""
    
    if (this.state.secondsLeft === 0) {
      message = "Boom!"
    }
    
    else {
      message = `${this.state.secondsLeft} seconds left before I go boom!`
    }
    
    return (
      <h1>{message}</h1>
    )
  }
}

export default Bomb;