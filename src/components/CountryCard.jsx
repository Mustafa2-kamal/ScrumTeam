import * as React from 'react';
import styled from 'styled-components';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { useDrag } from 'react-dnd';
import { addFav, removeFav } from "../utils/favorites";
import { Link } from 'react-router-dom';

//styling card main
const CardContainer = styled.div`
    border-radius: 4px;
    background-color: white;
    box-shadow: 1px 1px 10px 1px #eee;
    padding-bottom: 1rem;
`;

//styling text of card
const CardBody = styled.div`
    display: block;
    line-height: 1.5;
    margin-inline: 20px;
    margin-block: 15px;
`;

//styling the image of the card
const CardImage = styled.img`
   border-top-left-radius: 4px;
   border-top-right-radius: 4px;
   width: 250px;
   object-fit: cover;
`;

//styling the title of the card
const CardTitle = styled.h3`
   margin: 0;
   font-family: 'Nunito Sans', sans-serif;
   font-size: 16px;
`;

//styling other card details
const CardDetails = styled.div`
   font-size: 14px;
   font-family: 'Nunito Sans', sans-serif;
   margin-top: 10px;
`;

const CardTail = styled.div`
display: flex;
justify-content: end;
margin-right: 1rem;
`;

const StyledIconButton = styled.button`
background-color: white;
border: none;
font-size: 16px;
color: #ffc400;
display: none;
@media screen and (max-width: 889px) {
   display: block;
}
`;

const StyledLink = styled(Link)`
color: inherit;
text-decoration: none;
`;
//font-weight styling
const DetailBold = styled.b`
   font-family: 'Nunito Sans', sans-serif;
   font-weight: 600;
`;

export default function CountryCard(props) {
   let starFillFlag = props.favCodes.some((favCountry) => favCountry === props.country.cca2);

   const [{ isDragging }, drag] = useDrag({
      type: 'countryCard',
      item: { id: props.country.cca2 },
      collect: (monitor) => ({
         isDragging: monitor.isDragging(),
      }),
   });

   const handleClick = (event) => {
      starFillFlag
         ? props.setFavCountries(removeFav(props.favCodes, props.country.cca2))
         : props.setFavCountries(addFav(props.favCodes, props.country.cca2));
   };
   return (
      <StyledLink to={`/details?countryCode=${props.country.cca2}`}>
         <CardContainer ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }} height={props.cardHeight} width={props.cardWidth} >
            <CardImage alt={props.country.name.common} src={props.country.flags.svg} height={props.imgHeight} />
            <CardBody>
               <CardTitle>{props.country.name.common}</CardTitle>
               <CardDetails>
                  <span>
                     <DetailBold>Population: </DetailBold> {props.country.population.toLocaleString()}<br />
                  </span>
                  <span>
                     <DetailBold>Region: </DetailBold>{props.country.region}<br />
                  </span>
                  <span>
                     <DetailBold>Capital: </DetailBold>{props.country.capital}
                  </span>
               </CardDetails>
            </CardBody>
            <CardTail>
               <StyledIconButton onClick={handleClick}>
                  {starFillFlag ? <FaStar /> : <FaRegStar />}
               </StyledIconButton>

            </CardTail>
         </CardContainer>
      </StyledLink>
   );

}