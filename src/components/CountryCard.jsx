import * as React from 'react';
import styled from 'styled-components';

//styling card main
const CardContainer = styled.div`
    border-radius: 4px;
    background-color: white;
    box-shadow: 0 2px 20px rgba(1,1,1,0.04); 
    width:250px;
    height:320px;
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
   width: 100%;
   min-width: 100px;
   min-height: 100px;
   object-fit: cover;
`;

//styling the title of the card
const CardTitle = styled.h3`
   margin: 0;
   font-size: 20px;
`;

//styling other card details
const CardDetails = styled.div`
   font-size: 16px;
   margin-top: 10px;
`;

//font-weight styling
const DetailBold = styled.b`
   font-weight: 600;
`;

export default function CountryCard(props) {
   


     return (
        
          <CardContainer height={props.cardHeight} width={props.cardWidth}>
            <CardImage alt={props.countryName} src={props.imgSrc} height={props.imgHeight}/>
            <CardBody>

            <CardTitle>{props.countryName}</CardTitle>
            <CardDetails>
            <span>
               <DetailBold>Population: </DetailBold> {props.population.toLocaleString()}<br/>  
            </span>
            <span>
               <DetailBold>Region: </DetailBold>{props.region}<br/>  
            </span>
            <span>
               <DetailBold>Capital: </DetailBold>{props.capital}
            </span>
            </CardDetails>
            </CardBody>
          </CardContainer>
        

     );

}
