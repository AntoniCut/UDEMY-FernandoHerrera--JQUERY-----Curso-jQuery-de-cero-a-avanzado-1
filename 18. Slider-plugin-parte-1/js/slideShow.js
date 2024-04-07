//  **********  js/slideShow.js  **********

(function () {

	var actual = 0;
	var ancho = 600;

	var $slideshow = $(".slideShow ul");
	var slides = $slideshow.find("li").length;
	var $puntos = $(".slideShowButtons");

	$puntos.find("div").eq(0).css({
		backgroundColor: "#58167d"
	});

	//  funcion intervalo.
	var intervalo = setInterval(function () {
		mover("sig");
	}, 1500);


	//console.log(slide);

	//  funcion mover el slice con los botones.
	function mover(dir, click) {

		(dir === "sig") ? actual-- : actual++;

		if (actual > 0) {
			actual = (slides - 1) * -1;
		} else if (actual <= (slides * - 1)) {
			actual = 0;
		}

		mover_por_punto(actual, click);

	}


	//  mueve el slice con los puntos.
	function mover_por_punto(actual, click) {

		//$(".activarTimer").hide();

		/*
		//  para el intervalo destruyendo la funcion .
		if (click) {
			clearInterval(intervalo);
			$(".activarTimer").show();
			//click = false;
		}else{
			//$(".activarTimer").hide();
		}

		*/
		
		var margen = actual * ancho;
		var idx = actual * -1;
		var $puntoActual = $puntos.find("div").eq(idx);
		var $demasPuntos = $puntos.find("div").not($puntoActual);

		let tl = gsap.timeline();
		tl.to($slideshow, 0.7, { marginLeft: margen, ease: Bounce.easeOut })
			.to($puntoActual, 0.5, { backgroundColor: "#58167d" }, "-=1.2")
			.to($demasPuntos, 0.5, { backgroundColor: "#a1a1a1" }, "-=1.2");

	}


	//  clic en los 4 puntos del slide.
	$('.slideButton').on("click", function () {

		clearInterval(intervalo);
		$(".activarTimer").show();
		var idx = $(this).data("idx");
		idx = idx * -1;
		console.log(idx);
		mover_por_punto(idx, true);

	});


	//  clic en los botones anterior y siguiente.
	$(".botonSlide").on("click", function () {
		var dir = $(this).data("mov");
		mover(dir, true);
	});

	//  clic en el boton activar timer.
	$(".activarTimer").on("click", function () {
		
		//  funcion intervalo.
		var intervalo = setInterval(function () {
			mover("sig");
		}, 1500);

		$(this).hide();
		mover_por_punto(0, false);

		
	});



})();