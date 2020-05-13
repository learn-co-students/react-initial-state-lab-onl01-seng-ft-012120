// your Bomb code here!
import React from "react";

class Bomb extends React.Component
{
    constructor(props)
    {
        super();
        this.state = { secondsLeft: props.initialCount}
    }

    render()
    {
        if(this.state.secondsLeft === 0)
        {
            return <p>Boom!</p>
        }
        return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    }
}

export default Bomb;