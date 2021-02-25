import React, { Component } from 'react'
import {connect} from 'react-redux'

class AddAge extends Component {
    render() {
        return (
            <div>
                <h1>Age : {this.props.ageh1}</h1>
                <button type='submit' onClick={this.props.ageUpButton}>AgeUp</button>
                <button type='submit' onClick={this.props.ageDownButton}>Agedown</button>
                <div><h1>History</h1></div>
                <div>
                    <ul>
                        {
                            this.props.history.map(li => (
                            <li key={li.id} onClick={()=>this.props.delItem(li.id)}>
                                <h2>{li.age}</h2>
                            </li>))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        ageh1 : state.age,
        history : state.history
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        ageUpButton : () => dispatch({type:'AGE_UP',value:1}),
        ageDownButton : () => dispatch({type:'AGE_DOWN',value:1}),
        delItem : (id) => dispatch({type:'DEL_ITEM',key:id})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddAge)