(function () {

	var $cajaRoja = $(".cajaRoja");

	$("#botonTamano").on("click", function () {

		$($cajaRoja).animate({
			width: "+=100px",
			height: "+=100px",
		}, function () {
			console.log("Termino la animacion del tamaño");
		})

		.css("backgroundColor", "green")
		.animate({
			width: "-=100px",
			height: "-=100px",
			opacity: "0.5"
		}, 1500)
		.animate({
			opacity: "0.1"
		}, 1500, function () {
			$(this).css({
				"backgroundColor": "red",
				"opacity": "1"
			})
		});
	})

})();