"use strict";
// vienos eilutes komentaras

/*keliu
eiluciu
komentaras */


//jei norim ka nors issispausdinti, tai naudojam console.log()
console.log(15896245)
console.log('Labas rytas')

/*
Reiksmiu tipai:
number
string (tekstas)
boolean (logine reiksme)
array (sarasas)
object (objektas)
*/

/*
Kintamuju iniciavimo budai:
const (pagrindinis, kuri reikia rinktis by default)
let (renkames, jei info keiciasi)
var (nenaudoti)
*/

//inicijuoti kintamaji, kuris niekada nesikeis ir bus skaicius 2021
const metai = 2021;

//inicijuoti kintamaji, kuris niekada nesikeis ir bus tekstas Petras
const vardas = 'Petras'

console.log(metai);
console.log(vardas);

console.log(metai, vardas);

console.log('Metai:', metai);
console.log('Asmens vardas:', vardas, 'ir jis gyveno:', metai, 'metais.')

const pirmasSkaicius = 13;
const antrasSkaicius = 2;

const suma = pirmasSkaicius + antrasSkaicius;
console.log(suma);
console.log(pirmasSkaicius, '+', antrasSkaicius, '=', suma);

let adresas = 'Cypliskes';
console.log(adresas);

adresas = 'Kaunas';
console.log(adresas);

let pinigine = 0;
console.log('Turiu pinigu:', pinigine);

const pirmaAlga = 100;
pinigine = pinigine + pirmaAlga;
console.log('Turiu pinigu:', pinigine);

const antraAlga = 250;
pinigine = pinigine + antraAlga;
console.log('Turiu pinigu:', pinigine);

const treciaAlga = 650;
pinigine = pinigine + treciaAlga;
console.log('Turiu pinigu:', pinigine);


console.log('------------------------');

//matematines operacijos
const s1 = 2;
const s2 = 4;

console.log(s1 + s2);
console.log(s1 - s2);
console.log(s1 * s2);
console.log(s1 / s2);
console.log(s1 ** s2); //kelimas laipsniu: du ketvirtuoju

console.log(2 + 2 * 2);
console.log((2 + 2) * 2);

//tekstines operacijos

const hi = 'Labas';
const morning = 'rytas';

const sayHi = hi + ' ' + morning + '!'
console.log(sayHi);

const justHi = hi + '!';
console.log(justHi);

/*
teksto reiksme gali buti inicijuota:
    viengubose kabutese;
    dvigubose kabutese;
*/
// tekste naudojamos dvigubos kabutes
const dvigubosTekste = 'Tekste naudojamos dvigubos (") kabutes.';
console.log(dvigubosTekste);

// tekste naudojamos viengubos kabutes
const viengubosTekste = "Tekste naudojamos viengubos (') kabutes.";
console.log(viengubosTekste);

// tekste naudojamos abi kabutes
const abiTekste12 = "Tekste naudojamos viengubos (') ir dvigubos (\") kabutes.";
console.log(abiTekste12);

const abiTekste21 = 'Tekste naudojamos viengubos (\') ir dvigubos (") kabutes.';
console.log(abiTekste21);

const abiTekste11 = 'Tekste naudojamos viengubos (\') ir dvigubos (\") kabutes.';
console.log(abiTekste12);

const abiTekste22 = "Tekste naudojamos viengubos (\') ir dvigubos (\") kabutes.";
console.log(abiTekste12);

