import React from 'react';
import styled from "styled-components";
import FavouriteCountry from './FavouriteCountry';

const FavoratesListDiv = styled.div`
background-color: #ffffff;
display: block;
@media screen and (max-width: 889px) {
    display: none
}
height: 100%;
width: 100%;
margin-top: 1.5rem;
margin-left: 0.3rem;
padding: 20px;
box-shadow: 1px 1px 10px 1px #eee;
border-radius: 6px;
border: 0px solid;
`;

const ListTitle = styled.h1`
font-family: 'Nunito Sans', sans-serif;
font-size: 1.5rem;
font-weight: 800;
color: #111517;
`;

export default function FavouritesSection({ favourites }) {
    return (
        <span>
            <FavoratesListDiv>
            <ListTitle> Favourites </ListTitle>
            {favourites.map
                (
                    favCountry =>
                        <span key={favCountry.cca2}>
                            <FavouriteCountry country={favCountry}/>
                        </span>
                )}
        </FavoratesListDiv>
        </span>
    );
}