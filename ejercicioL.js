x = 3

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
C.) 9
D.) 12

C.) Porque se ejecuta el case '3' y posteriormente tiene lugar un break.
*/