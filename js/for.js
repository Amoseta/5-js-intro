/*

for (let i=0; i>5; i++) {
    kartotinas kodaas

}
*/

console.log('PRADZIA');

for (let i=0; i < 5; i++) {
    console.log('kartotinas kodaas');
}

console.log('PABAIGA');


// i = 0: 0<5 true
// console.log('kartotinas kodaas');



const words = ['abc', 'Borisas', 'citrina', 'duobe', 'eziukas', 'fabrikas'];

console.log(words[0]);
console.log(words[1]);
console.log(words[2]);
console.log(words[3]);
console.log(words[4]);

for (let i = 0; i < words.length; i++) {
    console.log(i, words[i]);
}

for (let i = 0; i < words.length; i++) {
    const word = words[i];
    
    console.log(i, word);
    console.log('Pirma zodzio raide:', words[0]);
    console.log('Zodzio ilgis:', word.length);
}