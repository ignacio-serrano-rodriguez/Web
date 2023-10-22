var valores = [true, 5, false, "hola", "adios", 2];

// 1. Determina cuál de los dos elementos de texto es mayor (por longitud).
function part1() 
{
    if(valores[3].length > valores[4].length)
    {
        console.log(valores[3] + " es mayor que " + valores[4]);
    }
    else
    {
        console.log(valores[4] + " es mayor que " + valores[3]);
    }
}

/* 
2. Utilizando exclusivamente los dos valores booleanos del array, 
determina los operadores necesarios para obtener un resultado true y otro 
resultado false.
*/
function part2() 
{
    //true
    console.log((valores[0] || valores[2]));
    //false
    console.log((valores[0] && valores[2]));
}

/*
3. Determina el resultado de las cinco operaciones matemáticas realizadas 
con los dos elementos numéricos (suma, resta, multiplicación, división y módulo).
*/
function part3() 
{
    console.log("5 + 2 = " + (valores[1]+valores[5]));
    console.log("5 - 2 = " + (valores[1]-valores[5]));
    console.log("5 * 2 = " + (valores[1]*valores[5]));
    console.log("5 / 2 = " + (valores[1]/valores[5]));
    console.log("5 % 2 = " + (valores[1]%valores[5]));
}
