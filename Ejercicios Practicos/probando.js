//------Creador de Arboles--------
function BinarySearchTree(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

//-------Intancia del nodo raiz (root)------
let bst = new BinarySearchTree(5);
//root ---> {value:5, right:null, left:null}


BinarySearchTree.prototype.insert = function (value) {
    //Mayores - Menores
    //Mayores ---> DERECHA
    //Menores ---> IZQUIERDA

    // LADO DERECHO
    if (value > this.value) { // Si el valor dado es mayor que el valor raiz (entra)
        if (this.right !== null) { // si la propiedad rigth del nodo raiz no es null
            this.right.insert(value);// recursion (vuelve evaluar el valor en esa referencia)
        }
        if (this.right === null) {// si la referencia es null
            this.right = new BinarySearchTree(value);// En esa referencia creas un nuevo arbol con ese valor
        }
    }

    // LADO IZQUIERDO
    if (value < this.value) {
        if (this.left !== null) { // si la propiedad rigth del nodo raiz no es null
            this.left.insert(value);// recursion (vuelve evaluar el valor en esa referencia)
        }
        if (this.left === null) {// si la referencia es null
            this.left = new BinarySearchTree(value);// En esa referencia creas un nuevo arbol con ese valor
        }
    }
}

/*---Insertando valores
 nodo/hijos a mi nodo raiz----*/
bst.insert(6);
bst.insert(7);
bst.insert(10);
bst.insert(8);
bst.insert(2);

console.log(bst);

/*-------------------DIAGRAMACION DEL EJERCICIO----------------

                     5
                  /      \
                2          6
              /   \      /   \
            null null  null    7
                           /   \
                          null 10
                              /   \
                             8    null
                           /   \
                         null  null 
         
--------------------SALIDA DEL CONSOLE:LOG()------------------
bst = {
       "value": 5,
       "right": {
                 "value": 6,
                 "right": {
                            "value": 7,
                            "right": {
                                       "value": 10,
                                       "right": null,
                                       "left": {
                                                "value": 8,
                                                "right": null,
                                                "left": null
                                                }
                                      },
                            "left": null
                          },
                 "left": null
                },
        "left": {
                 "value": 2,
                 "right": null,
                 "left": null
                }
      }
     
   */


//-----Formula post-order----- 
//Izquierdad > Derecha > Nodo




BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) return true ; //si el parametro es igual a this.value ya puedo retornar true (esta es mi condicion de corte principal)
  if (value > this.value) { //si no son iguales, tengo que chequear si el parametro es mayor o menor que this.value, si es mayor va a su derecha
      if (this.right === null) return false; //si en this.right no hay valor, significa que recorrí todo derecha y no encontré el parametro, retornar falso (esta es mi condición de corte alternativa)
      else return this.right.contains(value); //si hay valor en this.right, tengo que correr de nuevo la funcion para ver si, ahora sí, es igual al parametro
    }

  if (value < this.value){ //si el parametro es menor que this.value, va a su izquierda
      if (this.left === null) return false; //si en this.left no hay valor, significa que recorrí todo izquierda y no encontré el parametro, retornar falso (esta es mi condición de corte alternativa)
      else return this.left.contains(value); //si hay valor en this.left, tengo que correr de nuevo la función para ver si, ahora si, el this.value es igual al parámetro
    }
}