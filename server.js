const express = require('express')
const app = express();
const hbs = require('hbs');

//lso hepers son las funciones que voy a usar en los templates
//voy a llamar el path donde los guarde
require('./hbs/helpers')

//como vamos a subir el proyecto a heroku , el puerto no sabemos cual sera
//para esto usamos la variable de entorno
const port = process.env.PORT || 3000;
//para que cuando diagmos localHost:3000 nos mande directo a la capeta publica
app.use(express.static(__dirname + '/public'));
//express hbs
//vamos a registrar el path para nuestros template
hbs.registerPartials(__dirname + '/views/parciales/');
//declaramos el uso de nuestro hbs
app.set('view engine', 'hbs');



//para que cuando diligenciones localhost:3000 , nos lleve directo a esta pagina
app.get('/', (req, res) => {
    // res.send('Hola Mundo')
    res.render('home', {
        nombre: 'andres',
    });
});
//declaramos el pad para la pagna de about
app.get('/about', (req, res) => {
    // res.send('Hola Mundo')
    res.render('about', {});
});
//declaramos el puerto que vamos a usar , y enviamos el clg para verificar que esta escuchando
app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`);
});