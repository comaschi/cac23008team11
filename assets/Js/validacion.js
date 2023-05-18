//--------------Validación del formulario de contacto.--------------
function validacionContacto() {

    var contactoNombre = document.getElementById("nombre").value.trim()
    var contactoEmail = document.getElementById("email").value.trim()
    var contactoTelefono = document.getElementById("telefono").value.trim()
    var contactoAsunto = document.getElementById("asunto").value.trim()
    var contactoMensaje = document.getElementById("mensaje").value.trim()


    //Validación de que estén todos los campos completados
    if (contactoNombre === "" || contactoEmail === "" || contactoTelefono === "" || contactoAsunto === "" || contactoMensaje === "") {
        alert("Por favor, complete todos los campos del formulario.");
        return false;
    }
    //Validación de caracteres del nombre
    for (let i = 0; i < contactoNombre.length; i++) {
        let charCode = contactoNombre.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
            alert("El campo 'Nombre' solo puede contener caracteres alfabéticos y espacios.");
            return false;
        }
    }
    //Validación de que el campo "Teléfono" sean sólo números
    for (let i = 0; i < contactoTelefono.length; i++) {
        let charCode = contactoTelefono.charCodeAt(i);
        if (!(charCode >= 48 && charCode <= 57)) {
            alert("El campo 'Teléfono' solo puede contener caracteres numéricos.");
            return false;
        }
    }
}
//--------------Validación del formulario de reserva.--------------
function validacionReserva() {

    var reservaNombre = document.getElementById("nombre-r").value.trim()
    var reservaEmail = document.getElementById("email-r").value.trim()
    var reservaTelefono = document.getElementById("telefono-r").value.trim()
    var reservaCantidad = document.getElementById("cantidad-r").value.trim()
    var reservaPeticion = document.getElementById("peticion-r").value.trim()


    //Validación de que estén todos los campos completados
    if (reservaNombre === "" || reservaEmail === "" || reservaTelefono === "" || reservaCantidad === "") {
        alert("Por favor, complete todos los campos obligatorios del formulario del formulario.");
        return false;
    }
    //Validación de caracteres del nombre
    for (let i = 0; i < reservaNombre.length; i++) {
        let charCode = reservaNombre.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
            alert("El campo 'Nombre' solo puede contener caracteres alfabéticos y espacios.");
            return false;
        }
    }
    //Validación de que el campo "Teléfono" sean sólo números
    for (let i = 0; i < reservaTelefono.length; i++) {
        let charCode = reservaTelefono.charCodeAt(i);
        if (!(charCode >= 48 && charCode <= 57)) {
            alert("El campo 'Teléfono' solo puede contener caracteres numéricos.");
            return false;
        }
    }

    if (reservaCantidad > 10) {
        alert("No se puede realizar una reserva para más de 10 personas")
        return false
    }
}

// Validación del formulario en tiempo real con VUE.js
const { createApp } = Vue
const appFormContacto = createApp({
    // Datos de la aplicacion
    data() {
        return {
            nombre: null,//Se obtiene con v-model.
            clase: null//Se asigna con v-bind.
        }
    },
    methods: {
        validacionNombre() {
            for (let i = 0; i < (this.nombre).length; i++) {
                let charCode = (this.nombre).charCodeAt(i);
                if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
                    this.clase = "nombre-falso"

                }
            }
        }
    }
})
appFormContacto.mount("#app")