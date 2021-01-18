const s1 = 3;
const s2 = 8;
const s3 = 1;

const suma = s1 + s2 + s3;
console.log(suma);

console.log('------------------')

const t1 = 'Labas';
const t2 = 'rytas';
const t3 = 'sakau';
const t4 = 'tau';

const tekstas = t1 + ' ' + t2 + ' ' + t3 + ' ' + t4;
console.log(tekstas);

const tekstas2 = `${t1} ${t2} ${t3} ${t4}`;
console.log(tekstas2);

console.log('------------------')

const n = [2, 5, 3, 4, 9];
const arraySuma = n[0] +  n[1] + n[2] + n[3] + n[4];
console.log(arraySuma);

const alternuojantiSuma = n[0] -  n[1] + n[2] - n[3] + n[4];
console.log(alternuojantiSuma);

console.log('------------------')

const w = ['Lithuania', 'morning', 'Good'];

const sentence = w[2] + ', ' + w[1] + ', ' + w[0];
console.log(sentence);

console.log('------------------')

const x = 8;
const y = 2;

if (x > y) {
    console.log('Taip:','Pomidoras');
} else {
    console.log('Ne:','Bandykite kita karta');
}

if (x < y) {
    console.log('Taip:','Pomidoras');
} else {
    console.log('Ne:','Bandykite kita karta');
}

if (x === y) {
    console.log('Taip:','Pomidoras');
} else {
    console.log('Ne:','Bandykite kita karta');
}

const arLygus = x === y ? 'Pomidoras' : 'Bandykite kita karta';
console.log(arLygus);

if (x !== y) {
    console.log('Taip:','Pomidoras');
} else {
    console.log('Ne:','Bandykite kita karta');
}

const arnelygus = x !== y ? 'Pomidoras' : 'Bandykite kita karta';
console.log(arnelygus);

if (x >= y) {
    console.log('Taip:','Pomidoras');
} else {
    console.log('Ne:','Bandykite kita karta');
}

if (x <= y) {
    console.log('Taip:','Pomidoras');
} else {
    console.log('Ne:','Bandykite kita karta');
}

console.log('------------------')

const zodziai = ['einu', 'pasivazineti', 'nuo', 'kalno'];
const zodziuIlgis = zodziai[0].length;
console.log(zodziuIlgis);

const zodziuIlgis1 = zodziai[1].length;
console.log(zodziuIlgis1);

const zodziuIlgis2 = zodziai[2].length;
console.log(zodziuIlgis2);

const zodziuIlgis3 = zodziai[3].length;
console.log(zodziuIlgis3);

console.log('------------------')

const z1 = 'rytas';
const z2 = 'vakaras';
const zodIlgis = z1.length;
const zodIlgis1 = z2.length;

const kurisDidesnis = zodIlgis > zodIlgis1 ? 'Pomidoras' : 'Bandykite kita karta';
console.log(kurisDidesnis);

const kurisMazesnis = zodIlgis < zodIlgis1 ? 'Pomidoras' : 'Bandykite kita karta';
console.log(kurisMazesnis);

const arLygus1 = zodIlgis === zodIlgis1 ? 'Pomidoras' : 'Bandykite kita karta';
console.log(arLygus1);

const arnelygus1 = zodIlgis !== zodIlgis1 ? 'Pomidoras' : 'Bandykite kita karta';
console.log(arnelygus1);

const didLygus = zodIlgis >= zodIlgis1 ? 'Pomidoras' : 'Bandykite kita karta';
console.log(didLygus);

const mazLygus = zodIlgis <= zodIlgis1 ? 'Pomidoras' : 'Bandykite kita karta';
console.log(mazLygus);

console.log('------------------')

const c = [5, 11, 2, 6, 7];
console.log(c);
console.log('Kiek reiksmiu yra c', c.length);

console.log('------------------')

const zalias = [1, 3];
const raudonas = [2, 4];
const zaliasIlgis = zalias[0];
const zaliasIlgis1 = zalias[1];
const raudIlgis = raudonas[0];
const raudIlgis1 = raudonas[1];

const kurisDidesnis1 = zaliasIlgis > raudIlgis ? 'Pomidoras' : 'Bandykite kita karta';
console.log(kurisDidesnis1);

const kurisMazesnis1 = zaliasIlgis < raudIlgis ? 'Pomidoras' : 'Bandykite kita karta';
console.log(kurisMazesnis1);

const arLygus2 = zaliasIlgis === raudIlgis ? 'Pomidoras' : 'Bandykite kita karta';
console.log(arLygus2);

const arnelygus2 = zaliasIlgis !== raudIlgis ? 'Pomidoras' : 'Bandykite kita karta';
console.log(arnelygus2);

const didLygus1 = zaliasIlgis >= raudIlgis ? 'Pomidoras' : 'Bandykite kita karta';
console.log(didLygus1);

const mazLygus1 = zaliasIlgis <= raudIlgis ? 'Pomidoras' : 'Bandykite kita karta';
console.log(mazLygus1);


