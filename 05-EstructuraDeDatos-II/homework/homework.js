"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
// Clase list
class LinkedList {
  constructor() {
    this._length = 0;
    this.head = null;
  }

  //Metodo 1: agrega nodos al final de la lista
  add(value) {

    let newNode = new Node(value);// Creamos una intancia de la clase nodo (es decir creamos un nodo)
    let current = this.head;// pasamos la referencia del head al current, para no modificar la referencia head 
    //para evitar que se modifique la referencia original en el futuro
    if (current === null) { // si curren es igual a null
      this.head = newNode; //al head le agregamos el primper nodo
      this._length++; // aumentamos la cantidad de nodos en la lista
      return newNode.value;// cortamos la ejecucion para no seguir con el siguiente codigo
    }

    while (current.next !== null) {// si current.next no es igual a null entra
      current = current.next; // current toma la referencia del siguiente nodo (propiedad next)
    }
    current.next = newNode;//agrega un nuevo nodo a current.next
    this._length++;// aumentamos la cantidad de nodos en la lista
    return newNode.value;// devolvemos el nodo creado
  };

  //Metodo 2: remover un nodo y retornar el valor de ese nodo eliminado
  remove() {
    let current = this.head;

    if (this.head === null) return null;// si la propiedad head es null devolvemos null

    if (current.next === null) {// si current.next e igual a null
      let valor = current.value; // creamos una variable donde se alamacene el valor del nodo
      this.head = null; // redefinimos la refereancia del head a null para borrar el nodo
      this._length--;// restamos 1 a la cantidad de nodos
      return valor;// devolvemos el value de ese nodo
    }
    //        c  
    //---->2---->4---->8---->null
    //head  next  next  next
    while (current.next.next !== null) { // mientras que dos next hacia  adelante no sea null
      current = current.next;// current toma la referencia del siguiente nodo
    }

    let valor = current.next.value;//Guardamos el valor al que apunta el primer next
    current.next = null;//Luego al primer next lo deconectamos cambiando la referencia a null
    this._length--;// restamos 1 a la cantidad de nodos
    return valor;// devolvemos el value de ese nodo

  };
  //Metodo 2: remover un nodo y retornar el valor de ese nodo eliminado
  search(value) {

    if (this.head === null) return null;// retornamos null si no ha nodos

    let current = this.head; // current toma la referencia de head

    while (current !== null) {
      if (current.value === value) return current.value;
      else if (typeof value === 'function') {
        if (value(current.value) === true) return current.value;
      }
      current = current.next; // current toma la referencia del siguiente nodo
    }
    return null;
  };
}

// Clase Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}



/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {

  this.numBuckets = 35;
this.buckets = [];
}

//Funcion hasheadora 
HashTable.prototype.hash = function (string) {
  let sum = 0;// variable donde vamos almacenar la suma del valor unicode de cada letra de la palabra string
  for (let i = 0; i < string.length; i++) {// recorremos cada letra de la palabra string
    sum += string.charCodeAt(i);// sumamos sum con el unicode de la letra i de lapalabra string
  }
  return sum % this.numBuckets;/*retornamos el index (identificador) de nuestra tabla hash es decir sera el indice de nuestro arreglo*/
};

HashTable.prototype.set = function (key, value) {
  if(typeof key !== 'string') throw new TypeError('Keys must be strings');
  let index = this.hash(key);// la string recibida se la pasamos a nuestra funcion haseadora y almacenamos su indice
  if(this.buckets[index] === undefined) {//si el indice de nuestra arreglo esta vacio,creamos un objeto en ese indice
     this.buckets[index] = {};
  }
  this.buckets[index][key] = value;/* de lo contrario si en el indice del arreglo si tiene un index le agregamos la propiedad key y su respectyivo valor*/
 };

HashTable.prototype.get = function (key) {
  let index = this.hash(key);// nos da el indice donde tenemos que ir a buscarlo
  return this.buckets[index][key]; // nos da el valor de la propiedad

 };
HashTable.prototype.hasKey = function (key) { 
  let index = this.hash(key);// guardamos el indice de la palabra que nos dan
  return this.buckets[index].hasOwnProperty(key);// preguntamos si ese indice esta la propiedad que nos dan
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
