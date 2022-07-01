'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  /*180 | 2
     90 | 2
     45 | 3 
     15 | 3 
      5 | 5
      1 | 1
      1 |*/

  //Factoriar: descomponer un numero en sus numeros primos
  let array = [1]; // El array empieza con uno ya que que todos tentran este valor
  let factor = 2; //valor que vamos ir aumentano con el cual vamos a dividir nuestro numero

  while (num > 1) {
    if (num % factor === 0) { // Si el numero no da residuos
      array.push(factor);// Lo agregamos al array
      num = num / factor;// obtenemos ahora el divisor nuevo, sobre el cual vamos a volver dividir
    } else factor++; // Si numero da residuos aumentamos i
  }
  return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // [7,5,3,9,1] El metodo bubbleSort consiste en tomar el numero mayor y compararlo con el 
  //             siguiente, si el siguiente es mayor, toma ese nuevo numero y lo compara con 
  //             el siguiente,y asi sucesivamente hasta llever el numero mayor al final del array

  let swap = true; //

  while (swap === true) {
    swap = false; //Establecemos false en una primera instancia para no entrar en un bucle infinito,luego podemos reestablecerolo a true
    for (let i = 0; i < array.length - 1; i++) {// No recorremos hasta el final ya que ahi es donde vamos a posicionar nuestro elemento mas grande
      if (array[i] > array[i + 1]) {//7 > 5
        let aux = array[i];//Guardamos el numero mayor 7
        array[i] = array[i + 1];//En la posicion i = 0 ---> 5 es decir [5,5,3,9,1]
        array[i + 1] = aux;//En la posicion i = 1 ---> 7 es decir [5,7,3,9,1]
        swap = true;//Podemos volver a entrar en el ciclo
      }
    }
    //Al llevar el numero mayor al final del arreglo con el for, entramos de nuevo en l while ya que swap es true, y reiniciamos i en el for
  }
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // array:  [9, 5, 1, 3, 4]
  //          0  1  2  3  4
  //   i:        *
  //   j:     *

  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let aux = array[i];// aux = 4
    while (j >= 0 && aux < array[j]) {
      array[j + 1] = array[j];// j+i = 5
      j--;//Si j < 0 sale del while, de lo contraior se repite
    }
    array[j + 1] = aux;
  }
  return array;
}

// array:  [1, 3, 4, 5, 9]

//   i:                 *
//   j:           *  

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // Array: [8, 6, 1, 2, 9, 0]
  // modif: [0, 6, 1, 2, 9, 8]
  // Ref:    0  1  2  3  4  5
  //            i
  //                  j

  for (let i = 0; i < array.length-1; i++) {

    let min = i; // min = 1 (ref) ---> guardamos la referencia del minimo

    for (let j = i + 1; j < array.length; j ++) {
      if(array[min] > array[j]){
        min = j; // min = 3 (ref)
      }
    }

    if (i !== min) {
      let aux = array[i]; // aux = 8
      array[i] = array[min];// ai = 0
      array[min] = aux;// amin = 8
    }
  }

  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
