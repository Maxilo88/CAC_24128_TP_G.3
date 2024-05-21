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
        alert('El campo Nombre es obligatorio');
        name.focus();
        return false;
    }
    
    if (!lastname.value) {
        alert('El campo Apellido es obligatorio');
        lastname.focus();
        return false;
    }

    if (!telefono.value) {
        alert('El campo Teléfono es obligatorio');
        telefono.focus();
        return false;
    }

    if (!email.value) {
        alert('El campo Email es obligatorio');
        email.focus();
        return false;
    }

    if (!consulta.value) {
        alert('El campo consulta es obligatorio');
        consulta.focus();
        return false;
    }

    /* Envío de formulario si está todo completo */
    alert('Formulario enviado con éxito');
    this.submit();
});