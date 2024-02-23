<?php
include 'Usuarios.php';

class Server 
{
    public static function serve() 
    {
        $uri = $_SERVER['REQUEST_URI'];
        $method = $_SERVER['REQUEST_METHOD'];
        header('Content-type: application/json');
        
        $paths = explode('/', self::paths($uri));
        array_shift($paths); 
        $resource = array_shift($paths); 
        if ($resource == 'usuarios') 
		{
            $name = array_shift($paths);

            if (empty($name)) 
			{
                self::handle_base($method);
            } 
			else 
			{
               self::handle_name($method, $name);
            }
        } 
		else 
		{
            header('HTTP/1.1 404 Not Found');
            $array = [];
            $objeto = array("error" => "recurso no encontrado.");
            array_push($array, $objeto);
            echo json_encode($array);
        } 
    }

    private static function paths($url) 
	{
        $uri = parse_url($url);
        return $uri['path'];
    }
        
    private static function handle_base($method) 
	{
        switch($method) 
		{
			case 'GET':
			    self::mostrar_usuarios();
				break;

            case 'POST':
                self::crear_usuario();
                break;

			default:
				header('HTTP/1.1 405 Method Not Allowed');
				header('Allow: GET');
                $array = [];
                $objeto = array("error" => "metodo utilizado no permitido.");
                array_push($array, $objeto);
                echo json_encode($array);
				break;
        }
    }

    private static function handle_name($method, $usuario) 
	{
        switch($method) 
		{
            // OBTENER
			case 'GET':
				self::mostrar_usuario($usuario);
				break;

            // CREAR
			case 'POST':
				 self::crear_usuario();
				break;

            // ELIMINAR
			case 'DELETE':
				self::eliminar_usuario($usuario);
				break;

            // ACTUALIZAR
			case 'PUT':
                self::actualizar_usuario();
               break;     
		
            // MÉTODO NO VÁLIDO
			default:
				header('HTTP/1.1 405 Method Not Allowed');
				header('Allow: GET, PUT, DELETE');
                $array = [];
                $objeto = array("error" => "metodo utilizado no permitido.");
                array_push($array, $objeto);
                echo json_encode($array);
				break;
        }
    }
  
    // GET localhost/usuarios
	private static function mostrar_usuarios() 
	{
		echo json_encode(Usuarios::get(null));
	}

    // GET /usuarios/(nombreUsuario)
    private static function mostrar_usuario($usuario) 
	{      
        if(Usuarios::get($usuario) == null)
        {
            header('HTTP/1.1 404 Not Found');
            $array = [];
            $objeto = array("error" => "usuario no encontrado.");
            array_push($array, $objeto);
            echo json_encode($array);
        }
        else
        {
            echo json_encode(Usuarios::get($usuario));
        }
	}

    // POST /usuarios "Body raw en formato json"
    private static function crear_usuario()
    {
        $resultado = Usuarios::post(json_decode(file_get_contents('php://input')));
        $array = [];

        if(gettype($resultado) == "string")
        {
            header('HTTP/1.1 422 Unprocessable Entity');
            $objeto = array("error" => $resultado);
            array_push($array, $objeto);
            echo(json_encode($array));
        }
        else
        {
            echo(json_encode($resultado));
        }
    }

    // DELETE /usuarios/(nombreUsuario)
    private static function eliminar_usuario($usuario)
    {
        $resultado = Usuarios::delete($usuario);
        $array = [];
        
        if($resultado == 1)
        {
            $objeto = array("correcto" => "usuario $usuario eliminado.");
            array_push($array, $objeto);
            echo json_encode($array);
        }
        else if($resultado == 0)
        {
            header('HTTP/1.1 404 Not Found');
            $objeto = array("error" => "usuario inexistente.");
            array_push($array, $objeto);
            echo json_encode($array);
        }
        else
        {
            header('HTTP/1.1 404 Not Found');
            $objeto = array("error" => "no se ha podido borrar el usuario.");
            array_push($array, $objeto);
            echo json_encode($array);
        }
    }

    // PUT /usuarios/(nombreUsuario) "Body raw en formato json"
    private static function actualizar_usuario()
    {
        $resultado = Usuarios::put(json_decode(file_get_contents('php://input')));

        if(gettype($resultado) == "string")
        {
            header('HTTP/1.1 422 Unprocessable Entity');
            $objeto = array("error" => $resultado);
            $array = [];
            array_push($array, $objeto);
            echo(json_encode($array));
        }
        else
        {
            echo(json_encode($resultado));
        }
    }
}

// Llamamos al método estático público de la clase
Server::serve();
