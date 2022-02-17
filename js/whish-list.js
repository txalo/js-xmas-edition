const $listaDeseos = document.querySelector("#lista-deseos");
console.log(localStorage)
function mostrarDeseos(){
    const keys = Object.keys(localStorage);
    keys.forEach ( key => {
        let data = JSON.parse(localStorage.getItem(key));
        let li = document.createElement('li');
        li.innerHTML = `<b>${data.nombre}</b>: ${data['descripcion-regalo']}`
        $listaDeseos.appendChild(li);
    })
}

document.addEventListener('onload', mostrarDeseos());