import * as React from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
    border-radius: 4px;
    background-color: white;
    box-shadow: 1px 1px 1px 1px rgba(1,1,1,0.04); 
    width:250px;
    height:300px;
`;

const CardDetails = styled.div`
    display: block;
    margin-left: 5px;
    line-height: 1.5;
`;

const CardImage = styled.img`
border-top-left-radius: 4px;
border-top-right-radius: 4px;
width: 100%;
min-width: 100px;
min-height: 100px;
object-fit: cover;
`;


export default function CountryCard(props) {
   


     return (
        
          <CardContainer height={props.cardHeight} width={props.cardWidth}>
            <CardImage alt={props.countryName} src={props.imgSrc} height={props.imgHeight}/>
            <h2>{props.countryName}</h2>
            <CardDetails>
            <span>
               <b>Population: </b>{props.population.toLocaleString()}<br/>  
            </span>
            <span>
               <b>Region: </b>{props.region}<br/>  
            </span>
            <span>
               <b>Capital: </b>{props.capital}
            </span>
            </CardDetails>
          </CardContainer>
        

     );

}
