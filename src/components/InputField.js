import React from 'react';
import styled from 'styled-components';

const StyledInputField = styled.input`
    width: 100%;
    padding: 18px 20px 18px 55px;
    border: none;
    border-radius: 5px;
    font-size: 12px;
    color: #858585;
    box-shadow: 1px 1px 10px 1px #eee;
    margin: 10px;
    font-weight: 300;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 25px center;
`;

function InputField({ onSearch, placeholderText }) {

    const handleChange = (event) => {
        onSearch(event.target.value)
    }

    return (
        <label>
            <StyledInputField placeholder={placeholderText} type="search" onInput={handleChange}/>
        </label>
    );
}

export default InputField;