function validar(form) {

    var nombre = form.nombre.value.trim();
    if (nombre === "") {
        alert("Por favor, ingrese su nombre.");
        return false;
    }


    var edad = form.edad.value.trim();
    if (edad === "" || isNaN(edad) || edad <= 0) {
        alert("Por favor, ingrese una edad válida.");
        return false;
    }


    var sexo = form.sexo.value;
    if (sexo === "") {
        alert("Por favor, seleccione su sexo.");
        return false;
    }

    var deporte = form.deporte.value;
    if (deporte === "ninguno") {
        alert("Por favor, seleccione un deporte favorito.");
        return false;
    }

    // Si todo es válido
    return true;
}