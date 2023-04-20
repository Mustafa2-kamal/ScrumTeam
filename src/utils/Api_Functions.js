export async function loadCountries(searchTerm) {
    let url = ((searchTerm === ' ') || (!searchTerm))
        ? `https://restcountries.com/v3.1/all`
        : `https://restcountries.com/v3.1/name/${searchTerm}`;
    return await fetch(url)
        .then(response => {
            switch (response.status) {
                case 404:
                    return [];
                case 200:
                    return response.json();
                default:
                    return null;
            }
        })
        .catch(error => console.log(error))
        .then(data => {
            return data;
        });
}