const fs = require('fs');
let cursos = [
    {
        cursoId : 'SDPC',
        nombre :'SCRUM DEVELOPER PROFESSIONAL CERTIFICATE',
        duración : '2 meses',
        valor : '600000 COP'
    },
    {
        cursoId : 'SMPC',
        nombre : 'SCRUM FOUNDATION PROFESSIONAL CERTIFICATE',
        duración : '1 mes',
        valor : '40000 COP'
    },
    {
        cursoId : 'SMPC',
        nombre : 'SCRUM MASTER PROFESSIONAL CERTIFICATE',
        duración : '2 meses',
        valor : '800000 COP'
    },
    {
        cursoId : 'SPOPC',
        nombre : 'SCRUM PRODUCT OWNER PROFESSIONAL CERTIFICATE',
        duración : '2 meses',
        valor : '800000 COP'
    },
]

let imprimirCurso = curso =>{
    var cursoHTML = ('<h2>'+ curso.nombre+'</h2>');
    cursoHTML+='<ul>'
    cursoHTML+=('<li>Identificador: '+curso.cursoId+'</li>');
    cursoHTML+=('<li>Duración: '+curso.duración+'</li>');
    cursoHTML+=('<li>Valor: '+curso.valor+'</li>');
    cursoHTML+='</ul>'
    return cursoHTML;
};

let imprimirError = mensaje => {
    return '<h3>'+mensaje+'</h3>';
};

let listarCursos = () =>{
    var cursosHTML = '';
    cursos.forEach((curso,index) => {
        cursosHTML+=imprimirCurso(curso);
        cursosHTML+='</hr>'
    });
    return cursosHTML;
};

let generarReciboInscripcion = (curso, nombre, cedula)=>{
    let infoEstudiante ='<p><strong>'+nombre+'</strong> con numero de cédula <strong>'+cedula+' </strong>quedó inscrito en el curso</br> <i>'+curso.nombre+'('+curso.cursoId+')</i></br>';
    let infoCurso = 'La duración del curso es de ' + curso.duración+' y un valor de <strong>'+curso.valor+'</strong></p>';
    return (infoEstudiante+infoCurso);
};

let inscribirEnCurso = (cursoId, nombre,cedula)=>{
    //Buscamos el curso
    let curso = cursos.find(curso =>{
        return curso.cursoId == cursoId;
    }); 
    if(curso != null){
        imprimirCurso(curso);
        return generarReciboInscripcion(curso,nombre,cedula)
    }else{
        return ('Lo sentimos, No hemos encontrado el curso. Asegurate que el Identificador sea el correcto')        
    }
};

module.exports = {
    cursos,
    inscribirEnCurso,
    listarCursos
}