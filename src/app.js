// Módulos
const path = require("path")
const express = require('express');
const app = express();


// Configuración
app.use(express.static('public'));

// Acá falta el template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'))


// Rutas
const rutasMain = require("./routes/mainRouter")
app.use('/', rutasMain);

// Acá falta el archivo de rutas y después las vistas de EJS
app.get('/', (req, res) => {
    res.send('Servidor funcionando, el resto te toca a vos 😋')
});

app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})