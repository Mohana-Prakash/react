import React, { Component } from 'react';
import {connect} from 'react-redux'

class Input extends Component {

  render() { 
    console.log(this.props.todo);
    return (  
        <React.Fragment>
            <div>
                <input type="text" onChange={(e)=>{this.props.hundelChange(e.target)}}/>
                <button onClick={()=>{this.props.addItem(this.props.input)}}>Add</button>
            </div>
            <div>
                {/* {this.props.todo.map(el=><li key={el.id}>{el.inputValue}</li>)} */}
            </div>
        </React.Fragment>
    );
  }
}

const mapStateToProps=(state)=>{
    return{
      input:state.InputReducer.input,
      todo:state.ListReducer.main
    }
  }

const mapDispatchToProps=(dispatch)=>{
return {
  hundelChange: target => dispatch({type:'SET_INPUT',value:target.value}),
  addItem: input => {
    let obj={}
    let inputValue=input
    let id=Math.floor(Math.random()*1000)
    obj={inputValue,id}
    dispatch ({type:'ADD_INPUT',value:obj})
  },
  delItem : (id) => dispatch({type:'DEL_ITEM',key:id})
}
}
 
export default connect(mapStateToProps,mapDispatchToProps) (Input);
