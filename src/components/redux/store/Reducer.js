const initialState = {
    history:[]
};

const Reducer = (state = initialState,action) => {
    const newState = {...state}
    if(action.type==='SET_INPUT'){
        return action.value
    }
    if(action.type==='ADD_INPUT'){
        return action.value
    }
    if(action.type === 'DEL_ITEM'){
        return{
            history : state.history.filter(li => li.id !== action.key)
        }
    }
    return newState
}

export default Reducer