const initialState = {
    age:10,
    history:[]
};

const Reducer = (state = initialState,action) => {
    const newState = {...state}
    if(action.type === 'AGE_UP'){
        return{
            age : newState.age + action.value,
            history : state.history.concat({id:Math.random(), age : newState.age + action.value})
        }
    }
    if(action.type === 'AGE_DOWN'){
        return{
            age : newState.age - action.value,
            history : state.history.concat({id:Math.random(), age : newState.age - action.value})
        }
    }
    if(action.type === 'DEL_ITEM'){
        return{
            history : state.history.filter(li => li.id !== action.key)
        }
    }
    return newState
}

export default Reducer