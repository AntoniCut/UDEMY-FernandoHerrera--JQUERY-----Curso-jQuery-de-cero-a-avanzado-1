//  ****************************************
//  **********  js/select.js  **********
//  ****************************************

(function () {

    $(document).ready(function () {

        //  **********  Peticion Ajax  ******
        $.ajax({
            type: 'POST',
            url: 'php/servicios/get.alumnos.php',
            dataType: 'json',
        })
            .done(function (data) {

                console.log("Correcto!");
                console.log(data); // Se imprime en consola la api

                if (data.error) {
                    alert("Algo raro paso");
                    return;
                };

                //  Recorrer y Pintar los registros.
                data.alumnos.array.forEach(function (alumno, index) {
                    var content = "";
                        content += '<tr id="fila' + alumno.id + '">';
                        content += '<td>' + alumno.id + '</td>';
                        content += '<td>' + alumno.nombre + '</td>';
                        content += '<td class="text-center"> <a href="actualizar.html?id=' + alumno.id + '" class="btn btn-primary"> <i class="fa fa-edit"> </i> </a> </td>';
                        content += '<td class="text-center"> <a data-nombre="' + alumno.nombre + '"  data-id=" ' + alumno.id + '" href="" class="btn btn-danger botEliminar"> <i class="fa fa-trash-o"> </i> </a> </td>';
                        content += '</tr>';

                    $('#tblRegistros').append(content);

                });

            })
            .fail(function () {
                console.log("Fallo!");
            });

    });


    //  *****  Borrar Registros al Pulsar el Boton Eliminar  *****
    $("body").on("click", ".botEliminar", function (e) {

        e.preventDefault();
                
        //  Cuando estemos seguros que lo deseamos borrar.

        var nombre = $(this).data("nombre");
        var id     = $(this).data('id');
        //console.log(id);

        swal({
            title: "Estas seguro?",
            text: "De querer borrar a: " + nombre + "!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Si, Borralo!",
            cancelButtonText: "Cancelarl!",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm)  borrarRegistro(id);
        });
    });

    function borrarRegistro(id) {

        //var id = $(this).data('id');
        //console.log(id);
        $.ajax({
            type: 'POST',
            url: 'php/servicios/post.eliminaalumnos.php?id=' + id,
            dataType: 'json',
        })
            .done(function (data) {
                console.log("Correcto!");
                console.log(data); // Se imprime en consola la api

                //  Elimina y refresca el navegador.
                $("#fila"+ id).remove();

                swal("Borrado!", "El registro ha sido eliminado correctamente!");
                //var alumno = data.alumnos[0];
                //$("#txid").val(alumno.id);
                //$("#txtnombre").val(alumno.nombre);
                //$("#txestado").val(alumno.estado);
            });
    }


})();