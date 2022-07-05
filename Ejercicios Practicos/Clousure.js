///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//----------------------------------------------- EJERCICIO N°1 ---------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//¿Que mostrara el console.log?

(function immediateA(a) {//Funcion IIFE
  return (function immediateB(b) {// Funcion IIFE
    console.log(a);// > 0
  })(1);
})(0);// a = 0

/* Muestra 0,ya que al llamar "immediateA" le asignamos directamente a = 1,cuando retornamos "immediateB" el console.log buscara el valor de a, al no encontrarlo en ese contexto ("immediateB") lo busca en el contexto siguiente ("immediateA"), el b = 1 nunca se mostrara ya que el parametro de b nunca fue usado*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//----------------------------------------------- EJERCICIO N°2 ---------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//¿Que mostrara el console.log?

let count = 0;
(function immediate() {// Funcion IIFE
  if (count === 0) {
    let count = 1;
    console.log(count);// > 1
  }
  console.log(count);// > 0
})();

/* Para el primer console.log() mostrara 1, ya que al buscar en ese contexto, esta declarada en let count = 1, mientras que para el segundo console.log() count no esta definida en ese contexto pero si esta definida en el conetxtop global como let count = 0 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//----------------------------------------------- EJERCICIO N°3 ---------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//¿Que mostrara el console.log?

for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i);// > 3, 3, 3
  }, 1000);
}

for (let i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i);// > 0, 1, 2
  }, 1000);
}

/*Va a mostrar 3 veces la funcion log(){console.log(i);} cada 1seg. El valor de i de los console.log() se tomara cuando termine la ultima interaccion, es decir en 3*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//----------------------------------------------- EJERCICIO N°4 ---------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//¿Que mostrara el console.log?
function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);// > 0
  }

  /*
  function log() {
      let message = `Count is ${count}`;
    console.log(message);// > 3
  }*/

  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

/*Muestra cero ya que en la fase de ejecucion del contexto  de "createIncrement" se establece let message con el primer valor de count que es 0 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//----------------------------------------------- EJERCICIO N°5 ---------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Escribe una función multiply()que multiplique 2 números:

function multiply(num1, num2) {
 // escribe tu codigo aqui...
}
Si multiply(num1, numb2)se invoca con 2 argumentos, debería devolver la multiplicación de los 2 argumentos.

Pero si se invoca con 1 argumento const anotherFunc = multiply(num1), la función debería devolver otra función. La función devuelta cuando se llama anotherFunc(num2)realiza la multiplicación num1 * num2.

multiply(4, 5); // => 20
multiply(3, 3); // => 9
const double = multiply(2);
double(5);  // => 10
double(11); // => 22
*/

function multiply(num1, num2) {
  if (num2 !== undefined) {
    console.log(num1 * num2);//> 20, 9
    return num1 * num2;
  } else {
    return function (num2) {
      console.log(num1 * num2);// > 10, 22
      return num1 * num2;
    }
  }
}

multiply(4, 5); // => 20
multiply(3, 3); // => 9
const double = multiply(2);
double(5);  // => 10
double(11); // => 22

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//------------------------------------ EJERCICIO N°6 (HOMEWORK) ---------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando un valor numérico que empieza en 1 e incrementa con cada invocación.

  Ejemplo:
  const nuevoContador = counter()
  nuevoContador()     // 1
  nuevoContador()     // 2
  nuevoContador()     // 3

  const otroContador = counter()
  otroContador()      // 1
  otroContador()      // 2
  otroContador()      // 3
   */

function counter() {
  let count = 0
  return function otherFunction() {
    //console.log(count += 1);// 1,2,3
    return count += 1;
  }

}
//console.log(counter);
let newCounter = counter();
console.log(newCounter());// > 1
console.log(newCounter());// > 2
console.log(newCounter());// > 3

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//------------------------------------ EJERCICIO N°7 (HOMEWORK) ---------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar otra vez cálculos que ya se hicieron anteriormente.

cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".

Ejemplo:
function square(n){
  return n * n
}

const squareCache = cacheFunction(square)

squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) 
*/

function cacheFunction(cb) {

  let cache = {};
  return function (arg) {
    if (!cache.hasOwnProperty(arg)) {//Si no esta la propiedad arg, la creamos en el objeto cache, arg tendra el 
      cache[arg] = cb(arg)//nombre de la propiedad agregar (es un numero), luego lepasamos arg al callback, este 
      return cache[arg];//resuelve la operacion agregando el valor a la propiedad de arg. devolvemos el valor de 
    } else {             //la propiedad arg
      return cache[arg];// si la propiedad ya esta creada retorna su valor
    }
  }

}

//Funcion callback
const cb = function (x) {
  return x * 2;
}

//Pase por parametro del callback
var funcionCache = cacheFunction(cb);

console.log(funcionCache(5));// > 10
console.log(funcionCache(2));// > 4 
console.log(funcionCache(6));// > 12 

var resultOne = funcionCache(2);
console.log(resultOne);// > 4
var resultTwo = funcionCache(3)
console.log(resultTwo);// > 6
var resultThree = funcionCache(8);
console.log((resultThree));// > 16

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//------------------------------------ EJERCICIO N°8 (FAKE CHECKPOINT) -------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Implementar la funcion 'exponencial' que recibe un parametro entero 'exp' y retorna una una funcion, nos referiremos a esta ultima como funcion hija, y a 'exponencial' como la funcion padre, la funcion hija debe de recibir un parametro y retornar dicho parametro elevado al parametro 'exp' de la funcion padre original 'exponencial'

Ejemplo:
> var sqrt = exponencial(2);
> sqrt(2);
< 4
> sqrt(3);
< 9
> sqrt(4);
< 16*/
function exponencial(exp) {
  return function (num) {
    return num ** exp;
  }
}
// Parametros "exp"
let e = exponencial(2);// Exponencial elevado a la 2
let e4 = exponencial(4);// Exponencial elevado a la 4
let e3 = exponencial(3);// Exponencial elevado a la 3

//Parametros "num"
console.log(e(3));// > 9
console.log(e4(4));// > 256
console.log(e3(4));// > 64