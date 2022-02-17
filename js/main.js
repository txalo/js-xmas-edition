const $formulario = document.formulario;
const localStorageIndex = localStorage.length
/*
    - nombre
    - ciudad
    - comportamiento
    - descripcionRegalo
*/

//console.log(`Nombre: ${nombre} - Ciudad: ${ciudad} - Comportamiento: ${comportamiento} - Regalo: ${descripcionRegalo}`);

function validarCiudad (ciudad){
    if (ciudad === ""){
        return "Debe seleccionar una ciudad.";
    }
    
    return '';
}

function validarRegalo (descripcionRegalo){
    if (descripcionRegalo.length >= 100){
        return "La descripcion no debe superar los 100 caracteres."
    }else if (descripcionRegalo === ""){
        return "La descripcion no puede estar vacia."
    }else if (!/^[A-z0-9,\._ ]+$/.test(descripcionRegalo)){
        return "La descripcion solo puede contener letras, numeros y estos caracteres , . _"
    }else{
        return '';
    }
}

function validarNombre(nombre){
    if (nombre.length === 0){
        return 'El nombre no puede estar vacio.';
    }

    if (!/^[a-z]+$/i.test(nombre)){
        return 'El nombre solo puede tener letras.'
    }

    if (nombre.length > 50){
        return 'El nombre debe ser menor a 50 caracteres.';
    }
    
    return '';
}

function guardarDatosEnLocalStorage (nombre, descripcion){
    let key = 'usuario' + localStorageIndex;
    localStorage.setItem (key, JSON.stringify({nombre: nombre, 'descripcion-regalo': descripcion}))
}

/* 
# Event Bubbling
: Demostracion.

document.querySelectorAll("*").forEach(function(element){
    element.onclick = function(){ console.log (element.tagName)}
})
*/
function validarFormulario(event){ 
    const nombre = $formulario.nombre.value;
    const ciudad = $formulario.ciudad.value;
    const descripcionRegalo = $formulario['descripcion-regalo'].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo,
    };

    const esValido = manejaErrores(errores) === 0;

    if (esValido){
        $formulario.className = 'oculto';
        guardarDatosEnLocalStorage(nombre, descripcionRegalo);
        document.querySelector('#exito').className = '';
        setTimeout(function(){ location.href = 'wishlist.html'}, 5000);
    }

    event.preventDefault();   

}

function manejaErrores(errores){
    
    const keys = Object.keys(errores);
    const $contErrores = document.querySelector("#errores");
    let cantidadErrores = 0;
    
    keys.forEach(function(key){
        if (errores[key]){
            $formulario[key].classList.add('error');
            // Pregunta: Que es mejor: crear una variable con document.querySelector('#error-'+key) o
            // hacer la comparacion directamente en el if? 
            if(!document.querySelector('#error-'+key)){
                const nuevoError = document.createElement('li');
                nuevoError.id = 'error-'+key; 
                nuevoError.innerText = errores[key];
                $contErrores.appendChild(nuevoError);
            }else{
                document.querySelector('#error-'+key).innerText = errores[key];
            }
            cantidadErrores ++;            
        }else{
            $formulario[key].classList.remove('error');
            const errorKey = document.querySelector('#error-'+key);
            if(errorKey){
                $contErrores.removeChild(errorKey);
            }
        }
    });
    return cantidadErrores;
}

$formulario.onsubmit = validarFormulario;