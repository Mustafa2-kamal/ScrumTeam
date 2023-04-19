import * as React from 'react';
import styled from "styled-components";
import { FaRegTimesCircle } from "react-icons/fa";

const HorizontialCard = styled.div`
flex-direction: row;
padding-top: 10px;
width: 100%;
display: flex;
justify-content: space-between;
`;

const CardBody = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

const CardImage = styled.img`
width: 5vw;
height: 25px;
border-radius: 7px;
object-fit: cover;
margin-right: 5px;
`;

const CardTitle = styled.h5`
display: inline;
font-weight: bold;
color: #111517;
`;

const IconButton = styled(FaRegTimesCircle)`
    color: #b0b0b0;
    height: 20px;
`;
export default function FavouriteCountry({ country }) {

    const handleClick = (event) => {};
    return (
        <HorizontialCard>
            <CardBody>
                <CardImage src={country.flags.svg} />
                <CardTitle>{country.name.common}</CardTitle>
            </CardBody>
            <IconButton onClick={handleClick} />
        </HorizontialCard>
    );
}