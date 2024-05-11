//  ****************************************
//  **********  js/select.js  **********
//  ****************************************

(function () {

	$('#frmData').on('submit', function (e) {

		//console.log("Has pulsado el boton");
		//console.log(e);
		e.preventDefault();

		//  Serielizacion.
		var formulario = $(this);
		var dataSerializada = formulario.serialize();
		//console.log(dataSerializada);

		$.ajax({
			type: 'POST',
			url : 'php/servicios/post.alumnos.php',
			dataType: 'json',
			data: dataSerializada
		})
		.done(function( data ){
			
			console.log("Correcto!");
			console.log( data ); // Se imprime en consola la api
		})
		.fail(function(){
			console.log("Fallo!");
		});

	});
	
	
})();