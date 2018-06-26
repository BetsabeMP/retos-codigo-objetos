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

/* 2. Contador de propiedades
Dado un objeto como parámetro, contar la cantidad de propiedades
que este contiene y retornarlo. */

const objectPropertiesCounter = (object) => {
  return Object.keys(object).length;
};

console.log(objectPropertiesCounter({ 'name': 'John', 'lastname': 'Doe' }));

/* 3. removeStringValuesLongerThan
Dado un número y un objeto,"removeStringValuesLongerThan" 
elimina cualquier propiedad en el objeto dado cuyos valores son cadenas de texto
más largas que el número dado.*/

const obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};

function removeStringValuesLongerThan (num, obj) {
for (let key in obj) {
  if (obj [key].length > num) {
    delete obj [key];
    console.log (obj);
  }
}
}
removeStringValuesLongerThan(6, obj);

/* 4. getElementOfArrayProperty
Dado un objeto, una clave y un índice numérico, 
getElementOfArrayProperty devuelve el valor del elemento 
en el índice dado del arreglo localizado dentro del objeto dado en la clave dada.
Si el arreglo está vacío, debería devolver undefined.
Si el índice dado está fuera de rango del arreglo ubicado en la clave dada, debería devolver undefined.
Si la propiedad en la clave dada no es un arreglo, debería devolver undefined.
Si no hay ninguna propiedad en la clave, debería devolverse undefined.*/

const objR = {
  key: ['Jamil', 'Albrey']
};

function getElementOfArrayProperty (obj, key, index) {
  if (obj [key] === undefined) {
    return undefined;
  }
  if (Array.isArray(obj[key]) === false) {
    return undefined;
  }
  return obj[key][index];
}

let output = getElementOfArrayProperty(obj,'key',0);
console.log(output);

/* 5. greetCustomer
Dando un nombre, greetCustomer devuelve un saludo basado en cuántas veces
ese cliente ha visitado el restaurante.

El saludo debe ser diferente, dependiendo del nombre de la reservación.

Caso 1 - Cliente desconocido (el nombre no está presente en los datos de cliente):
var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'

Caso 2 - Cliente que ha visitado sólo una vez (el valor de las visitas es 1)
var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

Caso 3 - Repetir cliente: (valor de' visitas' es mayor que 1)
var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
Notas:

Tu función no debe alterar el objeto customerData para actualizar el número de visitas.
No codificar los datos exactos de la muestra. */

const customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(name) {
  let greeting = "";

  if (customerData[name] === undefined) {
    greeting = "Welcome! Is this your first time?";
  } else if (customerData[name].visits == 1) {
    greeting ="Welcome back, " + name + "! We're glad you liked us the first time!";
    } else if (customerData[name].visits > 1) {
      greeting = "Welcome back, " + name + "! So glad to see you again!";
      }

  return greeting;
}

console.log(greetCustomer('Joe'));
