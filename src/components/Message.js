import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Welcome Visitor"
        }
    }
    
    subscribe = () => {
        this.setState({
            message:"Thank You for Subscribing"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.subscribe()}>Subscribe</button>
            </div>
        )
    }
}

export default Message
