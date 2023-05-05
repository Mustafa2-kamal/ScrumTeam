import React, {useContext} from "react";
import ThemeButton from "./ThemeButton";
import styled from "styled-components";
import {DarkModeContext} from "../App";

const Header = styled.div`
margin-top: 0;
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
font-size: 1.5rem;
font-weight:800;
`;

export default function HeaderComponent() {
    const { darkMode ,toggleTheme } = useContext(DarkModeContext);
    console.log(toggleTheme);
  return (
    <Header className={darkMode?'dark':'light'}>
      <HeaderText>Where in the world?</HeaderText>
      <ThemeButton handleChangeMode={toggleTheme}/>
    </Header>
  );
}