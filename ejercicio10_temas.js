/*
Crea una página web HTML que contenga 3 párrafos que hablen sobre la informática y, bajo ellos, 
un menú desplegable que permite a los usuarios elegir un tema ("Claro", "Oscuro", "Colores"). 
Cambiar el tema de la página según la selección. Si el usuario elige "Claro", cambia los colores 
de fondo a blanco y texto a colores negro,  si elige "Oscuro", cambia el color de fondo a negro 
y texto a blanco, si elige "Colores", cambia el color de fondo a azul y el texto a amarillo.
Utiliza objetos para definir los colores de cada tema.
*/

const lightTheme = 
{
    backgrundColor: "white",
    paragraphColor: "#000000",
};
const darkTheme = 
{
    backgrundColor: "#000000",
    paragraphColor: "white",
};
const coloursTheme = 
{
    backgrundColor: "blue",
    paragraphColor: "#f5ce0a",
};

var paragraphs = document.getElementsByTagName('p');

function change_theme() 
{
    let theme = document.getElementById("themeSelect").value;
    let backgroundColor;
    let paragraphColor;

    if(theme == "lightTheme")
    {
        backgroundColor = lightTheme.backgrundColor;
        paragraphColor = lightTheme.paragraphColor;
    }
    else if(theme == "darkTheme")
    {
        backgroundColor = darkTheme.backgrundColor;
        paragraphColor = darkTheme.paragraphColor;
    }
    else if(theme == "coloursTheme")
    {
        backgroundColor = coloursTheme.backgrundColor;
        paragraphColor = coloursTheme.paragraphColor;
    }
    else
    {
        console.log("error selecting theme");
    }

    document.body.style.backgroundColor = backgroundColor;

    for (var i = 0; i < paragraphs.length; i++) 
    {
        paragraphs[i].style.color = paragraphColor;
    }
}