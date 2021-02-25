const initialState = []
const ListReducer = (state=initialState,action)=>{
    if(action.type==='ADD_INPUT'){
      return state=[...state,action.value]
    }
    if(action.type==='DEL_ITEM'){
      return state.filter(el=>el.id!==action.key)
    }
    return state
  }
  export default ListReducer