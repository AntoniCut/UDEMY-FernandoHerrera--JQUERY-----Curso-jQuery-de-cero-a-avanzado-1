//  **********  tiendaRopa.js - código jQuery  **********

(function() {

    //var $srcGris = "img/camiseta/thumbs/blanca.jpg";
    //var $srcPrincipal = "img/camiseta/large/blanca.jpg";
    
    $(".imgThumb").on("mouseenter", function() {
        
        var color = $(this).data('color');
        var url = "img/camiseta/large/" + color + ".jpg";

        $("#vistaPrevia").attr('src', url);
        $("#lblColor").text(color);

    });

})();