import React from 'react'

class Bomb extends React.Component {

    constructor(props) { 
        super()
        this.state = { secondsLeft: props.initialCount }
    }

    tick() {
        this.setState(state => ({
          secondsLeft: state.secondsLeft - 1
        }));
      }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(){
        return (
            <h1>{this.state.secondsLeft == 0 ? "Boom!" : this.state.secondsLeft+" seconds left before I go boom!"}</h1>
        );
    }
}

export default Bomb;