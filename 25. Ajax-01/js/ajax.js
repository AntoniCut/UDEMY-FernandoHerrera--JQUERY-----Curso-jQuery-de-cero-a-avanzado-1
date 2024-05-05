(function () {

    //  *****  Petición AJAX  *****
    $.ajax({
        type: 'GET',
        url: 'https://reqres.in/api/users?page=2',
        //data: "data",
        dataType: 'json',

    }).done(function (data) {

        var person = [];
        person = data;
        console.log(person);

        /*
        $('#numID').val(person[0].id);
        $('#txtNombre').val(person[0].first_name);
        $('#txtApellidos').val(person[0].last_name);
        $('#txtEmail').val(person[0].email);
        */
        $('#numID').val(data[0].id);
        $('#txtNombre').val(data[0].first_name);
        $('#txtApellidos').val(data[0].last_name);
        $('#txtEmail').val(data[0].email);
        

        console.log("Hecho Correcto!")

    }).fail(function () {
        console.log("Fallo!")

    }).always(function () {
        console.log("Completo!")
    });








})();