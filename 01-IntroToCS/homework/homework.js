'use strict'
 
function BinarioADecimal(num) {
  // tu codigo aca
  
  var numDecimal = 0;
  var acum = 0;
  for (let i = num.length-1; i >=0; i--) {

      numDecimal += parseInt(num[i])*(Math.pow(2,acum));
      acum = acum + 1;
      //OTRA FORMA
      //numDecimal += Number(num[i])* Math.pow(2, acum++);
  }
  return numDecimal;
}

function DecimalABinario(num) {
  // tu codigo aca

  var binario = []; //array de los residuos
  var cociente = num;// el cociente de dividir num/2 (cambia)

  do {
    binario.push((cociente % 2).toString());//pusheamos el residuo transformado en string al array
    cociente = Math.floor(cociente /2);// actualizamos el cociente siendo siempre un entero
  } while (cociente >= 1);// 
   
   if(cociente === 1){ // Si al final de la divicion el cociente ===1
     binario.push(cociente.toString());// lo pusheamos transformandolo a string al array
   };
   
 return(binario.reverse().join('')); // revertimos la cadena y la juntamos

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}