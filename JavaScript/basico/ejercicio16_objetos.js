/*
Crea un ojbeto llamado persona que almacena la información siguiente de una 
persona: nombre, apellidos (debe guardar apellido1, y apellido2), teléfono
(debe guardar fijo y móvil), dirección (debe guardar calle, número, piso
puerta, CP, ciudad y provincia) u curso.

Muestra por pantalla en un mismo alert estos valores (accediendo al objeto):
- nombre
- móvil
- calle
- CP
- curso
*/

let persona 
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

alert
(
    "nombre: " + persona.nombre + "\n" + 
    "movil: " + persona.telefono.movil + "\n" + 
    "calle: " + persona.direccion.calle + "\n" + 
    "cp:" + persona.direccion.CP + "\n" + 
    "curso: " + persona.curso
);

