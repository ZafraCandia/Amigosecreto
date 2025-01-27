// Lista de nombres
let listaAmigos = [];
// F para agregar nombres
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim(); 
    // Validar no en blanco
    if (nombre === '') {
        alert('Por favor, introduce un nombre.');
        return;
    }
    // Agregar nombre y actualizar pag
    listaAmigos.push(nombre);
    actualizarLista();
    // Limpiar campo
    inputAmigo.value = '';
}

// F actualizar la lista pag
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 
listaAmigos.forEach((amigo, index) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    li.classList.add('name-item');
    lista.appendChild(li);
});
}
// F sorteo
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('Debe haber al menos dos nombres en la lista para realizar el sorteo.');
        return;
    }

    // Crear una copia de la lista y mezclarla
    const mezclados = [...listaAmigos].sort(() => Math.random() - 0.5);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar el resultado anterior

    mezclados.forEach((amigo, index) => {
        const li = document.createElement('li');
        const siguiente = mezclados[(index + 1) % mezclados.length]; // Circular
        li.textContent = `${amigo} regala a ${siguiente}`;
        li.classList.add('result-item');
        resultado.appendChild(li);
    });
}    
