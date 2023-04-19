import React from 'react';
import CountryCard from '../components/CountryCard';
import BR from '../svgs/br.svg';

function HomePage() {
    return (
        <>
            <h1>Inside Home Page</h1>
            <CountryCard imgSrc={BR} population={100000}></CountryCard>
        </>
    );
}

export default HomePage;