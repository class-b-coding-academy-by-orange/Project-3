import React, { Component } from 'react'




export default class DataReq extends Component {
    render() {
const {DataURL} = this.props; 
        
        return (
            <div>
                <button onClick={this.props.getData.bind(this,DataURL)}>Let's Start !</button>
            </div>
        )
    }
}
