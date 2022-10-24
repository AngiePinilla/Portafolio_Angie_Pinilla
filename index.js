const express = require('express')
const app = express()
const port = 3003

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');

// Rutas

app.use('/', require('./router/Rutas'));
// app.use('/info', require('./router/Rutas'));
// app.use('/port', require('./router/Rutas'));

app.use((req, res, next) => {
    res.status(404).render('404');
});

// Rutas

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})