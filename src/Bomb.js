// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component{
    constructor(props){
        super()
        console.log(props.initialCount)
        this.state = {
            secondsLeft: props.initialCount 
        }
    }

    render(){
        let val
        if(this.state.secondsLeft === 0){
            val = 'Boom!'
        }
        else{
            val = `${this.state.secondsLeft} seconds left before I go boom!`
        }
        return(<div>{val}</div>)
    }
}