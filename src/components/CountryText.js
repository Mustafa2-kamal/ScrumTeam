import React, {useContext} from 'react';
import styled from 'styled-components';
import {DarkModeContext} from "../App";

const CountryName = styled.h2`
    font-size: 1.8rem;
    font-weight: 800;
    margin-top: 20px;
    margin-bottom: 15px;
`;

const CountryInfo = styled.h2`
    display: flex;
    font-weight: 600;
    font-size: 0.8rem;
    text-align: left;
    margin-left: 0;
    padding: 0;

    @media (max-width: 700px) {
        display: block;
    }
`;

const CountryInfoCol = styled.div`
    
    @media (max-width: 700px) {
        display: block;
        margin-bottom: 2rem;
    }
`;

const CountryInfoColWithMargin = styled.div`
    margin-right: 8rem;

    @media (max-width: 700px) {
        display: block;
        margin-bottom: 2rem;
        margin-right: 0;
    }
`;

const CountryDetailsCol1 = styled.div`
    padding-bottom: 0.3rem;
`;

const CountryDetailsCol2 = styled.span`
    font-weight: 300;
`;

function CountryText({ country }) {
    let { name, population, region, subregion, capital, tld, currencies, languages } = country;

    const splitBetweenElements = (elements) => {
        return elements.toString().split(",").join(", ");
    }

    const getDataValues = (key) => {
        let dataValues = [];
        dataValues = Object.values(key)
        dataValues = splitBetweenElements(dataValues);
        return dataValues;
    }

    const getCurrencies = (key) => {
        let countryCurrencies = [];
        Object.keys(key).forEach(currency => {
            countryCurrencies.push(key[currency].name);
        })
        countryCurrencies = splitBetweenElements(countryCurrencies);
        return countryCurrencies;
    }


    return (
        <>
            <CountryName>{name.common}</CountryName>

            <CountryInfo>
                <CountryInfoColWithMargin>
                    <CountryDetailsCol1>
                        Native Name: <CountryDetailsCol2>{name.nativeName[Object.keys(name.nativeName)[0]].official}</CountryDetailsCol2>
                    </CountryDetailsCol1>
                    <CountryDetailsCol1>
                        Population: <CountryDetailsCol2> {population.toLocaleString()}</CountryDetailsCol2>
                    </CountryDetailsCol1>
                    <CountryDetailsCol1>
                        Region: <CountryDetailsCol2>{region}</CountryDetailsCol2>
                    </CountryDetailsCol1>
                    <CountryDetailsCol1>
                        Sub Region: <CountryDetailsCol2>{subregion}</CountryDetailsCol2>
                    </CountryDetailsCol1>
                    <CountryDetailsCol1>
                        Capital: <CountryDetailsCol2>{capital}</CountryDetailsCol2>
                    </CountryDetailsCol1>
                </CountryInfoColWithMargin>

                <CountryInfoCol>
                    <CountryDetailsCol1>
                        Top Level Domain: <CountryDetailsCol2>{getDataValues(tld)}</CountryDetailsCol2>
                    </CountryDetailsCol1>
                    <CountryDetailsCol1>
                        Currencies: <CountryDetailsCol2>{getCurrencies(currencies)}</CountryDetailsCol2>
                    </CountryDetailsCol1>
                    <CountryDetailsCol1>
                        Languages: <CountryDetailsCol2>{getDataValues(languages)}</CountryDetailsCol2>
                    </CountryDetailsCol1>
                </CountryInfoCol>
            </CountryInfo>
        </>
    );
}

export default CountryText;