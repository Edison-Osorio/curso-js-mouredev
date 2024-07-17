// concadenación de cadenas de texto
let myName = "John";
let greeting = "Hello " + myName;

console.log(greeting);

// Logitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0]);
console.log(greeting[11]);

// Metodos comunes
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.indexOf("John")); // Enseña el indice donde se encuentra la palabra
console.log(greeting.includes("hello")); // retorna cuando true o false si encuentra el valor
console.log(greeting.slice(0, 7)); // solo se queda con la cantidad de caracteres que se le inican
console.log(greeting.replace("John", "Edison"));

// Template literals (plantillas literales)

let message = `Hola, este es mi
curso de javascript`

console.log(message)

console.log(`Hola ${myName}`);