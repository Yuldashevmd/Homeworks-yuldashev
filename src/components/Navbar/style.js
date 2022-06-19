import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div `
width: 100%;
height: 80px;
background: rgba(11,11,11,0.7);
`;
Container.Ul = styled.ul `
 width: 80%;
 height: 100%;
 margin: auto;
 display: flex;
 align-items: center;
 justify-content: space-around;
 color: #fff;
 `;

export const List = styled(NavLink)
`
cursor: pointer;
color:#fff;
letter-spacing:2px;
border:1px solid grey;
padding: 10px 20px;
border-radius:4px;
transition:all 0.2s ease;
:hover{
  background:crimson;
}
`