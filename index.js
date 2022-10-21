const express = require('express')
const app = express()
const port = 3003

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');

// Rutas

app.get('/', (req, res) => {
    res.render('Inicio',{desc: "Holi"})
})

app.get('/info', (req, res) => {
    res.render('Info', { titulo: "Pagina Informacion" })
})

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/public/404.html');
});

// Rutas

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})