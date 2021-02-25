import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             textarea:'',
             topic:'science'
        }
    }
    usernamechange = (e) => {
        this.setState({
            username:e.target.value
        })
    }
    textareachange = (e) => {
        this.setState({
            textarea:e.target.value
        })
    }
    topicchange = (e) => {
        this.setState({
            topic:e.target.value
        })
    }
    render() {
        return (
            <form>
                <div>
                    <label>Username:</label>
                    <input value={this.state.username} onChange={this.usernamechange}/>
                </div>
                <div>
                    <label>Text Area:</label>
                    <textarea value={this.state.textarea} onChange={this.textareachange}/>
                </div>
                <div>
                    <label>Topic:</label>
                    <select value={this.state.topic} onChange={this.topicchange}>
                        <option value='science'>Science</option>
                        <option value='maths'>Maths</option>
                        <option value='english'>English</option>
                    </select>
                </div>
            </form>
        )
    }
}

export default Form
