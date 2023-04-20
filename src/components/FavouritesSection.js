import React from 'react';
import styled from "styled-components";
import {useDrop} from "react-dnd";

import FavouriteCountry from './FavouriteCountry';
import {addFav} from "../utils/favorites";

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

export default function FavouritesSection({ favCodes,favourites ,setFavCountries }) {
    function onDrop(countryCode) {
        setFavCountries(addFav(favCodes, countryCode));
    }
    const [{isOver}, drop] = useDrop({
        accept: 'countryCard',
        drop: (item) => onDrop(item.id),
        collect: (monitor) => ({
            isOver: monitor.isOver(),

        }),
    });

    const borderStyle = isOver ? '2px #27ae60 dashed' : 'none';
    return (
        <span>
            <FavoratesListDiv ref={drop} style={{border: borderStyle}}>
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