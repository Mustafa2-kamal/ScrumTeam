import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import InputField from '../components/InputField';
import DropMenu from '../components/DropMenu';
import Countries from '../components/countriesGrid';
import FavouritesSection from '../components/FavouritesSection';
import { loadCountries } from '../utils/Api_Functions';
import { filterCountries } from '../utils/countries';
import useDebounce from '../hooks/useDebounceHook';
import { getFromLocalStorage, setInLocalStorage } from "../utils/localStorage";
import { FAV_KEY } from "../utils/constants";

const ParentDiv = styled.div`
height: 100%;
margin-left: 4.5rem;
margin-right: 4.5rem;
margin-bottom: 15px;
`;

const StyledMainLine = styled.div`
display: flex;
@media screen and (max-width: 889px) {
    display: block;
}
justify-content: space-between;
height: 50px;
@media screen and (max-width: 889px){
    height: 150px;
}
margin-top: 50px;
margin-right: 2rem;
`;

const StyledMainBody = styled.div`
    padding-top: 30px;
    @media screen and (max-width: 599px){
        padding-left: 3rem;
        padding-right: 3rem;
    }
    width: 100%;
    height: 100%;
    display: flex;
`;

const GridContainer = styled.span`
display: flex;
overflow: hidden;
width:100%;
.grid-item-9 {
    padding: 1.5rem;
    width: 80%;
}

@media screen and (max-width: 768px) {
    .grid-item-9 {
        width: 80%;
    }
}

@media screen and (max-width: 576px) {
    .grid-item-9 {
        width: 100%;
    }
} 

.grid-item-3 {
    padding: 1.5rem;
    width: 20%;
}

@media screen and (max-width: 768px) {
    .grid-item-3 {
        width: 20%;
    }
}

@media screen and (max-width: 576px) {
    .grid-item-3 {
        display:none;
    }
} 
`;
function HomePage() {
    const regions =
        [
            "No Filter",
            "Africa",
            "Americas",
            "Asia",
            "Europe",
            "Oceania",
            "Favourites"
        ];
    const [countries, setCountries] = useState([]);
    const [selectedRegion, setRegion] = useState("");
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const [searchValue, setSearchValue] = useState(' ');
    const debouncedSearchTerm = useDebounce(searchValue, 250);
    const [favCode, setFavCode] = useState(getFromLocalStorage(FAV_KEY) || []);
    const [allCountries, setAllCountries] = useState([]);

    async function fetchCountries(searchTerm) {
        if(allCountries.length === 0){
            setAllCountries(await loadCountries(searchTerm));
        }
        setCountries(await loadCountries(searchTerm));
    }

    useEffect(() => {
        fetchCountries();
    }, []);

    useEffect(() => {
        setFilteredCountries(filterCountries(countries, selectedRegion, favCode));
    }, [selectedRegion, countries, favCode]);

    useEffect(() => {
        if (debouncedSearchTerm || debouncedSearchTerm === ' ') {
            fetchCountries(searchValue);
        }
    }, [debouncedSearchTerm, searchValue]);

    useEffect(() => {
        setInLocalStorage(FAV_KEY, favCode);
    }, [favCode]);

    return (
        <ParentDiv>
            <StyledMainLine>
                <InputField placeholderText='Search for a country ...'
                    onSearch={
                        (searchTerm) => {
                            setSearchValue(searchTerm);
                        }
                    }
                />
                <DropMenu options={regions} filterValue={selectedRegion} setFilterValue={
                    (selectedFilter) => {
                        setRegion(selectedFilter);
                    }
                } />
            </StyledMainLine>
            <StyledMainBody>
                <GridContainer>
                    <FavouritesSection countries= {allCountries} favCodes={favCode} setFavCountries={setFavCode} className={'grid-item-3'} />
                    <Countries countries={filteredCountries} favCodes={favCode} setFavCountries={setFavCode} className={'grid-item-9'} />
                </GridContainer>
            </StyledMainBody>
        </ParentDiv>
    );
}

export default HomePage;