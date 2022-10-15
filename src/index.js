import './css/styles.css';
import Notiflix from 'notiflix';

let debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
const inputCountry = document.querySelector("#search-box")
const list = document.querySelector(".country-list")
const countryInfo = document.querySelector(".country-info")

inputCountry.addEventListener("input", debounce(fetchCountries, DEBOUNCE_DELAY, {
  'leading': false,
  'trailing': true,
}));

function fullMarkUp(arr) {
    console.log(arr);
    return arr.map(item => 
        ` <div class="main-title"><img src="${item.flags.svg}" alt="flag's ${item.name}" width="35px" height="30px"><h2 class="country">${item.name}</h2></div>
        <ul class="country-list-full">
        <li class="country-item-full"><h3 class="capital h-font">Capital:</h3> <p class="country-item-data">${item.capital}</p></li>
        <li class="country-item-full"><h3 class="population h-font">Population:</h3> <p class="country-item-data">${item.population}</p></li>
        <li class="country-item-full"><h3 class="Languages h-font">Languages:</h3> <p class="country-item-data">${(item.languages[0].name)}</p></li>
        </ul>`
       
    ).join("")
}

function shortMarkUp(arr) {
    return arr.map(item => 
        `<li class="item-country">
        <img src="${item.flags.svg}" alt="flag's ${item.name}" width="35px" height="25px">
        <p class="country-font">${item.name}</p>
        </li>`
    ).join("")
}





function fetchCountries(e) {
    console.log("hello");
    let name = inputCountry.value.toLowerCase().trim();
    // console.log(inputCountry.value);
    if (!name) {
        list.innerHTML = "";
        countryInfo.innerHTML = "";
        // console.log("Its work!");
    }
    else {
        const resp = fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`)
        resp.then(response =>{
            if (!response.ok) {
                list.innerHTML = "";  
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
                list.innerHTML = "";
                // console.log(data);
            } else if (data.length < 10) {
                
                list.innerHTML = shortMarkUp(data);
                countryInfo.innerHTML = "";
                //  console.log(data);
            } else if (data.length > 10) {
                Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
            } 

        }).catch(err => console.log(err))
    }
        // console.log(countryName);
        
}


