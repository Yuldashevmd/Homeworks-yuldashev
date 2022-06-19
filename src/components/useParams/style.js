import styled from 'styled-components';

export const Container = styled.div `
  width: 100%;
  min-height: 100vh;
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
text-align:center;
box-shadow: 0 0 5px  grey;
padding: 10px;
button{
  margin: 0 auto;
  transition:all 0.2s linear;
  :hover{
    background: grey;
  }
}
`