// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {
    constructor(){
        super()
        this.state={
            timesClicked: 0
        }
    }

    updateCounter = () => {
        // let newClick = this.state.timesClicked +=1
        this.setState({
            timesClicked: this.state.timesClicked +=1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.updateCounter}>{this.state.timesClicked}</button>
            </div>
        )
    }
}