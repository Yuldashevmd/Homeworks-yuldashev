import styled from "styled-components";

export const Container = styled.div `
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

Container.Block = styled.div `
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
img{
width: 500px;
height: 400px;
border: 1px solid green;
border-radius: 4px;
background: aqua;
margin-bottom: 2rem;
}
`;