'use strict';

let target = document.getElementById("target");

let browser = navigator.userAgent;

let operatingSystem = navigator.platform;

let screenWidth = screen.width;
let screenHeight = screen.height;

let availableWidth = screen.availWidth;
let availableHeight = screen.availHeight;

let now = new Date();

let date = now.toLocaleDateString("fi-FI", {
    day: "numeric",
    month: "long",
    year: "numeric"
});

let time = now.toLocaleTimeString("fi-FI", {
    hour: "2-digit",
    minute: "2-digit"
});

target.innerHTML = `
    <p>Selain: ${browser}</p>
    <p>Käyttöjärjestelmä: ${operatingSystem}</p>
    <p>Ruudun koko: ${screenWidth} x ${screenHeight}</p>
    <p>Vapaa näyttötila: ${availableWidth} x ${availableHeight}</p>
    <p>Päivämäärä: ${date}</p>
    <p>Aika: ${time}</p>
`;
