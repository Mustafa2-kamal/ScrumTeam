import React from 'react'
import styled from 'styled-components';
import CountryCard from './CountryCard';

const GridContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  margin-left: 5rem;
  .grid-item {
    padding: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    .grid-item {
      width: 50% - 1.5rem;
    }
  }

  @media screen and (max-width: 576px) {
    .grid-item {
      width: 100%;
    }
  }
`;

export default function Countries({ countries, favCodes, setFavCountries }) {
  if (countries.length === 0) {
    return (
        <GridContainer>
          <h5 className={'grid-item'}>Result Not Found</h5>
        </GridContainer>
    );
  }
  else return (
    <GridContainer>
      {
        countries.map(country => (
          <div key={country.cca3} className={'grid-item'}>
            <CountryCard cardHeight={'80vh'}
              cardWidth={'100%'}
              country={country}
              imgHeight={'144px'}
              favCodes={favCodes}
              setFavCountries={setFavCountries}
              />
          </div>
        )
        )
      }
    </GridContainer>

  );
}