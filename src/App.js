import React, {createContext, useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import './App.css';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from 'react-dnd-html5-backend';
import HomePage from './pages/home';
import DetailsPage from './pages/details';
import {getFromLocalStorage, setInLocalStorage} from "./utils/localStorage";
import {THEME} from "./utils/constants";

export const DarkModeContext = createContext(false);

function App() {
    const [darkMode, setDarkMode] = useState(getFromLocalStorage(THEME) || false);
    useEffect(() => {
        setInLocalStorage(THEME, darkMode);
    }, [darkMode]);
    function toggleTheme() {
        setDarkMode(!darkMode);
    }
    return (
        <DarkModeContext.Provider value={{darkMode,toggleTheme}}>
            <div style={{backgroundColor: darkMode ? '#202c37' : '#fafafa', color : darkMode ? 'white' : '#111517'}} >
            <React.StrictMode>
                <DndProvider backend={HTML5Backend}>
                    <BrowserRouter basename='/ScrumTeam'>
                        <React.Fragment>
                            <HeaderComponent/>
                            <Routes>
                                <Route exact path="/" element={<HomePage/>}/>
                                <Route path="/details" element={<DetailsPage/>}/>
                            </Routes>
                        </React.Fragment>

                    </BrowserRouter>
                </DndProvider>
            </React.StrictMode>
            </div>
        </DarkModeContext.Provider>
    );
}

export default App;
