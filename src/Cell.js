import React, { Component } from 'react';

export default class Cell extends Component {
  
    constructor(props) {
        super(props)
        this.state = {
            color: props.value
        }
    }
    changeColour = () => {
        this.setState({
            color: "#333"
        })
    }

    render () {
        return (
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColour}>
                <p>Test</p>
            </div>
        )
        
    }
}