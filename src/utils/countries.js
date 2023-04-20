export function filterCountries(countries, filter, favCodes) {

    return countries.filter((country => {
        switch (filter) {
            case '':
                return true;
            case 'Favourites':
                return favCodes.includes(country.cca2);
            case 'No Filter':
                return countries;
            default:
                return country.region === filter;
        }
    }));
}
