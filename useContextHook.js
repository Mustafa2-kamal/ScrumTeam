import { useEffect, useState, useContext } from 'react';

function useContextHook(value) {
    const [themeValue, setThemeValue] = useState('light');

    useEffect(() => {
        setThemeValue(useContext(value));
    }, value);

    return themeValue;
}

export default useContextHook;