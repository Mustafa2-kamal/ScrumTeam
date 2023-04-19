<<<<<<< HEAD
import './App.css';
import CountryCard from './components/CountryCard';
import BR from './svgs/br.svg';
import US from './svgs/us.svg'

function App() {
  return (
    <div className="App">
    <CountryCard imgSrc={BR} countryName="Brazil" imgHeight={'150px'} cardHeight={'120px'} population={1000000} region={'Americas'} capital={'Brasilia'}></CountryCard>
    </div>
  );
}

export default App;
=======
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import './App.css';

import HomePage from './pages/home';
import DetailsPage from './pages/details';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter basename='/ScrumTeam'>
        <React.Fragment>
          <HeaderComponent />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/details/:countryCode" element={<DetailsPage />} />
          </Routes>
        </React.Fragment>

      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
>>>>>>> f7636f6549dce7e888b5944ef912fe7de9fd247a
