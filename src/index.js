import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const inputCountry = document.querySelector("#search-box")
const list = document.querySelector(".country-list")
const countryInfo = document.querySelector(".country-info")

inputCountry.addEventListener("input", fetchCountries )

function fetchCountries(e) {
    let name = inputCountry.value.toLowerCase();
    // console.log(countryName);
    // const resp = fetch(`${baseUrl}/name/${countryName}`);
    const resp = fetch(`https://restcountries.com/v2//name/${name}?fields=name,capital,population,flags,languages`)
    resp.then(response =>{
        if (!response.ok) {
            throw new Error()
        }
        console.log(response);
   
         return response.json()   
    }) 
        .then(data => {
            const markUp = createMarkUp(data)
            // countryInfo.insertAdjacentHTML("beforeend", markUp);
            countryInfo.innerHTML = markUp;
            console.log(markUp);
        }).catch(err => console.log(err))
    
}

function createMarkUp(arr) {
    return arr.map(item => 
    `<li>
    <img src="${item.flags.svg}" alt="flag's ${item.name}">
    <h2 class="Country">${item.name}</h2>
    <span class="Capital">${item.capital}</span>
    <span class="Population">${item.population}</span>
    <span class="Languages">${(item.languages[0].nativeName)}</span>
    </li>`).join("")
}