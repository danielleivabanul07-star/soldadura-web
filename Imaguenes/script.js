function enviarWhatsApp(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const telefonoCliente = document.getElementById("telefonoCliente").value;
  const servicio = document.getElementById("servicio").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  const mensaje = document.getElementById("mensaje").value;

  const telefonoNegocio = "16892220829";

  const texto = `Hola, quiero agendar una cita o pedir una cotización gratis.

Nombre: ${nombre}
Teléfono del cliente: ${telefonoCliente}
Servicio solicitado: ${servicio}
Fecha preferida: ${fecha}
Hora preferida: ${hora}

Detalles:
${mensaje}`;

  const url = `https://wa.me/${telefonoNegocio}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
}