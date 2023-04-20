import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import './App.css';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from 'react-dnd-html5-backend';
import HomePage from './pages/home';
import DetailsPage from './pages/details';

function App() {
  return (
    <React.StrictMode>
      <DndProvider backend={HTML5Backend}>
      <BrowserRouter basename='/ScrumTeam'>
        <React.Fragment>
          <HeaderComponent />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/details/:countryCode" element={<DetailsPage />} />
          </Routes>
        </React.Fragment>

      </BrowserRouter>
      </DndProvider>
    </React.StrictMode>
  );
}
 
export default App;
