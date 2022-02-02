// les-1 deel 2


const rood = document.getElementById("kopje");
const blauw = document.getElementById("blauw");
const groen = document.getElementById("groen");
const zwart = document.getElementById("zwart");
const grijs = document.getElementById("grijs");
const geel = document.getElementById("geel");
const pink = document.getElementById("pink");
const paars = document.getElementById("paars");
const oranje = document.getElementById("oranje");

rood.style.backgroundColor = "red";
blauw.style.backgroundColor = "blue";
groen.style.backgroundColor = "green";
// zwart.style.backgroundColor = "black";
grijs.style.backgroundColor = "grey";
geel.style.backgroundColor = "yellow";
pink.style.backgroundColor = "pink";
paars.style.backgroundColor = "violet";
oranje.style.backgroundColor = "orange";

rood.addEventListener('click', vooruitkopje);
blauw.addEventListener('click', vooruitblauw);
groen.addEventListener('click', vooruitgroen);
zwart.addEventListener('click', vooruitzwart);
grijs.addEventListener('click', vooruitgrijs);
geel.addEventListener('click', vooruitgeel);
pink.addEventListener('click', vooruitpink);
paars.addEventListener('click', vooruitpaars);
oranje.addEventListener('click', vooruitoranje);

function vooruitkopje(){
    rood.style.backgroundColor = "red";
    rood.style.color = "white";
}

function vooruitblauw(){
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "white";
    rood.style.backgroundColor = "white";
    rood.style.color = "black";
}

function vooruitgroen() {
    document.body.style.backgroundColor = "green";
    document.body.style.color = "white";
    groen.style.backgroundColor = "green";
    groen.style.color = "violet";
}

function vooruitzwart() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    zwart.style.backgroundColor = "black";
    zwart.style.color = "orange";
}

function vooruitgrijs() {
    document.body.style.backgroundColor = "gray";
    document.body.style.color = "white";
    grijs.style.backgroundColor = "grey";
    grijs.style.color = "pink";
}

function vooruitgeel() {
    document.body.style.backgroundColor = "yellow";
    document.body.style.color = "white";
    zwart.style.backgroundColor = "yellow";
    zwart.style.color = "blue";
}

function vooruitpink() {
    document.body.style.backgroundColor = "pink";
    document.body.style.color = "white";
    zwart.style.backgroundColor = "pink";
    zwart.style.color = "green";
}

function vooruitpaars() {
    document.body.style.backgroundColor = "violet";
    document.body.style.color = "white";
    paars.style.backgroundColor = "violet";
    paars.style.color = "yellow";
}

function vooruitoranje() {
    document.body.style.backgroundColor = "orange";
    document.body.style.color = "white";
    zwart.style.backgroundColor = "orange";
    zwart.style.color = "pink";
}
