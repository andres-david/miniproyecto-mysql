const connection = require("../database")


// const { Professional } = require("../models/claseProfesional");

// let profesionales = null;

// let profesional1 = new Professional('David', 30, 'M', 60, 1.70);
// let profesional2 = new Professional('Andrés', 20, 'M', 70, 1.80);

let alumnos = [];

// profesionales.length

function getStart( request, response ){
    let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
    response.send( respuesta );
    next();
}

function getAlumnosParams( request, response ){
    let id = request.params.id;

    let respuesta;

    if( alumnos.length > id ){

        respuesta = alumnos[id];

    }
    else{
        respuesta = {error: true, codigo: 200, mensaje: "El usuario no existe"};
    }

    response.send( respuesta );
}

function getAlumnos( request, response ){

    let sql;
    
    if( request.params.id == null ){
        sql = "SELECT * FROM students";
    }
    else{
        sql = "SELECT * FROM students WHERE id=" + request.params.id;
    }

    connection.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            response.send(result);
        }
    });

}

// let sql = "UPDATE marks SET mark = 5 WHERE mark < 5";
// connection.query(sql, (err, result) => {
//     if( err ){
//         console.log( err );
//     }
//     else{
//         console.log(result);
//     }
// });

function postAlumnos( request, response ){

    console.log(request.body);

    let sql = "INSERT INTO students (first_name, last_name) " + 
                "VALUES ('" + request.body.nombre + "', '" +
                                request.body.apellido + "')";

    console.log(sql);
    connection.query(sql, (err, result) => {
        if( err ){
            console.log( err );
        }
        else{
            console.log(result);
            if(result.insertId){
                response.send(String(result.insertId));
            }
            else{
                response.send("-1");
            }
        }
    })
    i

}

function putProfesionales( request, response ){

    let id = request.body.id;

    let respuesta;

    if( profesionales.length > id ){

        profesionales[id].name   = request.body.name;
        profesionales[id].age    = request.body.age;
        profesionales[id].genre  = request.body.genre;
        profesionales[id].weight = request.body.weight;
        profesionales[id].height = request.body.height;

        respuesta = {error: false, codigo: 200, 
            mensaje: 'Usuario actualizado', resultado: profesionales};

    }
    else{
        respuesta = { error: true, codigo: 200, 
                    mensaje: 'Profesional no existente', resultado: profesionales}
    }

    response.send( respuesta );

}

function deleteProfesionales( request, response ){

    let id = request.body.id;

    let respuesta;

    if( profesionales.length > id ){

        profesionales.splice( id, 1 );

        respuesta = {error: false, codigo: 200,
                    mensaje: 'Usuario eliminado', resultado: profesionales};

    }
    else{

        respuesta = {error: true, codigo: 200, 
            mensaje: 'El usuario no existe', resultado: profesionales};

    }

    response.send( respuesta );

}


module.exports = {getStart, getProfesionales, getProfesionalesParams, postProfesionales, putProfesionales, deleteProfesionales}
