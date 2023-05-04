import React, {useContext} from 'react'
import styled from 'styled-components';
import { BsArrowLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';
import {DarkModeContext} from "../App";

const StyledBackButton = styled.button`
font-family: 'Nunito Sans', sans-serif;
font-weight: 300;
font-size: 1rem;
border:none;
border-radius: 5px;
padding:5px 25px;
cursor:pointer;
display: inline-flex;
justify-content: center;
align-items: center;
`;

const StyledIcon = styled(BsArrowLeft)`
padding-right: 10px;
font-size: 20px;
`;

export default function BackButton({ text }) {
    const { darkMode} = useContext(DarkModeContext);
    return (
        <div>
            <Link to="/">
                <StyledBackButton className={darkMode?'dark':'light'} >
                    <StyledIcon />
                    {text}
                </StyledBackButton>
            </Link>
        </div>
    );

}