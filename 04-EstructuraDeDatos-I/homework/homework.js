'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

//Factorial de un numero
//5! = 5*4!=5*4*3!=5*4*3*2!=5*4*3*2*1!
//1!=1 este es mi condicion de corte
//0!= 1
function nFactorial(n) {
  if (n === 1) return 1;
  if (n === 0) return 1;
  if (n < 0) return 0;

  return nFactorial(n - 1) * n;
}
//Formula Fibonacci F(n) = F(n - 1)+ F(n - 2)
// F(0) = 0 , F(1) = 1 y F(-n) = 0  Estas son nuestras condiciones
// F(5) = F(4) + F(3)
//      = F(3) + F(2) + F(2) + F(1)
//      = F(2) + F(1) + F(1) + F(0) + F(1) + F(0) + 1
//      = F(1) + F(0) + 1 + 1 + 0 + 1 + 0 + 1
//      =   1  +   0  + 4
//      =  5

function nFibonacci(n) {
  if (n === 1) return 1;
  if (n === 0) return 0;
  if (n < 0) return 0;

  return nFibonacci(n - 1) + nFibonacci(n - 2);
}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un elem respetando el orden.
  - dequeue: remueve un elem respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.
  
  Pueden utilizar class o función constructora.
  */
 
 /*-----Variable acumulador para llevar la cantidad de 
 elementos que hay en la fila----------*/
 var tamaño = 0;

/*Planteamos nuestra classe*/
class Queue {
  constructor() {
    this.fila = []; //propiedad fila 
  }
  /*------Metodo que agrega elementos a la fila y aumenta
  el acumulador por cada elemento-------*/
  enqueue(elem) {
    this.fila.push(elem);
    tamaño++;
  }
  /*-----Metodo que remueve elementos de la fila y disminuye
  el acumulador por cada elemento------*/
  dequeue(elem) {
    if (this.fila === null) { return undefined; }
    else {
      tamaño--;
      return this.fila.shift(elem);
    }
  }
  /*-----Metodo que retorna la cantidad de elementos en la
  fila------*/
  size() {
    return this.fila.length;
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
