import React, { Component } from 'react'
import {connect} from 'react-redux'

class AddAge extends Component {
    render() {
        return (
            <div>
                <input type="text" onChange={(e)=>{this.props.hundelChange(e.target)}}/>
                <button onClick={()=>{this.props.add(this.props.input)}}>Add</button>
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
        history : state.history
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        hundelChange: target => dispatch({type:'SET_INPUT',value:target.value}),
        add: input => {
            let obj={}
            let inputValue=input
            let id=Math.floor(Math.random()*1000)
            obj={inputValue,id}
            dispatch ({type:'ADD_INPUT',value:obj})
          },
        delItem : (id) => dispatch({type:'DEL_ITEM',key:id})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddAge)
