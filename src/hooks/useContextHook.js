import { useEffect, useState } from 'react';

function useContextHook(value) {
    const [themeValue, setThemeValue] = useState('light');

    useEffect(() => {
        setThemeValue(value);
    }, value);

    return themeValue;
}

export default useContextHook;