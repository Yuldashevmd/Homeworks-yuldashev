import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  min-height: 80vh;
  background: lemonchiffon;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;
Container.Block = styled.div `
  width: 180px;
  height: 250px;
  border: 1px solid coral;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  box-shadow: 0 0 5px grey;
  padding: 10px;
  background: whitesmoke;
  h1 {
    font-size: 18px;
    font-weight: bold;
  }
  h3 {
    font-size: 26px;
    font-weight: bold;
  }
  button {
    width: 80%;
    margin: 0 auto;
    background: blueviolet;
    color: #fff;
    padding: 5px 0;
    transition: all 0.2s backwards;
    :hover {
      background: grey;
    }
  }
`;