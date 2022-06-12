// const showToast = require("../../../toast");

function showToast(message, color)
{
    document.getElementById("toastText").innerText=message;
    let toastElement  = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}

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

function validar (user){

    let resultado = false;

    if( user.first_name == '' || user.first_name == "null" ){
        showToast("AVISO: Campo nombre no informado", "bg-warning");
    }
    else if( user.last_name == '' || user.last_name == "null"){
        showToast("AVISO: Campo apellido no informado", "bg-warning");
    }
    else{
        resultado = true;
    }
    
    return resultado;
}

function validarId (user){

    let resultado = false;

    if( user.id == '' || user.id == "null" ){
        showToast("AVISO: Campo Id no informado", "bg-warning");
    }
    else{
        resultado = true;
    }
    
    return resultado;
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
    
        let url   = `http://localhost:3000/alumnos`;

        if( validar(nuAlumno) ){

            let param = {
    
                headers:{
                    "content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify( nuAlumno ),
                method: "POST"
        
            }
    
            let data = await fetch ( url, param );
            let result = await data.json();

            if( result.err ){
                showToast("ERROR: " + result.err, "bg-danger");
            }
            else{
                showToast("Usuario Creado Correctamente", "bg-success");
            }

        }
        
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

        if( validarId(nuInfo) ){

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
    
            if( result.err ){
                showToast("ERROR: " + result.err, "bg-danger");
            }
            else{
                showToast("Usuario Actualizado Correctamente", "bg-success");
            }
            

        }
    

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

        if( validar(indi) ){

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
    
            if( result.err ){
                showToast("ERROR: " + result.err, "bg-danger");
            }
            else{
                showToast("Usuario Eliminado Correctamente", "bg-success");
            }

        }

    } 
    catch (error) {
        
        console.log( error );

    }

}

