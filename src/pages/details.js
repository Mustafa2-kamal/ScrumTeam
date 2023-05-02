import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { loadCountryDetails } from '../utils/Api_Functions';
import CountryText from '../components/CountryText';
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
        console.log(borders);
        return (
            <>

                {/* <BackButton text="Back"/> */}

                <h1>Inside Details Page</h1>
                <CountryText country={countryInfo[0]} />

            </>
        );
    }
}

export default DetailsPage;