let printMedia = ( lista ) => {

    let bodyMedia = document.querySelector('.body__media');

    bodyMedia.innerHTML = '';

    document.querySelector('.list__media').style.display = "block";

    let info;

    for( let i = 0; i < lista.length ; i++ ){

        info = lista[i];

        let tr = `<tr>    
            <td>${info.student_id}</td>
            <td>${info.first_name}</td>
            <td>${info.last_name}</td>
            <td>${info.media}</td>
        </tr>`;

        bodyMedia.innerHTML += tr;

    }

}

let printApuntadas = ( lista ) => {

    let bodyAnotadas = document.querySelector('.body__apuntadas');

    bodyAnotadas.innerHTML = '';

    document.querySelector('.list__apuntadas').style.display = "block";

    let info;

    for( let i = 0; i < lista.length ; i++ ){

        info = lista[i];

        let tr = `<tr>    
            <td>${info.student_id}</td>
            <td>${info.first_name}</td>
            <td>${info.last_name}</td>
            <td>${info.title}</td>
        </tr>`;

        bodyAnotadas.innerHTML += tr;

    }

}

let printImpartidas = ( lista ) => {

    let bodyImpartidas = document.querySelector('.body__impartidas');

    bodyImpartidas.innerHTML = '';

    document.querySelector('.list__impartidas').style.display = "block";

    let info;

    for( let i = 0; i < lista.length ; i++ ){

        info = lista[i];

        let tr = `<tr>    
            <td>${info.teacher_id}</td>
            <td>${info.first_name}</td>
            <td>${info.second_name}</td>
            <td>${info.title}</td>
        </tr>`;

        bodyImpartidas.innerHTML += tr;

    }

}


async function getMedia(){

    const id  = document.querySelector('#id').value;

    console.log(id);

    document.querySelector('#form').reset();

    let url   = `http://localhost:3000/media/${id}`;
    let param = {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        method: "GET"
    }

    try {
        let data = await fetch( url, param );
        let result = await data.json();

        printMedia( result );
        
    } catch (error) {
        console.log( error );
    }
};

async function getApuntadas(){

    const id  = document.querySelector('#id').value;

    console.log(id);

    document.querySelector('#form').reset();

    let url   = `http://localhost:3000/apuntadas/${id}`;
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

        printApuntadas( result );
        
    } catch (error) {
        console.log( error );
    }
}

async function getImpartidas(){

    const id  = document.querySelector('#id').value;

    document.querySelector('#form').reset();

    let url   = `http://localhost:3000/impartidas/${id}`;
    let param = {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        method: "GET"
    }

    try {
        let data = await fetch( url, param );
        let result = await data.json();

        printImpartidas( result );
        
    } catch (error) {
        console.log( error );
    }
}

