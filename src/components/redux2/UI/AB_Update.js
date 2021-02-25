import React, { Component } from 'react'
import { connect } from 'react-redux'

export class AB_Update extends Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>A : {this.props.a}</h1>
                    <button onClick={() => this.props.updateA(this.props.b)}>Update A</button>
                </div>
                <div>
                    <h1>B : {this.props.b}</h1>
                    <button onClick={() => this.props.updateB(this.props.a)}>Update B</button>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        a:state.rA.a,
        b:state.rB.b
    }
}
const mapDispachToProps = (dispach) => {
    return{
        updateA : b => dispach({type:'UPDATE_A',b:b}),
        updateB : a => dispach({type:'UPDATE_B',a:a})
    }
}

export default connect(mapStateToProps,mapDispachToProps)(AB_Update)
