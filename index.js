// Librerías externas
require('dotenv').config()
const express = require('express');

// Módulos internos
const { readFile } = require('./src/files');

const gafas = require('./src/routes/gafas');

const app = express();
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || 'App Gafas';
const FILE_NAME = './db/gafas.txt';

//Permitir tráfico en formato JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Usar el motor de plantillas de EJS
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
})

app.get('/read-file', (req, res) => {
    const data = readFile(FILE_NAME);
    res.send(data);
});

//Definir las rutas de la aplicación
app.use('/gafas', gafas);

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`${APP_NAME} is running on http://localhost:${PORT}`);
});