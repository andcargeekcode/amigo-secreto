// Arrays para almacenar amigos y evitar repeticiones
let amigos = [];
let listaAmigosSorteados = [];

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del input
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim(); // trim elimina espacios en blanco

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor ingrese un nombre.");
        return; // Salir de la función si está vacío
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Mostrar los nombres almacenados en la consola
    console.log("Amigos:", amigos);

    // Limpiar el input
    inputAmigo.value = "";
}

// Función para sortear un amigo
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Verificar si ya se sortearon todos
    if (listaAmigosSorteados.length === amigos.length) {
        alert("Todos los amigos han sido sorteados. Se reiniciará la lista.");
        listaAmigosSorteados = [];
    }

    let amigoSorteado;
    do {
        // Generar un índice aleatorio dentro del rango del array
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceAleatorio];
    } while (listaAmigosSorteados.includes(amigoSorteado)); // Asegurar que no se repita

    // Agregar el amigo sorteado a la lista de ya sorteados
    listaAmigosSorteados.push(amigoSorteado);

    // Mostrar el resultado en el HTML
    document.getElementById("resultado").innerHTML = `Amigo sorteado: ${amigoSorteado}`;

    // Mostrar en la consola
    console.log("Amigos sorteados:", listaAmigosSorteados);
}
