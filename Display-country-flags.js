

const XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let flags = JSON.parse(xhr.responseText);
    for (let value of flags) {
        console.log(value['flag']);
    }
};

xhr.send();