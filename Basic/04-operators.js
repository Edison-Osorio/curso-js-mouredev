// Iperadores

// Operadores aritméticos

let a = 5;
let b = 10;
console.log(a + b); //  suma
console.log(a - b); //  resta console.log(a * b) //  suma
console.log(a * b); //   multiplicación
console.log(a / b); //  división

console.log(a % b); //  módulo -> resto de la división
console.log(a ** b); //  potencia Exponencial

console.log(a++); //Incremento

console.log(a--); //Decremento

// Operadores de asignación

let myVariable = 2;
console.log(myVariable);
myVariable += 2; //  suma
console.log(myVariable);
myVariable -= 2; //  resta
console.log(myVariable);
myVariable *= 2; //  multiplicación
console.log(myVariable);
myVariable /= 2; //  división
console.log(myVariable);
myVariable %= 2; //  módulo -> resto de la división
console.log(myVariable);
myVariable **= 2; //  potencia Exponencial
console.log(myVariable);

// Operadores de comparación
console.log(a > b); //  mayor que
console.log(a < b); //  menor que
console.log(a >= b); //  mayor o igual que
console.log(a <= b); //  menor o igual que
console.log(a == b); //  igual por valor
console.log(a != b); //  no igual por valor
console.log(a === b); //  igual por identidad (por tipo y valor)
console.log(a !== b); //  no igual por identidad (por tipo y valor)

// Truthy values (valores verdadero )
//Todos lo valores positivos y negativos menos el cero
//Todas la cadenas de texto menos las vacías
//Todos los valores booleanos excepto el false

//Falsy values (valores falso )
//Todos los valores de tipo booleano, excepto true
//Todos los valores null
//Todos los valores undefined
//Todos los valores NaN
//Todos los valores de tipo number, excepto los infinitos
//Todos los valores de tipo string, excepto las cadenas vacías

// Operadores lógicos
console.log(a && b); //  y and (&&)
console.log(a || b); //  o or (||)
console.log(!a); //  no not (!)

// Operadores ternarios
console.log(a ? b : c); //  condicional

let isRaining = true;
isRaining ? console.log("It is raining") : console.log("It is not raining");
isRaining = false;
isRaining ? console.log("It is raining") : console.log("It is not raining");
