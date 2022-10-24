const express = require('express')
const app = express()
const port = 3003

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');

// Rutas

app.get('/', (req, res) => {
    res.render('Inicio', {
        nombre: "Angye Pinilla",
        titulo:"Tecnico en programacion de software",
        desc: "Soy actualmente estudiante en análisis y desarrollo de sistemas de información y con un título en técnico deprogramación de software.Me caracterizo por ser una persona leal, carismática y responsable, siendo capaz de liderar y dirigir grupos de trabajo o académicos, me desempeñe como representante estudiantil por dos años seguidos y actualmente soy vocera de ficha.",
        descContact: "Contactate conmigo para comenzar ya mismo nuestro proximo proyecto y resolver cualquier duda que tengas sobre mi trabajo con gusto atendere a resolver cualquier pregunta.",
    })
})

app.get('/info', (req, res) => {
    res.render('Info', {
        infoDesc: "Dentro de mis habilidades como desarrolladora las mas destacables son html, css, JavaScript, Mysql entre otras. Eh desarrollado estas habilidades en el transcurso de mis estudios y practicas por lo que puedo desempeñar diversas tareas.",
        Est1: "Estudie en el Colegio Alberto Lleras Camargo IED, durante mis años escolares obtuve varios reconocimientos academicos y realice actividades extracurriculares organizadas por la institucion",
        Est2: "Tecnico en programacion de software, Lo realice en el Instituto de Servicio Nacional De Aprendizaje SENA, Centro de Gestión de Mercados y Logística de la Información finalizado en el año 2021",
        Est3: "Tecnologo en analisis y desarrollo de sistemas de informacion realizado en el instituto de Servicio Nacional De Aprendizaje SENA, finalizado en el año 2021. En el cuela obtuve un reconocimiento por excelencia academica",
        Est4: "Dentro de is estudios se encuentran cursos de ingles durante dos años, entre otros mas pequeños",
        estInfo:"Durante mis estudios he obtenidos deversos conocimientos tanto profesionales como personales y sociales. Por lo que me puedo adaptar a todo tipo de situaciones y tengo la experiencia necesario para manejar equipos y gestionar proyectos.",
        descContact: "Contactate conmigo para comenzar ya mismo nuestro proximo proyecto y resolver cualquier duda que tengas sobre mi trabajo con gusto atendere a resolver cualquier pregunta.",
    
    })
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