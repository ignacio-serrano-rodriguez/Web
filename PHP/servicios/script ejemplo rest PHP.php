<?php

// Configurar cabeceras de respuesta informando que el contenido del body es en formato JSON
header('Content-Type: application/json');

// Obtener el método de solicitud y la ruta
$metodo = $_SERVER['REQUEST_METHOD'];
$ruta = $_SERVER['REQUEST_URI'];

// Simulando una base de datos simple
$datos = array(
    1 => array("id" => 1, "nombre" => "José"),
    2 => array("id" => 2, "nombre" => "María")
);

// Dividir la ruta en fragmentos para tratamiento posterior
$fragmentos = explode('/', trim($ruta, '/'));

// Obtener el nombre del recurso y su id
// Por ejemplo: de una ruta del tipo /personas/1
$recurso = array_shift($fragmentos);
$recursoId = array_shift($fragmentos);

// Adaptar la respuesta según el método
switch ($metodo) {
    case 'GET':
        if ($recurso == 'personas') {
            // Obtener todos los recursos
            echo json_encode($datos);
        } elseif ($recurso == 'personas' && is_numeric($recursoId) && isset($datos[$recursoId])) {
            // Obtener un recurso por ID
            echo json_encode($datos[$recursoId]);
        } else {
            http_response_code(404); // No encontrado
            echo json_encode(array("mensaje" => "Recurso no encontrado"));
        }
        break;
    case 'POST':
        if ($recurso == 'personas') {
            // Crear un nuevo recurso
            // Crear un nuevo registro en una BD o cualquier otro medio persistente
            //    pero aquí los datos los tenemos grabados en el mismo script

           $newID = 0; // Sustituir por identificador del objeto nuevo creado 

            // se puede devolver un mensaje como:
            echo json_encode(array("mensaje" => "Persona creada", "id" => $newID));
        } else {
            http_response_code(404); // No encontrado
            echo json_encode(array("mensaje" => "Recurso no encontrado"));
        }
        break;
    case 'PUT':
        if ($recurso == 'personas' && is_numeric($recursoId) && isset($datos[$recursoId])) {
            // Actualizar un recurso por ID
            $persona = [
                "id" => $recursoId, 
                "nombre" => $_POST["nombre"]
            ]
            $datos[$recursoId] = $persona;
            $respuesta = [
                "mensaje" => "Persona actualizada",
                "persona" => $datos[$recursoId]
            ];
            echo json_encode($respuesta);
        } else {
            http_response_code(404); // No encontrado
            echo json_encode(array("mensaje" => "Recurso no encontrado"));
        }
        break;
    case 'DELETE':
        if ($recurso == 'personas' && is_numeric($recursoId) && isset($datos[$recursoId])) {
            // Eliminar un recurso por ID
            unset($datos[$recursoId]);
            echo json_encode(array("mensaje" => "Persona eliminada"));
        } else {
            http_response_code(404); // No encontrado
            echo json_encode(array("mensaje" => "Recurso no encontrado"));
        }
        break;
    default:
        http_response_code(405); // Método no permitido
        echo json_encode(array("mensaje" => "Método no permitido"));
        break;
}
