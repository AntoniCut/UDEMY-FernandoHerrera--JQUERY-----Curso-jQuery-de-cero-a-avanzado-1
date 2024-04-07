//  **********  js/slideShowTweenMax.js  **********

(function () {

    var actual = 0;
    var ancho = 600;

    var $slideshow = $(".slideShow ul");
    var slides = $slideshow.find("li").length;

    var intervalo = setInterval(function () {
        mover("sig");
    }, 1500);

    //console.log(slide);
    function mover(dir, click) {

        if (click) clearInterval(intervalo);


        (dir === "sig") ? actual-- : actual++;

        if (actual > 0) {
            actual = (slides - 1) * -1;
        } else if (actual <= (slides * - 1)) {
            actual = 0;

        }

        //console.log(actual);

        var margen = actual * ancho;

        //var tl = new TimeLineMax();
        let tl = gsap.timeline();
        tl.to($slideshow, 0.7, {
             marginLeft: margen,
             ease: Bounce.easeOut
        });

        /*
        $slideshow.animate({
            marginLeft: margen
        }, 450);
        */

    }

    $(".botonSlide").on("click", function () {
        var dir = $(this).data("mov");
        mover(dir, true);
    });
                                           
})();