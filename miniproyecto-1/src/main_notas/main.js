function showToast(message, color)
{
    document.getElementById("toastText").innerText=message;
    let toastElement  = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}

function validar (user){

    let resultado = false;

    if( user.date == '' || user.date == "null" ){
        showToast("AVISO: Campo fecha no informado", "bg-warning");
    }
    else if( user.mark == '' || user.mark == "null"){
        showToast("AVISO: Campo nota no informado", "bg-warning");
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

let printTable = ( lista ) => {

    let bodyList = document.querySelector('.body__list');

    bodyList.innerHTML = '';

    document.querySelector('.list__profesionales').style.display = "block";

    let nota;

    for( let i = 0; i < lista.length ; i++ ){

        nota = lista[i];

        let tr = `<tr>    
            <td>${nota.id_mark}</td>
            <td>${nota.date}</td>
            <td>${nota.mark}</td>
        </tr>`;

        bodyList.innerHTML += tr;

    }

}

async function getNotas(){

    const id  = document.querySelector('#id').value;

    console.log(id);

    document.querySelector('#form').reset();

    let url   = `http://localhost:3000/notas/${id}`;
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

async function postNotas(){
    
    try {

        let date   = document.querySelector('#date').value;
        let mark = document.querySelector('#mark').value;
    
        let nuMark = {
            date: date,
            mark: mark 
        }

        document.querySelector('#form').reset();
    
        console.log(nuMark);
    
        let url   = `http://localhost:3000/notas`;

        if( validar(nuMark) ){

            let param = {
    
                headers:{
                    "content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify( nuMark ),
                method: "POST"
        
            }
    
            let data = await fetch ( url, param );
            let result = await data.json();
    
            if( result.err ){
                showToast("ERROR: " + result.err, "bg-danger");
            }
            else{
                showToast("Nota Creada Correctamente", "bg-success");
            }

        }
        
    } catch (error) {
        
        console.log( error );

    }

}

async function putNotas(){

    try {
        let date   = document.querySelector('#date').value;
        let mark = document.querySelector('#mark').value;

        let nuMark = {
            date: date,
            mark: mark 
        }

        document.querySelector('#form').reset();
    
        let url   = `http://localhost:3000/notas`;

        if( validarId(nuMark) ){

            let param = {
    
                headers:{
                    "content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify( nuMark ),
                method: "PUT"
        
            }
    
            let data   = await fetch ( url, param );
            let result = await data.json();

            if( result.err ){
                showToast("ERROR: " + result.err, "bg-danger");
            }
            else{
                showToast("Nota Actualizada Correctamente", "bg-success");
            }

        }
    
        

    } catch (error) {
        
        console.log( error );

    }

}

async function deleteNota(){

    try {
        let i = document.getElementById('id').value;

        let indi = {
            "id_mark": i,
        }

        document.querySelector('#form').reset();

        let url   = `http://localhost:3000/notas`;

        if( validarId(indi) ){

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
                showToast("Nota Eliminada Correctamente", "bg-success");
            }

        }
        
    } 
    catch (error) {
        
        console.log( error );

    }

}