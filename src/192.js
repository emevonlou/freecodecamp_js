// Capitalization

function capitalize(str) {
    const words = [];

    for(let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));  
      }

    return words.join(' ');
}

let resultado = capitalize("que tal?");

console.log(resultado);