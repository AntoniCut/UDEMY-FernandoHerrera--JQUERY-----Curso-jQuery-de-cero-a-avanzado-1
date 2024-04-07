//  **********  js/tablaMultiplicar.js  **********

(function () {

    var contador = 0;

    $("button").on("click", function () {

        var baseEncabezado = $("#cmbBase").val();
        $("span").text(baseEncabezado);


        contador++;
        var base = $("#cmbBase").val();
        var linea = "";

        linea += '<tr>';
        linea += '<td>' + base + '</td>';
        linea += '<td> X </td>';
        linea += '<td>' + contador + '</td>';
        linea += '<td> = </td>';
        linea += '<td>' + (contador * base) + '</td>';
        linea += '<tr>';

        $("table").append(linea);


    });

    //  Funcion que detecta el cambio de la base.
    $("#cmbBase").on("change", function () {

        var valorBase = $(this).val();
        console.log("base = " + valorBase);

        $("tr").not(":eq(0)").remove();
        contador = 0;


    });

})();