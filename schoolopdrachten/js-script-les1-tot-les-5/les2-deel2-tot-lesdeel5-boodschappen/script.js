console.log("script is geladen");

const groentenvak = document.getElementById('groenten');
const fruitenvak = document.getElementById('fruiten');
const fastfoodvak = document.getElementById('fastfood');


function  zetingroentenla(groenten) {
    console.log(groenten);

    const nieuweElement = document.createElement('h2');
    nieuweElement.innerHTML = groenten;
    nieuweElement.className = 'rood';
    groentenvak.appendChild(nieuweElement);

}

function zetinfruitenla(fruiten) {
    console.log(fruiten);

    const nieuweElement = document.createElement('h2');
    nieuweElement.innerHTML = fruiten;
    nieuweElement.className = 'rood';
    fruitenvak.appendChild(nieuweElement);


}

function zetinfastfoodla(fastfood) {
    console.log(fastfood);

    const nieuweElement = document.createElement('h2');
    nieuweElement.innerHTML = fastfood;
    nieuweElement.className = 'rood';
    fastfoodvak.appendChild(nieuweElement);


}


















