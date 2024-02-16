<?php
class Usuario 
{
	// Properties (Atributes)
	private $id;
	private $nombre;
	private $apellidos;
	private $edad;
	private $mail;
	private $usuario;
	private $contrasenia;
	private $rol;

	// Methods

		// Constructor
		function __construct($id, $nombre, $apellidos, $edad, $mail, $usuario, $contrasenia, $rol) 
		{
			$this->id = $id;
			$this->nombre = $nombre;
			$this->apellidos = $apellidos;
			$this->edad = $edad;
			$this->mail = $mail;
			$this->usuario = $usuario;
			$this->contrasenia = $contrasenia;
			$this->rol = $rol;
		}

		// Getters
		function get_id() 
		{
			return ($this->id);
		}
		function get_nombre() 
		{
			return ($this->nombre);
		}
		function get_apellidos() 
		{
			return ($this->apellidos);
		}
		function get_edad() 
		{
			return ($this->edad);
		}
		function get_mail() 
		{
			return ($this->mail);
		}
		function get_usuario() 
		{
			return ($this->usuario);
		}
		function get_contrasenia() 
		{
			return ($this->contrasenia);
		}
		function get_rol() 
		{
			return ($this->rol);
		}

		// Setters
		function set_id($id) 
		{
			$this->id = $id;
		}
		function set_nombre($nombre) 
		{
			$this->nombre = $nombre;
		}
		function set_apellidos($apellidos) 
		{
			$this->apellidos = $apellidos;
		}
		function set_edad($edad) 
		{
			$this->edad = $edad;
		}
		function set_mail($mail) 
		{
			$this->mail = $mail;
		}
		function set_usuario($usuario) 
		{
			$this->usuario = $usuario;
		}
		function set_contrasenia($contrasenia) 
		{
			$this->contrasenia = $contrasenia;
		}
		function set_rol($rol) 
		{
			$this->rol = $rol;
		}

		// Métods
		public function hola_mundo() 
		{
			echo "hola mundo";
		}
}