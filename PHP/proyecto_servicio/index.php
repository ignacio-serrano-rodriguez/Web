<?php
include 'Usuarios.php';

class Server 
{
    public static function serve() 
    {
        $uri = $_SERVER['REQUEST_URI'];
        $method = $_SERVER['REQUEST_METHOD'];
        
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
			default:
				header('HTTP/1.1 405 Method Not Allowed');
				header('Allow: GET');
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

            // ACTUALIZAR
			case 'PUT':
                // self::actualizar_usuario($usuario);
               break;

            // ELIMINAR
			case 'DELETE':
				// $this->delete_contact($nom);
				break;
		
            // MÉTODO NO VÁLIDO
			default:
				header('HTTP/1.1 405 Method Not Allowed');
				header('Allow: GET, PUT, DELETE');
				break;
        }
    }
    
    
    
	private static function mostrar_usuarios() 
	{
		header('Content-type: application/json');
		echo json_encode(Usuarios::get(null));
	}

    private static function mostrar_usuario($usuario) 
	{        
        if(Usuarios::get($usuario) == null)
        {
            header('HTTP/1.1 404 Not Found');
        }
        else
        {
            header('Content-type: application/json');
            echo json_encode(Usuarios::get($usuario));
        }
	}

    private static function crear_usuario()
    {
        header('Content-type: application/json');
        $info = json_encode(Usuarios::post(json_decode(file_get_contents('php://input'))));
        echo $info;
    }
}

// Llamamos al método estático público de la clase
Server::serve();
