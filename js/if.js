/*
operatoriai:
naudotini: >, <, >=, <=, !==, === (patikrina tipus, o tada ir reiksme - grieztai lygu, safety first)
nenudotini: == (reiksme - ar lygu ), != (dviguba nelygybe)


if (tikrinama salyga) {
    jei tenkinama
} else {
    jei netenkinama
}

sablonai:
if () {}
if () {} else {}
if () {} else  if () .... else if {}

*/

const s = 4;
const b = 2;

if (s != b) {
    console.log('taip');
} else {
    console.log('ne');
}

const s = 4;
const b = '4';

if (s == b) {
    console.log('taip');
} else {
    console.log('ne');
}


//konvertuoja tekste esanti skaiciu i skaicius
const s = 400;
const b = '400';

const c = +b;
console.log(c);

if (s === c) {
    console.log('taip');
} else {
    console.log('ne');
}

const spalva = 'melyna';

if (spalva === 'melyna') {
    console.log('Arijai');
} else {
    console.log('ne arijai');
}

const spalva = 'melyna';

if (spalva === 'melyna') {
    console.log('Arijai');
} else if (spalva === 'zalia') {
    console.log('Gerai slepiasi zolej');
} else if (spalva === 'ruda') {
    console.log('Angry bird');
} else  if (spalva === 'raudona') {
    console.log('Turbut programuotojas...');
} else {
    console.log('ar tu turi akis?');
}

const moneta = 'skaicius';

if (moneta === 'skaicius') {
    console.log('Iskrito skaicius');
} else {
    if (moneta === 'herbas') {
        console.log('Iskrito herbas');
    } else {
        console.log('Tai gaal iskrito briauna?...');
    }
}

const moneta = 'dgfsfhs';

if (moneta === 'skaicius') {
    console.log('Iskrito skaicius');
} else {
    if (moneta === 'herbas') {
        console.log('Iskrito herbas');
    } else {
        if (moneta === "briauna")
        console.log('Moneta nukrito ant briaunos...');
    } else {
        console.log('tai moneta vis dar ore?');
    }
}

console.log('--------------------------');

const namoTipas = 'namas';  //namas, butas
const kaipKilti = 'laiptai'; // laiptai, liftas

if (namoTipas === 'namas') {
    if (kaipKilti === 'laiptai') {
    console.log('Ieinu i nama ir kylu laiptais');
    } else if (kaipKilti === 'liftas') {
    } else {
        console.log('Ieinu i nama ir nera kaip kilti i virsu');
    }
}

