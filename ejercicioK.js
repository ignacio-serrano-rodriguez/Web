x = 1

switch (x) {
    case 0:
        x = x + 2;
        break;
    case 1:
        x = x * 2;
    case 2:
        x = x - 2;
    case 3:
        x = Math.pow(x,2);
        break;
    default:
        x = 12;
}

console.log(x);

/* 
A.) 0
B.) 1
C.) 2
D.) 12

A.) Porque se ejecutan los case '1','2' y '3' al no existir 'break' en el primero.
*/