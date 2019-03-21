/**
 * Autor: Alexis Ruano
 * Fecha: 17 de Marzo de 2019
 * Descripcion: Primera entrega curos de node js
 */
const {listarCursos, inscribirEnCurso, cursos} = require('./cursos');
const express = require('express')
const app = express()

const opciones = {
    cursoId:{demand : true,alias:'i'},
    nombre:{demand : true,alias:'n'},
    cedula:{demand : true,alias:'c'},
}

const argv = require('yargs').command('inscribir','Realizar inscripción a un curso',opciones).argv
if(argv.cursoId){
    html = '<h3>Proceso de Inscripción</h3>';
    html += inscribirEnCurso(argv.cursoId,argv.nombre,argv.cedula);
}else{
    html = '<h2>Cursos Ofrecidos</h2>'
    html += listarCursos();
}

app.get('/', function (req, res) {
  res.send(html)
})
 
app.listen(3000)