import React from 'react'
import styled from 'styled-components';

const StyledDropDown = styled.select`
    width: 100%;
    @media screen and (max-width: 889px) {
        width: 200px
    }
    padding: 15px;
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


export default function DropMenu({ options, filterValue, setFilterValue }) {

    const handleFilterSelect = e => {
        setFilterValue(e.target.value);
    };


    return (
        <div>
            <StyledDropDown onChange={handleFilterSelect} value={filterValue}>
                {
                    options.map((option) => {
                        return <option key={option} value={option}>{option}</option>
                    })
                }
            </StyledDropDown>
        </div>
    );
}
