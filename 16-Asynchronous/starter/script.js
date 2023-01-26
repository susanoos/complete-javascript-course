'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// https://restcountries.com/v2/

// AJAX calls

// old way requesting the data from the API
// const getCountry = country => {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

//   request.send();

//   // getting the data
//   request.addEventListener('load', function () {
//     //   console.log(this.responseText);
//     // converting to object
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const languages = Object.values(data.languages);
//     const currencies = Object.values(data.currencies);
//     // console.log(languages, currencies);

//     const html = `
//         <article class="country">
//         <img class="country__img" src="${data.flags.png}" />
//         <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${languages[0]}</p>
//             <p class="country__row"><span>💰</span>${currencies[0].name}</p>
//             </div>
//             </article>
//             `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = '1';
//   });
// };

const renderError = msg => {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const renderCounty = (data, className) => {
  const languages = Object.values(data.languages);
  const currencies = Object.values(data.currencies);
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${Number(
        data.population / 1000000
      ).toFixed()}M people</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

// const getCountryAndNeighbor = country => {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   // getting the data
//   request.addEventListener('load', function () {
//     // console.log(this.responseText);
//     // converting to object
//     //AJAX country 1
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const languages = Object.values(data.languages);
//     const currencies = Object.values(data.currencies);
//     // console.log(languages, currencies);

//     //country 1
//     renderCounty(data);

//     //getting the neighbor countries
//     const neighbor = data.borders?.[0];
//     if (!neighbor) return;

//     // AJAX call 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       //   console.log(this.responseText);
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCounty(data2, 'neighbour');
//     });
//   });
// };
// getCountryAndNeighbor('usa');
// getCountryAndNeighbor('brazil');
// getCountryAndNeighbor('japan');

/////////////////////////////////////////////////////////////////////////////////////
//modern way of fetching APIs
// const request = fetch('https://restcountries.com/v3.1/name/usa');
// console.log(request);

// const getCountryData = country => {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//       //'json()' returns a promise.
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       renderCounty(data[0]);
//     });
// };

// const getJSON = (url, errorMsg = 'Something went wrong ):') => {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };

// const getCountryData = country => {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
//     .then(data => {
//       renderCounty(data[0]);
//       // chaining promises
//       const neighbour = data[0].borders;
//       if (!neighbour) throw new Error('No neighbour found');

//       //fetching neighbouring country
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour[0]}`,
//         `Country not found`
//       );
//     })
//     .then(data => renderCounty(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong ): ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = '1';
//     });
// };

// btn.addEventListener('click', () => {
//   getCountryData('usa');
//   //   getCountryData('japan');
// });
// // getCountryData('brazil');

// Challenge 1
const whereAmI = (lat, lng) => {
  return fetch(
    `https://geocode.xyz/${lat}, ${lng}?geoit=json&auth=827986436035835499395x2795`
  )
    .then(response => {
      //   console.log(response);
      if (!response.ok)
        throw new Error(`Something went wrong ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in in ${data.region}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok) throw new Error('Location not found');
      return response.json();
    })
    .then(data => renderCounty(data[0]))
    .catch(err => console.error(err))
    .finally(() => (countriesContainer.style.opacity = '1'));
};
btn.addEventListener('click', () => {
  whereAmI(52.508, 13.381);
  whereAmI(19.037, 72.873);
  whereAmI(-33.933, 18.474);
});
