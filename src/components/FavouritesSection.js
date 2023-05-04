import React, {useContext} from 'react';
import styled from "styled-components";
import { useDrop } from "react-dnd";
import FavouriteCountry from './FavouriteCountry';
import { addFav, removeFav } from "../utils/favorites";
import {DarkModeContext} from "../App";

const FavoratesListDiv = styled.div`
display: block;
@media screen and (max-width: 889px) {
    display: none
}
height: 100%;
width: 100%;
margin-top: 1.5rem;
margin-left: 0.3rem;
padding: 20px;
border-radius: 6px;
border: 0px solid;
`;

const ListTitle = styled.h1`
font-family: 'Nunito Sans', sans-serif;
font-size: 1.5rem;
font-weight: 800;
`;

export default function FavouritesSection({ countries, favCodes, setFavCountries }) {
    function onDrop(countryCode) {
        setFavCountries(addFav(favCodes, countryCode));
    }
    const [{ isOver }, drop] = useDrop({
        accept: 'countryCard',
        drop: (item) => onDrop(item.id),
        collect: (monitor) => ({
            isOver: monitor.isOver(),

        }),
    });
    const { darkMode} = useContext(DarkModeContext);


    const borderStyle = isOver ? '2px #27ae60 dashed' : 'none';
    return (
        <span>
            <FavoratesListDiv className={darkMode?'dark':'light'} ref={drop} style={{ border: borderStyle }}>
                <ListTitle> Favourites </ListTitle>
                {favCodes.map
                    (
                        favCountry =>
                            <span key={favCountry}>
                                <FavouriteCountry
                                    countries={countries}
                                    countryCode={favCountry}
                                    removeFavCountry={
                                        (countryCode) => {
                                            setFavCountries(removeFav(favCodes, countryCode));
                                        }
                                    }
                                />
                            </span>
                    )}
            </FavoratesListDiv>
        </span>
    );
}