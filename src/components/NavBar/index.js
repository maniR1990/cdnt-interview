import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = styled.div`
height: 60px;
  width: 100%;
  background-color: #040303;
  position: relative;
`;
const NavHeader = styled.div`
display: inline;
`;

const NavTitle = styled.div`
display: inline-block;
  font-size: 22px;
  color: #fff;
  padding: 10px 10px 10px 10px;
`;
const NavBar = () => (
  <Nav>
    <NavHeader>
      <NavTitle><Link style={{ textDecoration: "none", color:"white" }} to="/">NEWS</Link></NavTitle>
    </NavHeader>
  </Nav>
);

export default NavBar;
