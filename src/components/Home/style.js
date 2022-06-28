import styled from "styled-components";

export const Container = styled.div `
width: 100%;
height: 80vh;
display: flex;
justify-content: space-evenly;
flex-direction: column;
align-items: center;
text-align: center;
`;

export const Table = styled.table `
width: 80%;
height: 50%;
border: 1px solid grey;
text-align: center;
`;
export const Button = styled.button `
width: 100px;
color: ${props=>props.red ? 'red':'#40a1f0'};
border: 1px solid ${props=>props.red ? 'red':'#40a1f0'};
background: transparent;
font-weight: bold;
letter-spacing: 1px;
transition: all 0.3s linear;
:hover{
  background:${props=>props.red ? 'red':'#40a1f0'};
  color: #fff;
}
`;
export const Input = styled.input `
padding: 5px;
border: 1px solid ${props=>props.dis ? 'transparent' : 'grey'};
`