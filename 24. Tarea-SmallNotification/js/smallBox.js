//  **********  js/smallBox.js  **********


(function () {

    $.smallBox = function (opciones) {

        opciones = $.extend({

            titulo: undefined,
            subtitulo: undefined,
            contenido: undefined,
            fa: "fa-envelope-o",
            img: undefined,
            timeout: 3000

        }, opciones);

        var html = "";

        html += '<div class="smallBox-contenedor">';
        html += '   <div class="smallBox-foto">';
        html += '	    <img src="' + opciones.img + '">';
        html += '   </div>';
        html += '   <div class="smallBox-contenido" align="center">';
        html += '	    <div class="smallBox-textoContenedor" align="left">';
        html += '		    <span class="smallBox-titulo">' + opciones.titulo + '</span>';
        html += '		    <span class="smallBox-subTitulo">' + opciones.subtitulo + '</span>';
        html += '	    </div>';
        html += '	    <div class="smallBox-pico"></div>';
        html += '	    <div class="smallBox-cajaColor">';
        html += '		    <div class="smallBox-colorTexto">';
        html += opciones.contenido;
        html += '		    </div>';
        html += '		    <div class="smallBox-colorIcon">';
        html += '			    <i class="fa ' + opciones.fa + ' fa-2x"> </i>';
        html += '		    </div>';
        html += '	    </div>';
        html += '	    <div class="smallBox-sombra"></div>';
        html += '   </div>';
        html += '</div>';

        $("body").append(html);
        animar_entrada();
        setTimeout(function () {
            animar_salida();
        }, opciones.timeout);

    };

    function animar_entrada() {

        var $smallBox = $(".smallBox-contenedor");

        let tl = gsap.timeline();
        tl.from($smallBox, 1.3, { x: "+= 100px", ease: Bounce.easeOut })
          .from($smallBox, 1, { opacity: 0 }, "-=1.3");
    }

    function animar_salida() {

        var $smallBox = $(".smallBox-contenedor");
        let tl = gsap.timeline();
        tl.to($smallBox, 1, { x: "+= 100px" })
          .to($smallBox, 1, { opacity: 0, onComplete: remover_smallBox }, "-=1");
    }

    function remover_smallBox () {  
        $(".smallBox-contenedor").remove();
    }

})();