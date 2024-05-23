/* Función de evento de envío de formulario */
document.getElementById("formulario").addEventListener('submit', function(event) {
    event.preventDefault();

    /* Selecciona los campos a evaluar */
    const name = document.getElementById("name");
    const lastname = document.getElementById("lastname");
    const telefono = document.getElementById("cel");
    const email = document.getElementById("mail");
    const consulta = document.getElementById("consulta");

    /* verificamos si los campos están completos */
    if (!name.value) {
        alert('Debe completar el campo Nombre');
        name.focus();
        return false;
    }
    
    if (!lastname.value) {
        alert('Debe completar el campo Apellido');
        lastname.focus();
        return false;
    }

    if (!telefono.value) {
        alert('Debe completar el campo Teléfono');
        telefono.focus();
        return false;
    }

    if (!email.value) {
        alert('Debe completar el campo Email');
        email.focus();
        return false;
    }

    if (!consulta.value) {
        alert('Debe completar el campo consulta');
        consulta.focus();
        return false;
    }

    /* Envío de formulario si está todo completo */
    alert('Formulario enviado exitosamente');
    this.submit();
});