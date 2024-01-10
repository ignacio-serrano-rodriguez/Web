// cuando se haya cargado el documento, ejecutar lo que está dentro
$(document).ready(function()
{
	// ejecutar lo que está dentro al clickar el botón con id boton_1
	$("#boton_1").click(function()
	{
		$("p").hide();
	});

	$("#boton_2").click(function()
	{
		$("#codigo_1").hide();
	});

});