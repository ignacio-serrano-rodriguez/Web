<?php
include 'proyecto_servicio/src/usuario.php';

class Server 
{
    private $contacts = array
	(
		'jim' => array('address' => '356 Trailer Park Avenue', 'url' => '/clients/jim'),
        'anne' => array('address' => '6321 Tycoon Road', 'url'=> '/clients/anne')
	);

    public function serve() 
    {

        $uri = $_SERVER['REQUEST_URI'];
        $method = $_SERVER['REQUEST_METHOD'];

        // var_dump($uri);
        // var_dump($method);
        
		// (explode) transforma la cadena (uri) en un array (paths) usando como separador el caracter (/)
        $paths = explode('/', $this->paths($uri));
        array_shift($paths); // elimina el primer elemento de (paths), es decir: ('')
        $resource = array_shift($paths); // elimina y obtiene el primer elemento de (paths), es decir (clients)		
        if ($resource == 'clients') 
		{
            $name = array_shift($paths);
	
			// Se ejecuta si se accede al recurso (clients) pero sin ningún usuario en concreto
            if (empty($name)) 
			{
				// Realiza una acción en función del método que ha realizado la petición
                $this->handle_base($method);
            } 
			// Se ejecuta si se accede al recurso (clients) y a un cliente concreto
			else 
			{
				// Realiza una acción en función del método y el recurso de la petición
                $this->handle_name($method, $name);
            }
        } 
		else 
		{
            // Devuelve error 404 en el caso de que el recurso accedido sea distinto de clientes
            header('HTTP/1.1 404 Not Found');
        } 
    }
        
    private function handle_base($method) 
	{
        switch($method) 
		{
			case 'GET':
				$this->result();
				break;
			default:
				header('HTTP/1.1 405 Method Not Allowed');
				header('Allow: GET');
				break;
        }
    }

    private function handle_name($method, $name) 
	{
        switch($method) 
		{
			case 'PUT':
				$this->create_contact($name);
				break;

			case 'DELETE':
				$this->delete_contact($name);
				break;
		
			case 'GET':
				$this->display_contact($name);
				break;

			default:
				header('HTTP/1.1 405 Method Not Allowed');
				header('Allow: GET, PUT, DELETE');
				break;
        }
    }

    private function create_contact($name)
	{
		// Si el cliente que se intenta crear ya existe
        if (isset($this->contacts[$name])) 
		{
            header('HTTP/1.1 409 Conflict');
            return;
        }
        /* PUT requests need to be handled
         * by reading from standard input.
         */
		parse_str(file_get_contents('php://input'), $data);
		// Enviar información del usuario por (Body) en (x-www-form-urlencoded)
        // $data = json_decode(file_get_contents('php://input'));

        if (is_null($data)) 
		{
            header('HTTP/1.1 400 Bad Request');
            $this->result();
            return;
        }
        $this->contacts[$name] = $data; 
        $this->result();
    }
    
    private function delete_contact($name) 
	{
        if (isset($this->contacts[$name])) 
		{
            unset($this->contacts[$name]);
            $this->result();
        } 
		// Si el cliente que intenta eliminar no existe
		else 
		{
            header('HTTP/1.1 404 Not Found');
        }
    }
    
    private function display_contact($name) 
	{
        if (array_key_exists($name, $this->contacts)) 
		{
            echo json_encode($this->contacts[$name]);
        } 
		else 
		{
            header('HTTP/1.1 404 Not Found');
        }
    }
    
    private function paths($url) 
	{
        $uri = parse_url($url);
        return $uri['path'];
    }
    
	// Devuelve un json con el array de usuarios
	private function result() 
	{
		header('Content-type: application/json');
		// (this) hace referencia al objeto (server) y por tanto accede a su atributo (contacts)
		// este atributo se devuelve en formado json
		echo json_encode($this->contacts);
	}
}

// Declaramos una variable donde instanciamos un objeto de la clase (server)
$server = new Server;

// El objeto instanciado llama al método de la clase (serve)
$server->serve();