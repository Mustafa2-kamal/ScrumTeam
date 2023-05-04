import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import { loadCountryDetails } from '../utils/Api_Functions';
import CountryText from '../components/CountryText';
import BackButton from '../components/BackButton';
import { Borders } from '../components/BordersList';

const ParentDiv = styled.div`
height: 100%;
margin-left: 4.5rem;
margin-right: 4.5rem;
margin-bottom: 15px;
margin-top: 50px;
`;

const StyledMainLine = styled.div`
margin-top: 50px;
display: flex;
@media screen and (max-width: 700px) {
    display: block;
}
overflow: hidden;
`;

const StyledImage = styled.img`
width: 500px;
@media screen and (min-width: 1500px) {
    width: 50%;
}

@media screen and (max-width: 700px) {
    width: 100%;
}
margin-right: 4.5rem;
`;


function DetailsPage() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const countryCode = params.get("countryCode");

    const [countryInfo, setCountry] = useState([]);
    const [borders, setBorders] = useState([]);

    async function fetchCountryDetails() {
        setCountry(await loadCountryDetails(countryCode));
    }

    function fetchBorders(borders) {
        if (borders) {
            const promises = [];
            for (let i = 0; i < borders.length; i++) {
                const promise = loadCountryDetails(borders[i])
                promises.push(promise);
            }
            Promise.all(promises)
                .then(response => {
                    return response;
                })
                .then(data => {
                    setBorders(data);
                })
        }
    }

    useEffect(() => {
        fetchCountryDetails();
    }, []);

    useEffect(() => {
        if (countryInfo[0]) {
            fetchBorders(countryInfo[0].borders);
        }
    }, [countryInfo])

    if (countryInfo && countryInfo.length > 0) {
        return (
            <>
                <ParentDiv>
                    <BackButton text={"Back"} />
                    <StyledMainLine>
                        <StyledImage src={countryInfo[0].flags.svg} />
                        <div>
                            <CountryText country={countryInfo[0]} />
                            <Borders borders={borders} />
                        </div>
                    </StyledMainLine>
                </ParentDiv>
            </>
        );
    }
}

export default DetailsPage;