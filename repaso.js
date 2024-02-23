// //*Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar//*

// function VerificarNumero(numero) {
//   if (numero % 2 === 0) console.log("Es par");
//   else console.log("es impar");
// }

// VerificarNumero(5);

// // Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

// function QuienEsMayor(num1, num2) {
//   if (num1 > num2) {
//     console.log("El primer numero es mayor");
//   } else if (num1 < num2) {
//     console.log("El segundo numero es mayor");
//   } else {
//     console.log("Son iguales");
//   }
// }

// QuienEsMayor(5, 7);

// // Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

// function ComprobacionMultiplo(numero) {
//   if (numero % 5 === 0) console.log("Es multiplo");
//   else {
//     console.log("No es multiplo");
//   }
// }

// ComprobacionMultiplo(4);

// // Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

// function EscaleraDeNumeros(numero) {
//   for (let i = 0; i <= numero; i++) console.log(i);
// }

// EscaleraDeNumeros(8);

// // Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

// function MuchasPalabras(numero, palabra) {
//   for (let i = 0; i < numero; i++) console.log(palabra);
// }

// MuchasPalabras(5, "messi");

// // Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

// function imprimirArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }

// imprimirArray([1, 2, 3, 4, 5, 6, 7]);

// Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo.

// function ArrayExcepto5ta(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (i !== 4) {
//       console.log(array[i]);
//     }
//   }
// }

// ArrayExcepto5ta([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function MultiplicadoDeArray(array, numero) {
  for (let i = 0; i < array.length; i++) {
    const resultado = array[i] * numero;
    console.log(resultado);
  }
}

const numeros = [1, 2, 3, 4, 5];
MultiplicadoDeArray(numeros, 5);
