(function(){


	$.ajax({
		type: 'GET',
		url : 'https://reqres.in/api/users?page=2',
		dataType: 'json'
	})
	.done(function( data ){
		//console.log("Hecho Correcto!");

		var personas = data;

		console.log(personas);
		
		for(var i=0; i<personas.length; i++) {

			var persona = personas[i];
			var html = "";
			    html += '<tr>';
				html += 	'<td> id' + persona.id + '</td>';
				html += 	'<td> nombre' + persona.first_name + '</td>';
				html += 	'<td> apellidos' + persona.last_name + '</td>';
				html += '</tr>';
			$(".table").append(html);

			console.log(persona);
		}

	})
	.fail(function(){
		console.log("Fallo!");
	})
	.always(function(){
		console.log("Completo!");
	});








})();