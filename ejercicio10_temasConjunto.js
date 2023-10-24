/*
Crea una página web HTML que contenga 3 párrafos que hablen sobre la informática y, bajo ellos, 
un menú desplegable que permite a los usuarios elegir un tema ("Claro", "Oscuro", "Colores"). 
Cambiar el tema de la página según la selección. Si el usuario elige "Claro", cambia los colores 
de fondo a blanco y texto a colores negro,  si elige "Oscuro", cambia el color de fondo a negro 
y texto a blanco, si elige "Colores", cambia el color de fondo a azul y el texto a amarillo.
Utiliza objetos para definir los colores de cada tema.
*/

const themes
={
    lightTheme
    :{
        backgroundColor: "white",
        paragraphColor: "#000000",
    },

    darkTheme 
    :{
        backgroundColor: "#000000",
        paragraphColor: "white",
    },

    coloursTheme
    :{
        backgroundColor: "blue",
        paragraphColor: "#f5ce0a",
    },
}

var paragraphs = document.getElementsByTagName('p');

function change_theme() 
{
    let themeSelect = document.getElementById("themeSelect").value;

    document.body.style.backgroundColor = themes[themeSelect].backgroundColor;

    for (var i = 0; i < paragraphs.length; i++) 
    {
        paragraphs[i].style.color = themes[themeSelect].paragraphColor;
    }
}