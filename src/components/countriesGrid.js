import React from 'react'
import styled from 'styled-components';

const GridContainer = styled.div`

  display: flex;
  flex-wrap: wrap;
  height: 80vh;
  overflow-y: scroll;

  .grid-item {
    padding: 1rem;
  }


  @media screen and (max-width: 768px) {
    .grid-item {
      width: 50% - 1rem;
    }
  }

  @media screen and (max-width: 576px) {
    .grid-item {
      width: 100%;
    }
  }



`;


export default function Countries({countries}) {

    return (

        <GridContainer>
            {
                countries.map(country => (
                        <div key={country.cca3} className={'grid-item'}>

                        </div>


                    )
                )
            }
        </GridContainer>

    );
}