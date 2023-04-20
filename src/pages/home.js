import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import InputField from '../components/InputField';
import DropMenu from '../components/DropMenu';
import Countries from '../components/countriesGrid';
import FavouritesSection from '../components/FavouritesSection';
import { loadCountries } from '../utils/Api_Functions';
import { filterCountries } from '../utils/countries';
import useDebounce from '../hooks/useDebounceHook';

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
    padding-top: 50px;
    @media screen and (max-width: 599px){
        padding-left: 3rem;
        padding-right: 3rem;
    }
    width: 100%;
    display: flex;
`;

const GridContainer = styled.div`
display: flex;
height: 100%;
overflow: hidden;

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

    async function fetchCountries(searchTerm) {
        setCountries(await loadCountries(searchTerm));
    }

    useEffect(() => {
        fetchCountries();
    }, []);

    useEffect(() => {
        setFilteredCountries(filterCountries(countries, selectedRegion, []));
    }, [selectedRegion, countries]);

    useEffect(() => {
    if (debouncedSearchTerm || debouncedSearchTerm === ' ') {
      fetchCountries(searchValue);
    }
  }, [debouncedSearchTerm, searchValue]);

    return (
        <ParentDiv>
            <StyledMainLine>
                <InputField placeholderText='Search for a country ...' searchValue={searchValue}
                    onSearch={
                        async (searchTerm) => {
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
                    <FavouritesSection favourites={[]} className={'grid-item-3'} />
                    <Countries countries={filteredCountries} className={'ggrid-item-9'} />
                </GridContainer>
            </StyledMainBody>
        </ParentDiv>
    );
}

export default HomePage;