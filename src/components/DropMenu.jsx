import React from 'react'
import styled from 'styled-components';

const StyledDropDown = styled.select`
    width: 50%;
    padding: 20px ;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    box-shadow: 1px 1px 10px 1px #eee;
    font-weight: 300;

    option {
        color: black;
        background: white;
      }
`;


export default function DropMenu({filterValue,setFilterValue}) {
   
    const handleFilterSelect = e => {
        setFilterValue(e.value);
    };

    return (
        <div>
            <StyledDropDown onChange={handleFilterSelect} value={filterValue}>
                <option value="">Filter by</option>
                <option value="">No Filter</option>
                <option value="Favourites">Favourites</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </StyledDropDown>
        </div>
    );
}
