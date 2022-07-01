///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//----------------------------------------------- EJERCICIO N°1 ---------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this._length = 0;
        this.head = null;
    }

    // Metodo - agregrar nodos a nuestra lista (creador de nodos)
    add(data) {
        let newNode = new Node(data);
        let current = this.head;

        if (current === null) { // Si la lista esta vacia
            this.head = newNode;
            this._length++;
            return newNode;
        }
        else {// Si la lista no esta vacia
            while (current.next !== null) {
                current = current.next;
            }
        }
        current.next = newNode;
        this._length++;
        //return current.next;
    }

    // Metodo -  agregrar nodos en un lugar (indice) especifico
    insertAt(data, index) {// recibe la informacion y el lugar donde colocaremos el nodo

        let newNode = new Node(data);//Creador de nodos
        let current = this.head;//referencia
        let previus;

        if (index <= 0 || index > this._length) {
            return null;
        }
        else if (index === 1) {//
            newNode.next = current;// el nodo que queremos insertar tendra en next el nodo 1 que sta en current
            this.head = newNode;// Ahora current (o this.head) tiene ese nuevo nodo 1, y el nodo 1 pasa a ser el segundo nodo
        }
        else { // si el indice no es cero (posicion a colocar)
            let i = 1;
            while (i < index) {
                previus = current;// Guaradar al referencia del nodo anterior
                current = current.next;//Guardara la referencia del nodo  siguiente
                i++;
            }
            newNode.next = current;//El nuevo nodo a inserta econtro la posicion y agrega ensu next al nodo actual que se encontraba en la posicion que queria ingresar
            previus.next = newNode;//El nodo anterios en su next ahora agrega el nuevo nodo
        }
        this._length++;// aumentamos el tamaño de la lista ya que agregamos un nuevo nodo.
    }

    // Metodo - remueve el nodo con la data especificada
    removeData(data) {
        let current = this.head;
        let previus = null;//referencia data anterior

        while (current !== null) {//Si current es null es o porque no tiene nodos o llego al final

            if (current.data === data) {// si privius es null es porque se tarata del head que no tiene nada
                if (previus === null) {
                    this.head = current.next //el head ahora contendra al segundo nono y el nodo 1 se desconecta
                }
                else {
                    previus.next = current.next;// si es el nodo final el que queremos eliminar sera null el next
                }
                this._length--;
                return current.data;// devolvemos el el valor del nodo eliminado
            }

            if (current.data !== data) {
                previus = current;// El anterior pasa a ser el actual
                current = current.next;//El actual pasa a ser el siguiente
            }
        }
        return null;
    }

    // Metodo -  remueve el nodo con la indice especificado
    removeFront(index) {
        let current = this.head;
        let previus = null;

        if (index <= 0 || index > this._length || index === null) {
            return null;
        }
        else if (index === 1) { // primer nodo de la lista
            this.head = current.next;
            this._length--;
        }
        else {
            for (let i = 1; i < index; i++) {
                previus = current;
                current = current.next;
            }
            previus.next = current.next;
            this._length--;
        }
        return current;
    }

    // Metodo -  Saber si la lista esta vacia
    isEmpty() {
        if (this._length === null || this._length === 0) return true+'!'+' '+'Tiene informacion';
        else return false+'!'+' '+'Tiene informacion';
    }

    // Metodo -  Saber el tamaño de la lista
    getSize() {
        return this._length;
    }

}
//Instanciando una lista (con sus nodos)
let list1 = new LinkedList();//Instancia 1
let list2 = new LinkedList();//Instancia 2
console.log(list1);
list1.add(2);//Nodo 1
list1.add(10);//Nodo 2
list1.add(8);//Nodo 3
list1.add(14);//Nodo 4

console.log(list1);

//Agregando un nuevo nodo en un lugar especifico
list1.insertAt(19, 3)
console.log(list1);

//Eliminando un nodo indicado por el dato
list1.removeData(14);
console.log(list1);

//Eliminando un nodo indicado por el indice
list1.removeFront(4);
console.log(list1);

//Preguntar si la lista esta vacia
console.log(list1.isEmpty());
console.log(list2.isEmpty());

//Preguntar por el tamaño de la lista
console.log(list1.getSize());
console.log(list2.getSize());

//Instanciando un nodo (nodo individuales)
let nodo1 = new Node(32);
let nodo2 = new Node(8);
console.log(nodo1, nodo2);