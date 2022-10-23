const express = require('express')
const app = express()
const port = 3003

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');

// Rutas

app.get('/', (req, res) => {
    res.render('Inicio')
})

app.get('/info', (req, res) => {
    res.render('Info')
})

app.get('/port', (req, res) => {
    res.render('Galeria')
})

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/public/404.html');
});

// Rutas

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})