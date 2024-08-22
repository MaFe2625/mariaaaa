//ejercicio 1 comparar edad
alert('hola')
let edad = prompt("ingresa tu edad:");

// Comparar la edad ingresada
if (edad >= 18) {
    alert("Eres mayor de edad");
} else {
    alert("Eres menor de edad");
}
// =================================================

//ejercicio 2 
let numero = prompt("ingresa un numero")
numero = Number(numero);
if (numero >= 0) {
    console.log("El número es positivo");
} else {
    console.log("El número es negativo");
}
// =================================

//ejercicio 3
let num = prompt("ingrese un num:");
num = Number(num);

if (num % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}
// ===============

//ejercicio 4
// Solicitar al usuario que ingrese el total de la compra
let total = prompt("Por favor, ingresa el total de la compra:");

// Convertir la entrada a un número
total = Number(total);
if (total > 100) {
    let descuento = total * 0.10;
    total = total - descuento;
    console.log('Se ha aplicado un descuento del 10%. El total con descuento es: ${total');
} else {
    console.log('El total es: ${total}, no se aplicó ningún descuento. ');
}
// ===========================


//ejercicio 5

let numero1 = prompt(" ingrese el primer número:");

let numero2 = prompt("ingrese el segundo número:");

numero1 = Number(numero1);
numero2 = Number(numero2);

if (numero1 > numero2) {
    console.log('El primer número (${numero1}) es mayor que el segundo número (${numero2}).');
} else if (numero1 < numero2) {
    console.log('El segundo número (${numero2}) es mayor que el primer número (${numero1}).');
} else {
    console.log("Ambos números son iguales.");
}
// ==============================

//ejercicio 6
let tuedad = prompt("ingresa cual es tuedad:");

edad = Number(edad);

if (edad < 12) {
    console.log("Eres un niño");
} else if (edad >= 12 && edad <= 17) {
    console.log("Eres un adolescente");
} else if (edad >= 18 && edad <= 64) {
    console.log("Eres un adulto");
} else if (edad >= 65) {
    console.log("Eres un adulto mayor");
} else {
    console.log("Edad no válida");
}
// ==============================
 //ejercicio 7 
let nota = prompt("ingresa una nota entre 0 y 100:");
nota = Number(nota);
if (nota >= 90 && nota <= 100) {
    console.log("Excelente");
} else if (nota >= 70 && nota < 90) {
    console.log("Bueno");
} else if (nota >= 50 && nota < 70) {
    console.log("Regular");
} else if (nota >= 0 && nota < 50) {
    console.log("Insuficiente");
} else {
    console.log("Nota no válida");
}
// ======================================
//ejercicio 8 

let opcion = prompt("Elige una opción de menú:\n1 para 'Pizza'\n2 para 'Hamburguesa'\n3 para 'Tacos'");

opcion = Number(opcion);

switch (opcion) {
    case 1:
        console.log("Has elegido Pizza");
        break;
    case 2:
        console.log("Has elegido Hamburguesa");
        break;
    case 3:
        console.log("Has elegido Tacos");
        break;
    default:
        console.log("Opción no válida");
}
// ==================================
//ejercicio 9 
let lado1 = prompt("Ingresa el primer lado del triángulo:");
let lado2 = prompt("Ingresa el segundo lado del triángulo:");
let lado3 = prompt("Ingresa el tercer lado del triángulo:");

lado1 = Number(lado1);
lado2 = Number(lado2);
lado3 = Number(lado3);

if (lado1 === lado2 && lado2 === lado3) {
    console.log("El triángulo es equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("El triángulo es isósceles");
} else {
    console.log("El triángulo es escaleno");
}
// ===========================
// ejercicio 10 

const numeroSecreto = Math.floor(Math.random() * 10) + 1;

let adivinanza = prompt("Adivina un número entre 1 y 10:");

adivinanza = Number(adivinanza);

if (adivinanza === numeroSecreto) {
    console.log("¡Has acertado!");
} else {
    console.log("Intenta de nuevo. El número era " + numeroSecreto);
}
// ====================
//ejercicio 11
let precioBase = prompt("Por favor, ingresa el precio base del producto:");

precioBase = Number(precioBase);
let descuento = 0;

if (precioBase > 500) {
    descuento = precioBase * 0.15;
} else if (precioBase >= 300 && precioBase <= 500) {
    descuento = precioBase * 0.10;
} else if (precioBase < 300) {
    descuento = precioBase * 0.05;
}

let precioFinal = precioBase - descuento;

console.log('El precio final después del descuento es: ${precioFinal}');
// ================================
//ejercicio 12 

let año = parseInt(prompt("Ingrese un año:"), 10);

if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
    console.log(año + " es un año bisiesto.");
} else {
    console.log(año + " no es un año bisiesto.");
}

// ========================
//ejercicio 13

let nombreUsuario = prompt("Por favor, ingresa tu nombre de usuario:");

let contrasena = prompt("Por favor, ingresa tu contraseña:");

if (nombreUsuario === "admin" && contrasena === "1234") {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
}
// ==============================
//ejercicio 14 


let hora = parseInt(prompt("Ingrese la hora (de 0 a 23):"), 10);
if (hora >= 6 && hora < 12) {
    alert("Buenos días");
} else if (hora >= 12 && hora < 18) {
    alert("Buenas tardes");
} else if ((hora >= 18 && hora <= 23) || (hora >= 0 && hora < 6)) {
    alert("Buenas noches");
} else {
    alert("La hora ingresada no es válida. Debe estar entre 0 y 23.");
}
// ==================
// ejercicio 15 
let peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));
let altura = parseFloat(prompt("Ingrese su altura en metros:"));

let imc = peso / (altura * altura);

if (imc < 18.5) {
    alert("Bajo peso");
} else if (imc >= 18.5 && imc <= 24.9) {
    alert("Peso normal");
} else if (imc >= 25 && imc <= 29.9) {
    alert("Sobrepeso");
} else if (imc >= 30) {
    alert("Obesidad");
} else {
    alert("Entrada no válida.");
}
