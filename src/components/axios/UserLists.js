import React, { Component } from 'react'
import axios from 'axios'

class UserLists extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             Names:[]
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            console.log(response);
            this.setState({
                Names:response.data
            })
        }) 
        .catch (err => {
            console.log(err);
        })
    }
    

    render() {
        const {Names} = this.state
        return (
            <div>
                <h1>List of Names</h1>
                {
                    Names.length?
                    Names.map(name => <h3 key={name.id}>{name.name}</h3>):
                    null
                }
            </div>
        )
    }
}

export default UserLists
