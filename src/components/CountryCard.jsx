import * as React from 'react';
import styled from 'styled-components';
import {useDrag} from 'react-dnd';


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

//font-weight styling
const DetailBold = styled.b`
   font-family: 'Nunito Sans', sans-serif;
   font-weight: 600;
`;

export default function CountryCard(props) {
   const [{isDragging}, drag] = useDrag({
      type: 'countryCard',
      item: {id: props.code},
      collect: (monitor) => ({
         isDragging: monitor.isDragging(),
      }),
   });
   return (
      <CardContainer ref={drag} style={{opacity: isDragging ? 0.5 : 1}} height={props.cardHeight} width={props.cardWidth}>
         <CardImage alt={props.countryName} src={props.imgSrc} height={props.imgHeight} />
         <CardBody>

            <CardTitle>{props.countryName}</CardTitle>
            <CardDetails>
               <span>
                  <DetailBold>Population: </DetailBold> {props.population.toLocaleString()}<br />
               </span>
               <span>
                  <DetailBold>Region: </DetailBold>{props.region}<br />
               </span>
               <span>
                  <DetailBold>Capital: </DetailBold>{props.capital}
               </span>
            </CardDetails>
         </CardBody>
      </CardContainer>
   );

}