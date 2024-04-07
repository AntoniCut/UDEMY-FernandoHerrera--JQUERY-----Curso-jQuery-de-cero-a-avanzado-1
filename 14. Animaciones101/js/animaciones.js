//  **********  js/animaciones.js  **********

(function () {

    var $cajaRoja = $(".cajaRoja");

    function mover(dir) {

        $cajaRoja.clearQueue();

        switch (dir) {
            case "arr":
                $cajaRoja.animate({
                    top: "-=50px"
                });
                break;

            case "aba":
                $cajaRoja.animate({
                    top: "+=50px"
                }, 200);
                break;

            case "izq":
                $cajaRoja.animate({
                    left: "-=50px"
                }, 200);
                break;
            case "der":
                $cajaRoja.animate({
                    left: "+=50px"
                }, 200);
                break;

            default:
                $cajaRoja.animate({
                    top: "0px",
                    left: "0px"
                }, 1000);
        }

    }


    //  movimiento al pulsar las teclas,
    //  w = subir, s = bajar, a = izquierda, d = derecha, r = reset.
    $(document).on("keypress", function (e) {

        var keyCode = e.keyCode;
        console.log(keyCode);

        switch (keyCode) {
            case 119:
                mover("arr");
                break;
            case 115:
                mover("aba");
                break;
            case 100:
                mover("der");
                break;
            case 97:
                mover("izq");
                break;
            case 114:
                mover("res");
        }
    });

  
    //  Movimiento con las teclas direccionales.   
    $(document).keyup(function (event) {
        if (event.keyCode == 37) {
            $(".cajaRoja").animate({ "left": "-=50px" }, "slow");
            console.log("left");
        } else if (event.keyCode == 39) {
            $(".cajaRoja").animate({ "left": "+=50px" }, "fast");
            console.log("right");
        } else if (event.keyCode == 38) {
            $(".cajaRoja").animate({ "top": "-=50px" });
            console.log("up");
        } else if (event.keyCode == 40) {
            $(".cajaRoja").animate({ "top": "+=50px" });
            console.log("down");
        } else {
            console.log("Presione las teclas de direccion");
        }
    });


    //  Movimiento al hacer clic en los botones
    $("button").on("click", function () {

        var dir = $(this).data("dir");
        mover(dir);
    });







})();