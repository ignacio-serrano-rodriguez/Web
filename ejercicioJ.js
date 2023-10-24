x = 0

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

C.) Porque hay un brake en el case con valor '0'.
*/