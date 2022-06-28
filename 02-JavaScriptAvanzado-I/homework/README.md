
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
// Numeros Romanos: contexto de ejecucion y numero entre parentesis: orden de impresion
x = 1; // error x no esta definida > undefined
var a = 5; // a esta definida
var b = 10; // b esta definida
var c = function(a, b, c) { // c esta definida como una funcion
  var x = 10;
  console.log(x);// (II) > 10 (1)
  console.log(a); // (II) > 8 (2)
  var f = function(a, b, c) {
    b = a; // 8
    console.log(b);// (III) > 8 (3)
    b = c; //9
    var x = 5;
  }
  f(a,b,c);// (II) > 8
  console.log(b);//(II) > 9 (4)
}
c(8,9,10); // > (I) > 10, 8 y 9
console.log(b);// (I) > 10 (5)
console.log(x); // (I) > error x no esta definida > undefined (6)

// Imprimira: 10, 8, 8, 9, 10, Error
```

```javascript
// Numeros Romanos: contexto de ejecucion y numero entre parentesis: orden de impresion
console.log(bar); // (I)> undefined (1) (bar existe pero no tiene un valor aun, ya que se imprime primero antes de que se le asigne)
console.log(baz);// (II)>  error baz no esta definido (2) quizas se detenga la ejecucion aqui
foo(); // (III)> 'Hola!' (3)
function foo() { console.log('Hola!'); }// (IV) 'Hola!' 
var bar = 1;//(V)
baz = II; // error baz no esta definido
// Imprimira: 'Hola!'
```

```javascript
// Numeros Romanos: contexto de ejecucion y numero entre parentesis: orden de impresion
var instructor = "Tony"; //(I)
if(true) {
    var instructor = "Franco";//(II)
}
console.log(instructor); //(III) > "Franco" ya que a instructor le reasigno su valor (1)
// Imprimira: "Franco"
```

```javascript
// Numeros Romanos: contexto de ejecucion y numero entre parentesis: orden de impresion
var instructor = "Tony";//(I)
console.log(instructor); //(II) > "Tony"(1)
(function() { // Funccion IIFE
   if(true) {
      var instructor = "Franco"; //(III)
      console.log(instructor); //(IV) "Franco" . este no puede salir de la funcion (2)
   }
})();
console.log(instructor);//(V) > "Tony" (3)
// Imprimira: "Tony", "Franco", "Tony"
```

```javascript
// Numeros Romanos: contexto de ejecucion y numero entre parentesis: orden de impresion
var instructor = "Tony";//(I)
let pm = "Franco";//(V)
if (true) { //(II)
    var instructor = "The Flash";//(VI)
    let pm = "Reverse Flash";// let esta declarada en otro bloque de codigo
    console.log(instructor);//(VII) > "The Flash" (1)
    console.log(pm);//(VIII) > "Reverse Flash" (2)
}
console.log(instructor);// (III) > "The Flash" (3)
console.log(pm);//(IV) > "Franco" (4)
// Imprimira: "The Flash", "Reverse Flash", "The Flash", "Franco"
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // > 2 (ya que JS cuando hay "/" transforma al "3" como un numero 3, "/" no esta definida para string)
"2" * "3" // > 6 ( "*" no esta definida para los string, los transforma a numeros)
"II" * "3"// > NaN (ya que JS detecta que II no es nungun number)
4 + 5 + "px"// > "9px" (ya que primero resuelve el primer sumando y luego lo concatena a la string)
"$" + 4 + 5// > "$45" (ya que en el primero sumando concatena a una estring y asi sigue con el 2do sumando)
"4" - 2 // 2 
"4" - II // > Error "II" no esta definido
"4px" - 2 // > NaN  ( ya que la resta no esta definida para strings y pasara numeros las string y como no es numero devuelve Nan)
"4px" - II // > Error "II" no esta definido
7 / 0 // > Infinito
{}[0] // [0]  (Las {} la interpreta como un bloque de codigo vacio, Js lo ignora y dice que lo que hay es un array . dependera de donde esta siendo ejecutado navegador, editor...)
parseInt("09") // > 9
5 && 2 // > 2 (ya que evalua si la primera expresion es verdadera, y como si lo es devuelve la segunda expresion)
5 && II // Error  "II" no esta definido
2 && 5 // > 5 (ya que evalua si la primera expresion es verdadera, y como si lo es devuelve la segunda expresion)
II && 5 // Error "II" no esta definido
0 && 2 // > 0 (ya que como la primera expresion es 0, es decir false, ya la segunda expresion no la evalua, si no que muestra la primera)
""+2 // > '2'
5 || 0 // 5 (ya que al evaluara la primera expresion da true, y n necesita evaluar la segunda, muestra la primera)
0 || 5 // 5 (como la primera es false, pasa a la segunda y como es true la muestra)
[5]*[6]/[2] // > 15 (ya que la multiplicacion y divicion si esta definida para los arrays numericos).
[25]%[2] // > 1 (ya que el modulo si esta definido para los array de numeros)
['hola']%[2] // > NaN (el operador de modula no esta definido para las strings)
[3]+[3]-[10] // > 23 ("33"-10= 23 ya que la suma no esta definida para los arrays, entonces suma dos strings, y comola resta si esta definida para los arrays de numeros pasa la string a numero y resta)
3>2>1 // > false (3>2 true, true=1>1 false)
[] == ![] // > true (ya que [] == ![] ---> ""==!"" ---> false == false 0 == 0).
[]+2 // > '2'
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
// Numeros Romanos: contexto de ejecucion y numero entre parentesis: orden de impresion
function test() {
   console.log(a);//(II) > undefined (1)
   console.log(foo()); //(III) > 2 (2)

   var a = 1;//(IV)
   function foo() {//(V)
      return 2;
   }
}
test();//(I)
```

Y el de este código? :

```javascript
// Numeros Romanos: contexto de ejecucion y numero entre parentesis: orden de impresion
var snack = 'Meow Mix';//(I)

function getFood(food) { // (II)
      //foo = undefined ---> false
      //snack = undefined -- > undefined
    if (food) { //(IV)
        var snack = 'Friskies';// (V)
        return snack; 
    }
    return snack;//(VII) undefined (1)
}

getFood(false);//(III)
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());// > 'Aurelio De Rosa'

var test = obj.prop.getFullname;// test = function() {return this.fullname; }

console.log(test());// > undefined (ya que cuando ejecutamos la funcion el this hace referencia al objeto global y no tiene la propiedad fullname, por eso da undefined)
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);//(II) > 1
   setTimeout(function() { console.log(2); }, 1000);//---> por 3 segundos (V) > 2
   setTimeout(function() { console.log(3); }, 0);//---> por 0 segundos(IV) > 3
   console.log(4);//(III) > 4
}

printing();//(I)
/*Lo primero que pasaria es que invocaramos a nuestra funcion printing(), luego al ejecutarla en nuestro stack, se ejecuta el primerconsole.log(1) y sale de la pila, luego primer setTimeout, pero este pasa a la web api por un tiempo de 1seg, luego el segundo setTimeout pasa tambien a la web api por 0seg, mientras eso esta alli,lo segundo a ejecutar en el stack es nuestro segundo console.log(4), para salir inmediatamente de la pila. luego ahora si pasa el segundo setTimeout(function() { console.log(3); }, 0) y que su tiempo era de 0 seg y por ultimo setTimeout(function() { console.log(2); }, 1000) */
// Imprimira: 1,4,3,2
```
