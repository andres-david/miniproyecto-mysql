const connection = require("../database");


function getStart( request, response ){
    let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
    response.send( respuesta );
    next();
}

function getMedia( request, response ){

    let sql;
    
    if( request.params.id ){
        sql = `SELECT s.student_id, s.first_name, s.last_name, AVG(mark) AS media
        FROM students AS s
        INNER JOIN subject_teacher AS sut
        ON(s.student_id = sut.subject_id)
        INNER JOIN subjects AS sub
        ON(sut.subject_id = sub.subject_id)
        INNER JOIN marks AS m
        ON (sub.subject_id = m.subject_id)
        WHERE s.student_id = ${request.params.id}
        group by s.student_id`;
    }
    else{
        sql = `SELECT s.student_id, s.first_name, s.last_name, AVG(mark) AS media
        FROM students AS s
        INNER JOIN subject_teacher AS sut
        ON(s.student_id = sut.subject_id)
        INNER JOIN subjects AS sub
        ON(sut.subject_id = sub.subject_id)
        INNER JOIN marks AS m
        ON (sub.subject_id = m.subject_id)
        group by s.student_id`;
    }

    connection.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            response.send(result);
        }
    });

};


function getApuntadas( request, response ){

    let sql;
    
    if( request.params.id ){
        sql = `SELECT student_id, first_name, last_name, title 
        FROM students 
        INNER JOIN subject_teacher 
        ON (students.group_id = subject_teacher.subject_id) 
        INNER JOIN subjects  
        ON (subject_teacher.subject_id = subjects.subject_id)
        WHERE student_id = ${request.params.id}`;
    }
    else{
        sql = `SELECT student_id, first_name, last_name, title 
        FROM students 
        INNER JOIN subject_teacher 
        ON (students.group_id = subject_teacher.subject_id) 
        INNER JOIN subjects  
        ON (subject_teacher.subject_id = subjects.subject_id)`;
    }

    connection.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            response.send(result);
        }
    });

};

function getImpartidas( request, response ){

    let sql;
    
    if( request.params.id ){
        sql = `SELECT t.teacher_id, t.first_name, t.second_name, s.title 
        FROM teachers AS t 
        INNER JOIN subject_teacher AS sut 
        ON (t.teacher_id = sut.subject_id) 
        INNER JOIN subjects AS s 
        ON (sut.subject_id = s.subject_id)
        WHERE t.teacher_id = ${request.params.id}`;
    }
    else{
        sql = `SELECT t.teacher_id, t.first_name, t.second_name, s.title 
        FROM teachers AS t 
        INNER JOIN subject_teacher AS sut 
        ON (t.teacher_id = sut.subject_id) 
        INNER JOIN subjects AS s 
        ON (sut.subject_id = s.subject_id)`;
    }

    connection.query(sql, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            response.send(result);
        }
    });

};


module.exports = {getStart, getMedia, getApuntadas, getImpartidas};
