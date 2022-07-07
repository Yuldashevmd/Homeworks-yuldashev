import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../mock-data";
import { useState } from "react";
import { Wrapper } from "./style";

const Card = () => {
  const { id } = useParams();
  const [mockData] = useState(data);

  return (
    <Wrapper>
      {mockData
        .filter((value) => value.id === Number(id.replace(":", " ")))
        .map((item) => (
          <Wrapper.Block key={item.id}>
            <h2>ID: {item.id}</h2>
            <h1>{item.language}</h1>
            <p>
              Description: <span>{item.describ}</span>
            </p>
          </Wrapper.Block>
        ))}
    </Wrapper>
  );
};

export default Card;
