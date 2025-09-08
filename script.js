document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".comprar");
  const colores = document.querySelectorAll(".color");

  // Acción de compra
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      alert("¡Gracias por tu compra!");
    });
  });

  // Selección de color
  colores.forEach(color => {
    color.addEventListener("click", () => {
      const nombreColor = color.getAttribute("data-color");
      alert(`Seleccionaste el color: ${nombreColor}`);
    });
  });
});
