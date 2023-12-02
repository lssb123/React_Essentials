import React,{useReducer, useState} from 'react'
import "./style.css"

// Hooks are used to manage a state.
const reducer = (state,action) => {
    if(action.type === "Increment") {
        state = state+1;
    }
    if(action.type === "Decrement") {
        state = state-1;
        if (state<0){
            state=0;
        }
    }
    return state;
}

const UseReducer = () => {

    // const [currdata,updateddata] = useState(initialdata) syntax of useState
    // const num = 0;
    // const [myNum,setmyNum] = useState(num);
    //useReducer is same as useState when we are working with largge projects we need to use useReducer hook

    // const [state, dispatch] = useReducer(reducer,initialdata);
    const num = 10;
    const [state,dispatch] = useReducer(reducer,num)

    // state - current value
    // dispatch - it is used to trigger the reducer function
    // useReducer() - it will change the value of the current data
    
  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div className='button2' onClick={() => dispatch({type:"Increment"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Increment
        </div>
        <div className='button2' onClick={() => dispatch({type:"Decrement"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Decrement 
        </div>
      </div>
    </>
  )
}

export default UseReducer
