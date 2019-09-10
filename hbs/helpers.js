const hbs = require('hbs');

//para ahorrarnos poner en cada llamado de pagina el año podemos hacer lo siguiente
//y en el tamplate lo que hacemos es cambiar el anio por getAnio , nuestra funcion
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
//ponerle mayuscula la primera letra a los textos que yo quiera
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});