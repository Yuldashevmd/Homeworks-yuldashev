import styled from "styled-components";

export const Wrapper = styled.div `
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

Wrapper.Block = styled.div `
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 0 0 5px -2px grey;
  text-align: center;
  background: whitesmoke;
  h1 {
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
  }
  h2,
  p {
    font-size: 16px;
    font-weight: 700;
  }
  span {
    font-weight: 500;
    margin-left: 1rem;
  }
`;