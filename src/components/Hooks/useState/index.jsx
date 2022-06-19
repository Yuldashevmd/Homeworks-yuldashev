import React from 'react';
import { useState } from 'react';
import { Wrapper } from './style';


 
const State = () => {
  const [add,setAdd]=useState(0);
  const plus=()=>{
   setAdd(add+1)
  }
  const minus=()=>{
    setAdd(add-1)
  }
  return (
    <>
    <Wrapper>
      <h2 style={{display:'inline-block', width:'100%'}}>This is useState method (Hook)</h2>
      <button onClick={minus}>-</button>
      <h2>{add}</h2>
      <button onClick={plus}>+</button>
    </Wrapper>
    </>
  );
}

export default State;
