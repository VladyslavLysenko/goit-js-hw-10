import './css/styles.css';
import Notiflix from 'notiflix';

let debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
const inputCountry = document.querySelector("#search-box")
const list = document.querySelector(".country-list")
const countryInfo = document.querySelector(".country-info")

inputCountry.addEventListener("input", debounce(fetchCountries, DEBOUNCE_DELAY, {
  'leading': true,
  'trailing': false,
}));

function fullMarkUp(arr) {
    return arr.map(item => 
        `<li>
        <img src="${item.flags.svg}" alt="flag's ${item.name}" width="50px">
        <h2 class="Country">${item.name}</h2>
        <span class="Capital">Capital: ${item.capital}</span>
        <span class="Population">Population: ${item.population}</span>
        <span class="Languages">Languages: ${(item.languages[0].nativeName)}</span>
        </li>`
    ).join("")
}

function shortMarkUp(arr) {
    return arr.map(item => 
        `<li>
        <img src="${item.flags.svg}" alt="flag's ${item.name}" width="50px">
        <h2 class="Country">${item.name}</h2>
        </li>`
    ).join("")
}





function fetchCountries(e) {
    console.log("hello");
    let name = inputCountry.value.toLowerCase().trim();
    // console.log(inputCountry.value);
    if (!name) {
        countryInfo.innerHTML = "";
        // console.log("Its work!");
    }
    else {
        
        // .trim() ????
        const resp = fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`)
        resp.then(response =>{
            if (!response.ok) {
                countryInfo.innerHTML = "";  
                Notiflix.Notify.failure("Oops, there is no country with that name")
            }
            // console.log(response);
            
            return response.json()   
        }) 
        .then(data => {
         
            // console.log(markUp);
            console.log(data.length);

            if  (data.length < 2) {
                
                countryInfo.innerHTML = fullMarkUp(data);
                // console.log(data);
            } else if (data.length < 10) {
                
                countryInfo.innerHTML = shortMarkUp(data);
                //  console.log(data);
            } else if (data.length > 10) {
                Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
            } 

        }).catch(err => console.log(err))
    }
        // console.log(countryName);
        
}


// Выполни санитизацию введенной строки методом trim(), это решит проблему когда в поле ввода только пробелы или они есть в начале и в конце строки.