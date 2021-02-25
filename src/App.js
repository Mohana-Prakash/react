import React from 'react';
import './App.css';
import Props from './components/Props'
import Message from './components/Message'
import Counter from './components/Counter'
import ParentComponent from './components/parentchild/ParentComponent'
import Form from './components/Form'
import LifecycleA from './components/Lifecycle/LifecycleA'
import ClickCounter from './components/HOC/ClickCounter'
import HoverCounter from './components/HOC/HoverCounter'
import Click from './components/renderProps/Click'
import Hover from './components/renderProps/Hover'
import Count from './components/renderProps/Count'
import {UserProvider} from './components/context/userContext'
import ComponentC from './components/context/ComponentC'
import UserLists from './components/axios/UserLists' 
import {createStore, combineReducers, applyMiddleware} from 'redux'
// import AddAge from './components/redux/UI/AddAge'
import {Provider} from 'react-redux'
// import Reducer from './components/redux/store/Reducer'
import AddAge from './reduxx/UI/AddAge'
import Reducer from './reduxx/store/Reducer'
// import thunk from 'redux-thunk'
// import ReducerA from './components/redux2/store/reducerA' 
// import ReducerB from './components/redux2/store/reducerB'
// import AB_Update from './components/redux2/UI/AB_Update'
// import InputReducer from './components/ReduxTodo/store/InputReducer'
// import ListReducer from './components/ReduxTodo/store/ListReducer'
// import Input from './components/ReduxTodo/UI/Input'

// const rootReducer = combineReducers({
//   InputReducer:InputReducer,
//   ListReducer:ListReducer
// })

const store = createStore(Reducer);


function App() {
  return (
    <div className="App">
      {/* <Props name="Mohan"/> */}
      {/* <Message/> */}
      {/* <Counter/> */} 
      {/* <ParentComponent/> */}
      {/* <Form/> */}
      {/* <LifecycleA/> */}
      {/* <ClickCounter name='Mohan'/> */}
      {/* <HoverCounter name='Prakash'/> */}
      {/* <Click/> */}
      {/* <Hover/> */}
      {/* <Count render={(count,incrementCount)=>(
        <Click count={count} incrementCount={incrementCount}/>
      )}/>
      <Count render={(count,incrementCount)=>(
        <Hover count={count} incrementCount={incrementCount}/>
      )}/> */}
      {/* <UserProvider value='Mohan'>
        <ComponentC/>
      </UserProvider> */}
      {/* <UserLists/> */}
      <Provider store={store}>
        {/* <Input/> */}
        <AddAge/>
        {/* <AB_Update/> */}
      </Provider>
    </div>
  );
}

export default App;
