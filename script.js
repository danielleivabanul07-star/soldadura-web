function enviarWhatsApp(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const servicio = document.getElementById("servicio").value;
  const fecha = document.getElementById("fecha").value;
  const mensaje = document.getElementById("mensaje").value;

  const telefono = "16892220829";

  const texto = `Hola, mi nombre es ${nombre}. 
Quiero una cotización gratis.

Servicio que necesito: ${servicio}
Fecha preferida para la cita: ${fecha}
Detalles del trabajo: ${mensaje}`;

  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
}