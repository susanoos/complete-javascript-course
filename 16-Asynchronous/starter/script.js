'use strict';
const getJSON = (url, errorMsg = 'Something went wrong ):') => {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};
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
  countriesContainer.style.opacity = 1;
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

/*
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


//Creating a new Promise
const lottoPromise = new Promise((resolve, reject) => {
  console.log('Lottery is being started');

  // making it async
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve(`You win!`);
    } else {
      reject(new Error(`You lose!`));
    }
  }, 2000);
});

// consuming the Promise
lottoPromise
  .then(result => console.log(result))
  .catch(err => console.error(err));

const wait = seconds => {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

wait(2)
  .then(() => {
    console.log('I waited 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited 1 second');
  });


const getPosition = () =>
  new Promise((resolve, reject) => {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );

    // same code as above
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

// getPosition().then(pos => console.log(pos));

const whereAmI = () => {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://geocode.xyz/${lat}, ${lng}?geoit=json&auth=827986436035835499395x2795`
      );
    })
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

btn.addEventListener('click', whereAmI);


const wait = seconds => {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

let currentImg;
const imgContainer = document.querySelector('.images');
const creatImg = imgPath => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', err => {
      reject(new Error('Image not found'));
    });
  });
};

creatImg('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('img 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return creatImg('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('img 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));


const getPosition = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

// ES2017 syntax of consuming promises
const whereAmI = async () => {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    const resGeo = await fetch(
      `https://geocode.xyz/${lat}, ${lng}?geoit=json&auth=827986436035835499395x2795`
    );
    if (!resGeo.ok) throw new Error('Error handling location');
    const dataGeo = await resGeo.json();
    // console.log(dataGeo);
    // NEWER WAY insted of the one above
    // waits for the data to be fetched using 'await' also is the resolved value which is why we stored it
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!response.ok) throw new Error('Location not found');
    const data = await response.json();
    // console.log(data);
    renderCounty(data[0]);
    return `You are in ${dataGeo.city}, ${dataGeo.state}`;
  } catch (err) {
    console.error(err.message);
    renderError(`Something went wrong ): ${err.message}`);
    throw err;
  }
};

// const city = whereAmI();
// console.log(city);

// fulfiling the promise if we return from an 'async' function
// console.log(`1: getting location`);
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.log(`💩 ${err.message}`))
//   .finally(() => console.log(`3: finished`));

// catching errors
console.log(`1: getting location`);
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.log(`2: 💩 ${err.message}`);
  }
  console.log(`3: finished`);
})();


const get3Countries = async (c1, c2, c3) => {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    // handling multiple Promises COMMON operation
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.flatMap(d => d[0].capital));
  } catch (err) {
    console.log(err.message);
  }
};
get3Countries(`usa`, `greece`, `france`);
*/

// 'Promise.race()' settled as soon as an input settles
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/usa`),
//     getJSON(`https://restcountries.com/v3.1/name/mexico`),
//     getJSON(`https://restcountries.com/v3.1/name/france`),
//   ]);
//   console.log(res[0]);
// })();

const timeout = s => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('timeout'));
    }, s * 1000);
  });
};
Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/spain`),
  timeout(0.2),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));
