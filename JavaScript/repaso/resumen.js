// CONDICIONAL TERNARIO

x = ((0==0)? "verdadero" : "falso");
console.log(x);
console.log();

// IMPLEMENTACIÓN ARRAYS Y MOSTRAR

let colores = ["azul", 1, 2.3, 'a'];

for (let i in colores)
{
    console.log(colores[i]);
}
console.log();

// IMPLEMENTACIÓN DE OBJETOS Y MOSTRAR PROPIEDADES

let persona_1
={
    dni: "1",
    nombre: "nacho",
    anio: "2000"
}

for (propiedad in persona_1)
{
    console.log(propiedad + ": " + persona_1[propiedad]);
}

console.log();

// IMPLEMENTACIÓN DE OBJETOS DE OBJETOS y MOSTRAR

let persona_2
={
    nombre: "Ignacio",

    apellidos
    :{
        apellido1: "Serrano",
        apellido2: "Rodríguez",
    },

    telefono
    :{
        fijo: "123",
        movil: "456",
    },

    direccion
    :{
        calle: "ordenador",
        numero: 2,
        piso: 3,
        puerta: 4,
        CP: 5,
        ciudad: "Jerez",
        provincia: "Cádiz",
    },

    curso: 6,
};

console.log("nombre: " + persona_2.nombre);
console.log("movil: " + persona_2.telefono.movil);
console.log("calle: " + persona_2.direccion.calle );
console.log("cp:" + persona_2.direccion.CP);
console.log("curso: " + persona_2.curso);
console.log();

// FUNCIONES CADENAS (INMUTABLES)
let cadena = "HoLa MuNdo";
console.log(cadena);
// toLowerCase()
console.log(cadena.toLowerCase());
// toUpperCase()
console.log(cadena.toUpperCase());
// replace()
console.log(cadena.replace("o","X"));
// slice/substring(inicio incluido, corte no incluido) 
console.log(cadena.slice(0,4));
console.log(cadena.substring(0,4));
console.log(cadena.slice(5,cadena.length));
console.log(cadena.substring(5,cadena.length));
// charAt()
console.log(cadena.charAt(0));
console.log(cadena.charAt(cadena.length-1));
// split(separador)
console.log(cadena.split(" "));

// FUNCIONES ARRAYS (MUTABLES)
let array = ["h", "o", "l", "a", "", "m", "u", "n", "d", "o"];
console.log(array);
//reverse()
console.log(array.reverse());
//join(sparador)
console.log(array.join(""));
//sort()
console.log(array.sort());
//slice()
console.log(array.slice(0,4));