let lengthElem = document.getElementById("length");
let volumeElem = document.getElementById("volume");
let massElem = document.getElementById("mass");

function lengthConverter(unitVar = 20){
    let feet = unitVar * 3.2808;
    feet = Math.round((feet + Number.EPSILON) * 1000) / 1000;
    let meters = unitVar / 3.2808;
    meters = Math.round((meters + Number.EPSILON) * 1000) / 1000;
    return unitVar+" meters = "+feet+" feet | "+unitVar+" feet = "+meters+" meters";
}

function volumeConverter(unitVar = 20){
    let liters = unitVar / 0.264172;
    liters = Math.round((liters + Number.EPSILON) * 1000) / 1000;
    let gallons = unitVar * 0.264172;
    gallons = Math.round((gallons + Number.EPSILON) * 1000) / 1000;
    return unitVar+" liters = "+gallons+" gallons | "+unitVar+" gallons = "+liters+" liters";
}

function massConverter(unitVar = 20){
    let kilos = unitVar / 2.2046;
    kilos = Math.round((kilos + Number.EPSILON) * 1000) / 1000;
    let pounds = unitVar * 2.2046;
    pounds = Math.round((pounds + Number.EPSILON) * 1000) / 1000;
    return unitVar+" kilos = "+pounds+" pounds | "+unitVar+" pounds = "+kilos+" kilos";
}

function convert(){
    unitVar = document.getElementById("unitNumber").value;
    lengthElem.textContent = lengthConverter(unitVar);
    volumeElem.textContent = volumeConverter(unitVar);
    massElem.textContent = massConverter(unitVar);    
}
