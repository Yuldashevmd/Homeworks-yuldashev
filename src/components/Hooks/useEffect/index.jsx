import React from 'react';
import { useEffect, useState } from 'react';
import { Wrapper } from './style';

const Effect = () => {
  const [state,setState]= useState("Default");
  
  // useEffect(()=>{
  //   console.log('render effect 1-case');
  // });

  // useEffect(()=>{
  //   console.log('render effect 2-case');
  // },[]);

  // useEffect(()=>{
  //   console.log('render effect 3-case');
  // },[state]);


  const Click=({target})=>{
    setState(target.innerText);
  }
  
  return (
    <div>
      <Wrapper>
      <h2>Developer : {state}</h2>
      <button onClick={Click}>Web</button>
      <button onClick={Click}>Mobile</button>
      <button onClick={Click}>Desktop</button>
      </Wrapper>
    </div>
  );
}

export default Effect;
