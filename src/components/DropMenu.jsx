import React, {useContext} from 'react'
import styled from 'styled-components';
import {DarkModeContext} from "../App";

const StyledDropDown = styled.select`
    width: 100%;
    @media screen and (max-width: 889px) {
        width: 200px
    }
    padding: 15px;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 300;
    
`;

export default function DropMenu({ options, filterValue, setFilterValue }) {
    const handleFilterSelect = e => {
        setFilterValue(e.target.value);
    };
    const { darkMode} = useContext(DarkModeContext);


    return (
        <div>
            <StyledDropDown  className={darkMode?'dark':'light'} onChange={handleFilterSelect} value={filterValue}>
                {
                    options.map((option) => {
                        return <option key={option} value={option}>{option}</option>
                    })
                }
            </StyledDropDown>
        </div>
    );
}
