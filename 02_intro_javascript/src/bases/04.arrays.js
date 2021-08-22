// Arrays en JS

const array2 = new Array(100); //metodo para hacer arrays con dadas posiciones

console.log(array2);

const array = [1, 2, 3, 4];
//array.push(1); no es recomendable usar push ya que modifica al objeto principal linkeado.

console.log(array);

let array3 = [...array, 5];

console.log(array);
console.log(array3);

//callback: funcion que se ejecuta dentro de metodos.
const array4 = array3.map(function (numero) {
  return numero;
});
//se debe especificar en return que se desea que se devuelva, sino aparecera como undefined

console.log(array4);
