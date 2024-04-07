//  **********  js/bigbox.js  **********

(function () {

    $.bigBox = function (opciones, callback) {

        opciones = $.extend({

            fa: "fa-thumbs-o-up",
            titulo: undefined,
            contenido: undefined,
            boton: "Aceptar"

        }, opciones);

        if (opciones.titulo === undefined) {
            alert("El titulo es necesario");
            return;
        }

        if (opciones.contenido === undefined) {
            alert("El contenido es necesario");
            return;
        }

        var contenido = "";
        contenido = '<div class="bigBox-Fondo"></div>';

        //contenido = '';
        contenido += '<div class="bigBox-contenedor" align="center">';
        contenido += '<div class="bigBox-Cerrar"> <i class="fa fa-times"></i> </div>';
        contenido += '<div class="bigBox-Circulo"> <i class="fa ' + opciones.fa + ' fa-3x"></i> </div>';
        contenido += '<div class="bigBox-Contenido">';
        contenido += '<span class="bigBox-Titulo"> ' + opciones.titulo + ' </span>';
        contenido += '<span class="bigBox-Texto"> ' + opciones.contenido + ' </span>';
        contenido += '</div>';
        contenido += '<button class="bigBox-Boton"> ' + opciones.boton + '</button>';
        contenido += '</div>';

        $("body").append(contenido);


        animar_entrada();

        //  click en el botón cerrar.
        $(".bigBox-Cerrar").on("click", function () {

            animar_salida();
            if(typeof callback == 'function') {
                callback('boton-cerrar');
            }
        });


        //  click en el botón príncipal.
        $(".bigBox-Boton").on("click", function () {

            animar_salida();
            if(typeof callback == 'function') {
                callback('boton-principal');
            }
        });


        //  funcion para Animar la entrada.
        function animar_entrada() {

            var $fondo = $(".bigBox-Fondo");
            //$fondo.fadeIn(300);

            var $bigBox = $(".bigBox-contenedor");

            //  ancho y alto de la pantalla.
            var anchoP = $(window).width();
            var altoP = $(window).height();
            console.log(anchoP, altoP);

            //  ancho bigbox.
            var anchoB = $bigBox.width();
            var altoB = $bigBox.height();
            console.log(anchoB, altoB);

            //  mostrar la caja en el centro de la pantalla.
            $bigBox.css({
                top:   (altoP/2) - (altoB/2),
                left:  (anchoP/2) - (anchoB/2),
            });

            $fondo.show();
            $bigBox.show();

            let tl = gsap.timeline();
            tl.to($fondo, 0.5, { opacity: 0.3 })
                .to($bigBox, 0.5, { opacity: 1 }, "-=0.5")
                .from($bigBox, 0.8, { y: "-=20", ease: Bounce.easeOut }, "-=0.5");
        }


        //  funcion para Animar la Salida.
        function animar_salida() {

            var $fondo = $(".bigBox-Fondo");
            var $bigBox = $(".bigBox-contenedor");

            let tl = gsap.timeline();
            tl.to($fondo, 0.3, { opacity: 0 })
                .to($bigBox, 0.3, { opacity: 0, onComplete: remover_bigbox, }, "-=0.5");
        }

        //  funcion para eliminar la caja.
        function remover_bigbox() {

            var $fondo = $(".bigBox-Fondo");
            var $bigBox = $(".bigBox-contenedor");

            $fondo.remove();
            $bigBox.remove();


        }




    };

})();