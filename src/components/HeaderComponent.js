import React from "react";
import ThemeButton from "./ThemeButton";
import styled from "styled-components";

const Header = styled.div`
margin-top: 0;
background-color: #ffffff;
height: 32px;
padding-top: 16px;
padding-bottom: 16px;
padding-left: 4rem;
padding-right: 4rem;
box-shadow: rgba(0, 0, 0, 0.1) 3px 2px 8px -1px;
display: flex;
justify-content: space-between;
`;

const HeaderText = styled.h1`
margin:0px;
color: #111517;
font-size: 1.5rem;
font-weight:800;
`;

export default function HeaderComponent() {
  return (
   <Header>
      <HeaderText>Where in the world?</HeaderText>
      <ThemeButton/>
   </Header>
  );
}