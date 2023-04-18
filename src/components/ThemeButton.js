import React from "react";
import { FaRegMoon } from "react-icons/fa";
import styled from "styled-components";

const StyledThemeButton = styled.button`
border: 0px;
background-color: #ffffff;
color: #111517;
font-family: 'Nunito Sans', sans-serif;
font-weight: 800;
font-size: 1rem;
align-items: center;
`;


const StyledIcon = styled(FaRegMoon)`
padding-right: 5px;
font-size: 18px;
`;
export default function ThemeButton() {
  
const HandleChangeMode = () => {
    
}
  return (
    <StyledThemeButton onClick={HandleChangeMode}>
        <StyledIcon/>
        Dark Mode      
    </StyledThemeButton>
  );
}