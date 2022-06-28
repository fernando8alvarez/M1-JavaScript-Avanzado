"use strict";


/* ENUNCIADO
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El árbol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

//-------------------- CREADOR DE ARBOLES (NODOS) ---------------------
function BinarySearchTree(value) {
  //solo puede tener 0, 1 o 2 hijos ---> Sub-arboles
  this.value = value;
  this.right = null;
  this.left = null;
}

//------------------------------------ CONTADOR DE NODOS ----------------------------------------
BinarySearchTree.prototype.size = function () {

  //En caso de no haber nodos (hijos) izquierdo ni derecho (root)
  if (this.left === null && this.right === null) return 1;

  //En caso de solo haber nodo (hijo) izquierdo
  if (this.left !== null && this.right === null) return 1 + this.left.size();

  //En caso de solo haber nodo (hijo)  derecho
  if (this.left === null && this.right !== null) return 1 + this.right.size();

  //En caso de si haber nodos (hijos) tanto derecho como izquierdo 
  if (this.left !== null && this.right !== null) return 1 + this.left.size() + this.right.size();
}

//---------------- AGREGAR NODOS ---------------------
BinarySearchTree.prototype.insert = function (value) {
  //   Menores   -   Mayores
  //      /             \
  //  IZQUIERDA        DERECHA

  //Si el valor es mayor ---> DERECHA
  if (value > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    }
    if (this.right !== null) {
      this.right.insert(value);//Recursion
    }
  }

  //Si el valor es menor ---> IZQUIERDA
  if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    }
    if (this.left !== null) {
      this.left.insert(value);//Recursion
    }
  }
}

//------------------------------------ BUSCADOR DE NODOS ------------------------------------------
BinarySearchTree.prototype.contains = function (value) {

  //Valor nodo root
  if (value === this.value) return true;//Esta es mi condicion de corte principal (el valor sí esta)

  //Mayor que el nodo root (DERECHA)
  if (value > this.value) { 
    if (this.right === null) return false;//Condición de corte alternativa (el valor no esta)
    else return this.right.contains(value);//Recursion (evaluamos el valor en esa referencia)
  }

  //Menor que el nodo root (IZQUIERDA)
  if (value < this.value) { 
    if (this.left === null) return false;//Condición de corte alternativa (el valor no esta)
    else return this.left.contains(value);//Recursion (evaluamos el valor en esa referencia)
  }
}

//----------------------------------- RECORRIDO BFS (AMPLITUD)--------------------------------
BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  //order = pre-order
  //order = in-order
  //order = post-order

  //PRE-ORDER
  if (order === 'pre-order') {//nodo - izq - derch
    cb(this.value);//Tomar ese valor
    if (this.left !== null) this.left.depthFirstForEach(cb, order);//Posicion izquierda ocupada
    if (this.right !== null) this.right.depthFirstForEach(cb, order);//Posicion derecha ocupada
  }

  //IN-ORDER
  if (order === 'in-order' || order === undefined) {//izq - nodo - derec
    if (this.left !== null) this.left.depthFirstForEach(cb, order);//Posicion izquierda ocupada
    cb(this.value);//Tomar ese valor
    if (this.right !== null) this.right.depthFirstForEach(cb, order);//Posicion derecha ocupada
  } 

  //POST-ORDER
  if(order === 'post-order') {//iz - derch - nodo
    if (this.left !== null) this.left.depthFirstForEach(cb, order);//Posicion izquierda ocupada
    if (this.right !== null) this.right.depthFirstForEach(cb, order);//Posicion derecha ocupada
    cb(this.value);//Tomar ese valor
  }
}

//---------------------------- RECORRIDO DFS (PROFUNDIDAD)---------------------------------
BinarySearchTree.prototype.breadthFirstForEach = function (cb, array) {
  if(array === undefined){   //primera vez que llamo la function, no tengo array
    var array = []; //Arreglo temporal de reordenamiento y llamado
  };

  cb(this.value);//Madamos el elemento al cb para que muestre el orden recorrido DFS
  if (this.left !== null) { array.push(this.left) };//agregamos el valor del nodo izquierdo
  if (this.right !== null) { array.push(this.right) };// agregamos el valor del nodo derecho
  if (array.length > 0) {array.shift().breadthFirstForEach(cb, array);}
  //                    |-------------|
  //             cortamos nuestro primer elemento del arreglo temporal
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
