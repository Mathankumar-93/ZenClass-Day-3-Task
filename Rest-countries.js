

const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);

    for (let value of countries) {

        console.log(value.name.common);
        console.log(value.region);
        console.log(value.subregion);
        console.log(value.population);

    };
};

xhr.send();

