import * as React from 'react';
import styled from "styled-components";

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

const CancelButton = styled("button")`
  background-color: "white";
  color: "black";
  width: 19px;
  height: 19px;
  border: none;
  text-align: center;
  display: inline-block;
  font-size: 12px;
  margin: 4px 2px;
  border-radius: 50%;
  cursor: pointer;
  font-weight: 800;
`;
export default function FavouriteCountry({ countries, countryCode, removeFavCountry }) {

    const favCountry = countries.find(country => country.cca2 === countryCode);
    const handleRemoveFavorite = (event) => {
        removeFavCountry(countryCode);
    };
    if (favCountry) {
        return (
            <HorizontialCard>
                <CardBody>
                    <CardImage src={favCountry.flags.svg} />
                    <CardTitle>{favCountry.name.common}</CardTitle>
                </CardBody>
                <CancelButton onClick={() => handleRemoveFavorite()}>x</CancelButton>
            </HorizontialCard>
        );
    }
    else return (
        <div></div>
    )

}