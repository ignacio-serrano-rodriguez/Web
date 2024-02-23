<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header('Content-Type: application/json');

$metodo = $_SERVER['REQUEST_METHOD'];
$ruta = $_SERVER['REQUEST_URI'];

function todosLosProductos(){
    
    try{
        $bd = new PDO("mysql:dbname=skyphones;host=127.0.0.1","root","");
        $prep = $bd->prepare("SELECT * FROM productos");
        $prep->execute();
        $productos = $prep->fetchAll(PDO::FETCH_ASSOC);
        $arrayFinal = [];

        foreach($productos as $producto){
            $arrayFinal[$producto["id_producto"]] = $producto;
        }
    } catch (PDOException $e) {
        echo 'Error con la base de datos: ' . $e->getMessage();
    }
    
    return $arrayFinal;
}


try {
    $bd = new PDO("mysql:dbname=skyphones;host=127.0.0.1","root","");

    $datos = todosLosProductos();

    $fragmentos = explode('/', trim($ruta, '/'));
    // $apis = array_shift($fragmentos);

    $recurso = array_shift($fragmentos);
    $recursoId = array_shift($fragmentos);
    switch ($metodo) {
        case 'GET':
            if ($recurso == 'productos' && is_numeric($recursoId) && isset($datos[$recursoId])) {
                header("HTTP/1.1 200 OK");
                echo json_encode($datos[$recursoId]);

            } else if ($recurso != "productos" || is_numeric($recursoId) && !isset($datos[$recursoId])){
                header("HTTP/1.1 404 Not Found");

            } else if ($recurso == 'productos') {
                header("HTTP/1.1 200 OK");
                echo json_encode($datos);
            }
            break;
        case 'POST':
            $tiposPermitidos = ["m","t"];
            if ($recurso == 'productos') {
                if(isset($_POST['nombre']) && strlen($_POST['nombre']) > 0 &&
                isset($_POST['tipo']) && strlen($_POST['tipo']) == 1 && in_array($_POST['tipo'], $tiposPermitidos) &&
                isset($_POST['precio']) && intval($_POST['precio']) > 0 &&
                isset($_POST['cantidad']) && intval($_POST['cantidad']) > 0 &&
                isset($_POST['ventas']) && intval($_POST['ventas']) > -1){
                    
                    $prep = $bd->prepare("INSERT INTO productos (Nombre, Tipo, Precio, Cantidad, Ventas) VALUES (:nombre, :tipo, :precio, :cant, :ventas);");
                    $prep->execute(array(":nombre" => $_POST['nombre'], ":tipo" => $_POST['tipo'], ":precio" => intval($_POST['precio']), ":cant" => intval($_POST['cantidad']), ":ventas" => intval($_POST['ventas'])));
                    
                    $idProdAnadido = $bd->lastInsertId();
                    $prodAnadido = $bd->prepare("SELECT * FROM productos WHERE id_producto = $idProdAnadido");
                    $prodAnadido->execute();
                    header("HTTP/1.1 201 Created");
                    echo json_encode(array("mensaje" => "Se ha insertado el producto correctamente",$idProdAnadido => $prodAnadido->fetchAll(PDO::FETCH_ASSOC)));
                }else{
                    header("HTTP/1.1 400 Bad Request");
                    echo json_encode(array("mensaje" => "No se ha podido añadir el nuevo producto debido a que todos los datos pasados no son correctos", array($_POST['nombre'],$_POST['precio'],$_POST['tipo'],$_POST['cantidad'],$_POST['ventas'])));
                
                }
            } else {
                header("HTTP/1.1 404 Not Found");
                echo json_encode(array("mensaje" => "Recurso no encontrado"));
            }
            break;
        case 'PUT':
            if ($recurso == 'productos' && is_numeric($recursoId) && isset($datos[$recursoId])) {
                $caracteristicas = file_get_contents('php://input');

                parse_str($caracteristicas, $datosConvertidos);

                $tiposPermitidos = ["m","t"];

                if(isset($datosConvertidos['nombre']) && strlen($datosConvertidos['nombre']) > 0 &&
                isset($datosConvertidos['tipo']) && strlen($datosConvertidos['tipo']) == 1 && in_array($datosConvertidos['tipo'], $tiposPermitidos) &&
                isset($datosConvertidos['precio']) && intval($datosConvertidos['precio']) > 0 &&
                isset($datosConvertidos['cantidad']) && intval($datosConvertidos['cantidad']) > 0 &&
                isset($datosConvertidos['ventas']) && intval($datosConvertidos['ventas']) > -1){
                    
                    $idAux = intval($recursoId);
                    $prep = $bd->prepare("UPDATE productos SET nombre = :nombre, tipo = :tipo, precio = :precio, cantidad = :cant, ventas = :ventas WHERE id_producto = :id");
                    $prep->execute(array(":nombre" => $datosConvertidos['nombre'], ":tipo" => $datosConvertidos['tipo'], ":precio" => intval($datosConvertidos['precio']), ":cant" => intval($datosConvertidos['cantidad']), ":ventas" => intval($datosConvertidos['ventas']), ":id" => $idAux));
                    
                    header("HTTP/1.1 200 OK");
                    echo json_encode(array("mensaje" => "Producto Modificado"));
                }else{
                    header("HTTP/1.1 404 Not Found");
                    echo json_encode(array("mensaje" => "No se ha podido añadir el nuevo producto debido a que todos los datos pasados no son correctos"));
                
                }
            } else {
                header("HTTP/1.1 404 Not Found");
                echo json_encode(array("mensaje" => "Recurso no encontrado"));
            }
            break;
        case 'DELETE':
            if ($recurso == 'productos' && is_numeric($recursoId) && isset($datos[$recursoId])) {
            
                $prep = $bd->prepare("DELETE FROM productos WHERE id_producto = :id");
                $prep->execute(array(":id" => intval($recursoId)));
                header("HTTP/1.1 200 OK");
                echo json_encode(array("mensaje" => "Producto eliminado"));
            } else {
                header("HTTP/1.1 404 Not Found");
                echo json_encode(array("mensaje" => "Recurso no encontrado"));
            }
            break;
        case "OPTIONS":
            header("HTTP/1.1 200 OK");
            break;
        default:
            header("HTTP/1.1 405 Not Allowed");
            echo json_encode(array("mensaje" => "Método no permitido"));
            break;
    }
    
} catch (PDOException $e) {
    echo 'Error con la base de datos: ' . $e->getMessage();
}
