//  **********  js/bigbox.js  **********

(function(){

    $.bigBox = function(opciones){

        opciones = $.extend({

        }, opciones);

        var contenido = "";
            contenido = '<div class="bigBox-Fondo"></div>';
        
    
        contenido = '';
        contenido += '<div class="bigBox-contenedor" align="center">';
	    contenido += '<div class="bigBox-Cerrar"> <i class="fa fa-times"></i> </div>';
	    contenido += '<div class="bigBox-Circulo"> <i class="fa fa-thumbs-o-up fa-3x"></i> </div>';
	    contenido += '<div class="bigBox-Contenido">';
	    contenido += '<span class="bigBox-Titulo">Genial!</span>';
	    contenido += '<span class="bigBox-Texto">Estamos listo para proceder usando Udemy</span>';
	    contenido += '</div>';
	    contenido += '<button class="bigBox-Boton">Empezar curso!</button>';
        contenido += '</div>';
        
        $("body").append(contenido);
        
        
        
        
        animar_entrada();

        //  Animar la entrada.
        function animar_entrada(){

            var $fondo = $(".bigBox-Fondo");
            //$fondo.fadeIn(300);
                $fondo.show();

                let tl = gsap.timeline();
                tl.to( $fondo, 1, { opacity: 0.3} );
        }

    };

})();