const connection = require("../database")


function getStart( request, response ){
    let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
    response.send( respuesta );
    next();
}

function getAlumnos( request, response ){

    let sql;
    
    if( request.params.id ){
        sql = "SELECT * FROM students WHERE student_id=" + request.params.id;
    }
    else{
        sql = "SELECT * FROM students";
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

function postAlumnos( request, response ){

    console.log(request.body);

    let sql = "INSERT INTO students (first_name, last_name) " + 
                "VALUES ('" + request.body.first_name + "', '" +
                                request.body.last_name + "')";

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

}

function putAlumnos( request, response ){

    console.log(request.body);

    let first_name = request.body.first_name;
    let last_name = request.body.last_name;
    let student_id = request.body.student_id;
    let params = [first_name, last_name, student_id];

    let sql = "UPDATE students SET first_name = COALESCE(?, first_name) , " + 
               "last_name = COALESCE(?, last_name)  WHERE student_id = ?";
    console.log(sql); 
    connection.query(sql, params,function (err, result) 
    {
        if (err) 
            console.log(err);
        else 
        {
            response.send(result);
        }
    }); 

}

function deleteAlumno(request, response){

    let id = request.body.student_id;
    params = [id];

    let dele = `DELETE FROM students WHERE student_id=?`;

    connection.query(dele, params, (err, result) => {
        if(err){
            console.log(err);
        }else{
            console.log("Alumno borrado");
            console.log(result);
        }
        response.send(result)
    });
}


module.exports = {getStart, getAlumnos, postAlumnos, putAlumnos, deleteAlumno};
