import React from "react";
import { Container } from "../style";
import {useParams}from 'react-router-dom';
import { data } from "../mock-data";

const Card = () => {
  const {id}=useParams();
  
  return (
    <Container>
      {data.filter(value=>{
        return value.id ===id.replace(':','');
      }).map((item) => {
        return (
          <Container.Block key={item.id}>
            <img src="/" alt="" />
            <h1>{item.id}</h1>
            <p>{item.describ}</p>
          </Container.Block>
        );
      })}
    </Container>
  );
};

export default Card;
