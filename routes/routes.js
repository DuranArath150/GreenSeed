//importar modulos 
const express = require('express');
const path = require('path');

//Creamos un objeto de Router Express
const router = express.Router();

//Exportar nuestro modulo ROUTES
module.exports = router;

//AQUI SE HACEN LOS METODOS

//Método para acceder al home
router.get('/', (req, res) => {
    res.render('pages/home');
});

router.get('/directorio', (req, res) => {
    res.render('pages/directorio');
});

router.get('/echeverialilacina', (req, res) => {
    res.render('pages/echeverialilacina');
});

router.get('/echeverialola', (req, res) => {
    res.render('pages/echeverialola');
});

router.get('/echeveriapeacockii', (req, res) => {
    res.render('pages/echeveriapeacockii');
});

router.get('/echeveriapulvinata', (req, res) => {
    res.render('pages/echeveriapulvinata');
});

router.get('/echeveriasecunda', (req, res) => {
    res.render('pages/echeveriasecunda');
});

router.get('/echeveriasetosa', (req, res) => {
    res.render('pages/echeveriasetosa');
});

router.get('/echeveriashaviana', (req, res) => {
    res.render('pages/echeveriashaviana');
});
