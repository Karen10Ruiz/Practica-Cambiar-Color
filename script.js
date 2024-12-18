//alert ("EXAMEN")

/*Traer refrencias al parrafo y botón */

const button = document.getElementById("button"); 
const color = document.getElementById("color");

/* Manejar el evento */

button.addEventListener( "click", cambiarColor );

/* Definir la función */

function cambiarColor() {
 /* Código que se ejecuta */

// Función anidada

function colores() {
     /* Código que se ejecuta */
    const opciones = "0123456789abcdef";
    let colorhex = "#"; 

    /* Recorrer el string opciones */

    for (let i = 0 ; i < 6 ; i++) {
        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorhex += opciones[indiceAleatorio]; // #000000
    }

    return colorhex; 
}

  let colorAleatorio = colores(); //Actualiza el texto
  color.textContent = colorAleatorio; //actualiza el color de fondo
  document.body.style.backgroundColor = colorAleatorio
 
}