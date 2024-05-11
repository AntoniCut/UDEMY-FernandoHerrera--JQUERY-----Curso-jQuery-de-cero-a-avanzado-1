<?php

	//  ***************************************
	//  **********  post.alumno.php  **********
	//  ***************************************

// Incluir la clase de base de datos
require_once("../classes/class.Database.php");

/*
$alumnosArr = [
	array( 'id'=>1, 'nombre'=>'Juan','promedio'=>85),
	array( 'id'=>2, 'nombre'=>'Pedro','promedio'=>90),
	array( 'id'=>3, 'nombre'=>'Monica','promedio'=>95)
];
*/


$nombre = $_POST['txtnombre'];
$estado = $_POST['cmbestado'];

/*
$respuesta = json_encode( 
	array('err' => false, 
		'nombre' => $nombre,
		'estado' => $estado,
	     )
);
*/


$sql = "INSERT INTO alumnos (nombre) values ('$nombre')";
$hecho = Database::ejecutar_idu($sql);

if($hecho) {
	$respuesta = json_encode( 
		array('err' => false, 
			  'mensaje' => "Creado correctamente" )
	);
}else{
	$respuesta = json_encode( 
		array('err' => true, 
			  'mensaje' => $hecho )
	);
}

echo $respuesta;



?>