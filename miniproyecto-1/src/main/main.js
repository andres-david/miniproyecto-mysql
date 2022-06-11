let printTable = ( lista ) => {

    let bodyList = document.querySelector('.body__list');

    bodyList.innerHTML = '';

    document.querySelector('.list__profesionales').style.display = "block";

    let alumno;

    for( let i = 0; i < lista.length ; i++ ){

        alumno = lista[i];

        let tr = `<tr>    
            <td>${alumno.student_id}</td>
            <td>${alumno.first_name} </td>
            <td>${alumno.last_name}</td>
        </tr>`;

        bodyList.innerHTML += tr;

    }

}

async function getAlumnos(){

    const id  = document.querySelector('#id').value;

    console.log(id);

    document.querySelector('#form').reset();

    let url   = `http://localhost:3000/alumnos/${id}`;
    let param = {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        method: "GET"
    }

    try {
        let data = await fetch( url, param );
        let result = await data.json();

        console.log( result );

        printTable( result );
        
    } catch (error) {
        console.log( error );
    }
}

async function postAlumnos(){
    
    try {

        let nombre   = document.querySelector('#nombre').value;
        let apellido = document.querySelector('#apellido').value;
    
        let nuAlumno = {
            first_name: nombre,
            last_name: apellido 
        }

        document.querySelector('#form').reset();
    
        console.log(nuAlumno);
    
        let url   = `http://localhost:3000/alumnos`;
    
        let param = {
    
            headers:{
                "content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify( nuAlumno ),
            method: "POST"
    
        }

        let data = await fetch ( url, param );
        let result = await data.json();

        console.log( result );
        
    } catch (error) {
        
        console.log( error );

    }

}

async function putAlumnos(){

    try {
        let nombre   = document.querySelector('#nombre').value;
        let apellido = document.querySelector('#apellido').value;
        let id       = document.querySelector('#id').value;

        let nuInfo = {
            "first_name": nombre ? nombre : null,
            "last_name": apellido ? apellido : null,
            "student_id": id,
        }

        document.querySelector('#form').reset();
    
        let url   = `http://localhost:3000/alumnos`;
    
        let param = {
    
            headers:{
                "content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify( nuInfo ),
            method: "PUT"
    
        }

        console.log( param );

        let data   = await fetch ( url, param );
        let result = await data.json();

        console.log( result );

        printTable( result.resultado );

    } catch (error) {
        
        console.log( error );

    }

}

async function deleteAlumno(){

    try {
        let i = document.getElementById('id').value;

        let indi = {
            "student_id": i,
        }

        document.querySelector('#form').reset();

        let url   = `http://localhost:3000/alumnos`;
        
        let param = {
            
            headers:{
                "content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify( indi ),
            method: "DELETE"
        }
        
        console.log( param );
        
        let data   = await fetch( url, param );
        let result = await data.json();

        console.log( result );

    } 
    catch (error) {
        
        console.log( error );

    }

}