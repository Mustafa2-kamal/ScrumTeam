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
width: 20vw;
padding: 20px;
box-shadow: rgba(0, 0, 0, 0.1) 3px 2px 8px 3px;
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

    const handleDragOver = (event)=>{
        event.stopPropagation();
        event.preventDefault();
    }

    const handleDrop = (event)=>{
        event.preventDefault();
        sendDroppedToMain(event.dataTransfer.getData('text/plain'))
    }



    return (
        <FavoratesListDiv onDragOver={handleDragOver} onDrop ={handleDrop.bind(this)}>
            <ListTitle> Favourites </ListTitle>
            {favourites.map
                (
                    favCountry =>
                        <span key={favCountry.cca2}>
                            <FavouriteCountry country={favCountry}/>
                        </span>
                )}
        </FavoratesListDiv>
    );
}