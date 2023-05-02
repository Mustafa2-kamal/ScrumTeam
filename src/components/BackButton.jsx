import React from 'react'
import styled from 'styled-components';
import { BsArrowLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';

const StyledBackButton = styled.button`
background-color: #ffffff;
color: #111517;
font-family: 'Nunito Sans', sans-serif;
font-weight: 300;
font-size: 1rem;
border:none;
border-radius: 5px;
padding:5px 25px;
cursor:pointer;
box-shadow: 1px 1px 7px 1px #ccc;
display: inline-flex;
justify-content: center;
align-items: center;
`;

const StyledIcon = styled(BsArrowLeft)`
padding-right: 10px;
font-size: 20px;

`;


export default function BackButton({text}) {


    return (
        <div>
            <Link to="/">
                <StyledBackButton >
                    <StyledIcon />
                    {text}
                </StyledBackButton>
            </Link>
        </div>
    );

}