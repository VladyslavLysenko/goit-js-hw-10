import './css/styles.css';
import Notiflix from 'notiflix';
import {fetchCountries} from "./fetchCountries";
let debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
export const inputCountry = document.querySelector("#search-box")
export const list = document.querySelector(".country-list")
export const countryInfo = document.querySelector(".country-info")

export function fullMarkUp(arr) {
    // console.log(arr);
    return arr.map(item => 
        ` <div class="main-title"><img src="${item.flags.svg}" alt="flag's ${item.name}" width="35px" height="30px"><h2 class="country">${item.name.common}</h2></div>
        <ul class="country-list-full">
        <li class="country-item-full"><h3 class="capital h-font">Capital:</h3> <p class="country-item-data">${item.capital}</p></li>
        <li class="country-item-full"><h3 class="population h-font">Population:</h3> <p class="country-item-data">${item.population}</p></li>
        <li class="country-item-full"><h3 class="Languages h-font">Languages:</h3> <p class="country-item-data">${Object.values(item.languages)}</p></li>
        </ul>`
       
    ).join("")
}

export function shortMarkUp(arr) {
       console.log(arr);
    return arr.map(item => 
        `<li class="item-country">
        <img src="${item.flags.svg}" alt="flag's ${item.name.common}" width="35px" height="25px">
        <p class="country-font">${item.name.common}</p>
        </li>`
    ).join("")
}


export function manageRenderMarkUp(data) {
    if (data.length === 1) {
        list.innerHTML = "";
        countryInfo.innerHTML = fullMarkUp(data);

    } else if (data.length >= 2 && data.length <= 10 ) {
        list.innerHTML = shortMarkUp(data);
        countryInfo.innerHTML = "";

    } else if (data.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        list.innerHTML = "";
        countryInfo.innerHTML = "";
    }   
}


inputCountry.addEventListener("input", debounce(fetchCountries, DEBOUNCE_DELAY, {
  'leading': false,
  'trailing': true,
}));






