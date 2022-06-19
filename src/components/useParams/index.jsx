import React from "react";
import { Container } from "./style";
import {data} from "./mock-data";
import {useNavigate}from 'react-router-dom';



const Params = () => {
 
  const navigate =useNavigate();
  return (
    <Container>
      {data.map((item) => {
        return (
          <Container.Block key={item.id}>
            <h1>{item.id}</h1>
            <h3>{item.language}</h3>
            <button onClick={()=>navigate(`/params:${item.id}`)}>See more...</button>
          </Container.Block>
        );
      })}
    </Container>
  );
};

export default Params;
