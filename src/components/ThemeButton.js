import React, {useContext} from "react";
import { FaRegMoon } from "react-icons/fa";
import styled from "styled-components";
import {DarkModeContext} from "../App";

const StyledThemeButton = styled.button`
  box-shadow: none;
  border: 0px;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 800;
  font-size: 1rem;
  align-items: center;
`;

const StyledIcon = styled(FaRegMoon)`
padding-right: 5px;
font-size: 18px;
`;
export default function ThemeButton({handleChangeMode}) {
  const HandleChangeMode = () => {handleChangeMode()}
    const { darkMode  } = useContext(DarkModeContext);
  return (
    <StyledThemeButton className={darkMode?'dark':'light'} onClick={HandleChangeMode}>
      <StyledIcon />
      Dark Mode
    </StyledThemeButton>
  );
}