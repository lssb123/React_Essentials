import React,{useEffect, useState} from 'react'
import "./style.css"

// Hooks are used to manage a state.
// useEffects runs after every render (ex: notification number in whatsapp). if any state changes then it will rerun again.

const UseEffect = () => {

    // const [currdata,updateddata] = useState(initialdata) syntax of useState
    const num = 0;
    const [myNum,setmyNum] = useState(num);

    useEffect(()=> {
        document.title = `Chats(${myNum})`;
    });

    // useEffect(()=> {
    //     console.log("Hii")
    // },[]);  //array dependencies: only changes once.
    
  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div className='button2' onClick={()=> setmyNum(myNum+1)}>
            <span></span>
            <span></span>
            <span></span>
            <spa0n></spa0n>
            Increment
        </div>
      </div>
    </>
  )
}

export default UseEffect
