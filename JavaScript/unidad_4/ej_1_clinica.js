// 1. Inicio de jornada
var turnos = [];
let paciente;
console.log(turnos);

// 2. Registro de pacientes
turnos.push(["Ana Gómez","9:00"]);
turnos.push(["Carlos Rodríguez","9:15"]);
turnos.push(["Elena López","9:30"]);
turnos.unshift(["Pedro López","8:45"]);
console.log(turnos);

// 3. Atención de pacientes
paciente = turnos.shift();
console.log(paciente);
console.log(turnos);

// 4. Nuevo registro de paciente
turnos.push(["Miguel Sánchez","10:00"]);
console.log(turnos);

// 5. Atención de pacientes
paciente = turnos.shift();
console.log(paciente);
console.log(turnos);

// 6. Cancelación de pacientes
paciente = turnos.pop();
console.log(paciente);
console.log(turnos);