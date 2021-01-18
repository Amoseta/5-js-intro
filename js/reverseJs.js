"use strict"

/*
perrasyti teksta is galo i prieki. 
*/

const text = 'abcdef';
let reverseText = '';

for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    reverseText = letter + reverseText;
    
    console.log(i, letter, reverseText);
}
console.log('Finale gavau:', reverseText);

console.log('---------------------------');


const text1 = 'abcdef';
const size = text1.length;
let reverseText1 = '';

for (let i = 0; i < size; i++) {
    const letter = text1[size - i - 1];
    reverseText1 += letter ;
    console.log(i, letter, reverseText1);
}
console.log('Finale gavau:', reverseText1);

/*
for (let i = 1; i <= size; i++) {
    const letter = text[size - i];
    reverseText += letter ;
    console.log(i, letter, reverseText);
}

for (let i = size - 1; i >= 0; i--) {
    const letter = text[i];
    reverseText += letter ;
    console.log(i, letter, reverseText);
}

for (let i = size; i > 0; i--) {
    const letter = text[i-1];
    reverseText += letter ;
    console.log(i, letter, reverseText);
}
*/


