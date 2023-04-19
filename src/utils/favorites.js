export function removeFav(favoritesCode, countryCode) {
    let favArray = [...favoritesCode];
    favArray.splice(favArray.indexOf(countryCode), 1);
    return favArray;
}

export function addFav(favoritesCode, countryCode) {
    let favArray = [...favoritesCode];
    let alreadyFav = favArray.find((fav) => fav === countryCode);
    if (!alreadyFav) {
        favArray.push(countryCode);
    }
    return favArray;
}