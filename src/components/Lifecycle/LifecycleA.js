import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Mohan'
        }
        console.log('LifecycleA constructor');
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedstateFromProps');
    }
    componentDidMount(){
        console.log('LifecycleA componentDidMount');
    }
    render() {
        console.log('LifecycleA render');
        return <div>
            Lifecycle A
            <LifecycleB/>
        </div>
    }
}

export default LifecycleA
