import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Mohan'
        }
        console.log('LifecycleB constructor');
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDerivedstateFromProps');
    }
    componentDidMount(){
        console.log('LifecycleB componentDidMount');
    }
    render() {
        console.log('LifecycleB render');
        return <div>Lifecycle B</div>
    }
}

export default LifecycleB
