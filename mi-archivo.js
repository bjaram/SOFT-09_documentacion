// Definimos las funciones
function saludar(nombre) {
  console.log(
    "Hola, " + nombre + ". ¡Bienvenida al ejercicio de Git y GitHub!",
  );
}

function sumar(a, b) {
  let resultado = a + b;
  console.log("La suma de " + a + " + " + b + " es: " + resultado);
}

// Punto de entrada principal
function main() {
  console.log("¡Hola, mundo desde JavaScript!");
  saludar("nombre");
  sumar(5, 3);
}

// Ejecutamos el programa
main();
