/* 1. addArrayProperty
Dado un objeto, una clave y un array, "addArrayProperty"
establece una nueva propiedad sobre el objeto en la clave dada, 
con su valor establecido en el array dado.*/

function addArrayProperty(obj, key, array) {
  obj[key] = array;
  return obj;
}

let myObj = {};
let myStr =  'myProperty';
let myArray = [1, 3];

addArrayProperty(myObj, myStr, myArray);
console.log(myObj.myProperty); // --> [1, 3]


