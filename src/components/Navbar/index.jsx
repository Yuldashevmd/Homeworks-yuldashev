import React from "react";
import { Container, List } from "./style";

const Navbar = () => {
  return (
    <Container>
      <Container.Ul>
        <List to="/">Home</List>
        <List to="/state">State</List>
        <List to="/table">Table</List>
        <List to="/params">useParams</List>
        <List to="/restapi">Rest_Api</List>
        <List to="/tailwind">Tailwind</List>
      </Container.Ul>
    </Container>
  );
};

export default Navbar;
