import React,{useState} from 'react'
import "./style.css"

// Hooks are used to manage a state.


const UseState = () => {

    // const [currdata,updateddata] = useState(initialdata) syntax of useState
    const num = 0;
    const [myNum,setmyNum] = useState(num);
    
  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div className='button2' onClick={()=> setmyNum(myNum+1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Increment
        </div>
        <div className='button2' onClick={()=> myNum>0? setmyNum(myNum-1):setmyNum(0)}>
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

export default UseState
