import React, { useState } from "react";

function Counter(){
 const [count, setCount] = useState(0);

 const increment = ()=>{
    setCount(count+1);
 }

 const decerment = ()=>{
    setCount(count-1);
 }

 const reset = ()=>{
    setCount(0);
 }

  return(
  <div>
    <p className="count-display">Count: {count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decerment}>decerment</button>
    <button onClick={reset}>reset</button>
  </div>);
 
}

export default Counter;