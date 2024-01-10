/*
(indexof)
De una lista de invitados, se quiere eliminar al invitado Miguel ya que ha cancelado su asistencia (Ana, Marcos, Miguel, Julia, Lucia)
*/
let arrayInvitados = ["Ana", "Marcos", "Miguel", "Julia", "Lucía"];
arrayInvitados.splice(arrayInvitados.indexOf("Miguel"), 1);
console.log(arrayInvitados);