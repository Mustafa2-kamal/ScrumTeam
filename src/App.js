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