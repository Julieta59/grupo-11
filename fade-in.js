// animacionFadeIn.js

// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".fade-in");

  const mostrarElemento = (entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("mostrar");
    }
  };

  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(mostrarElemento);
  }, {
    threshold: 0.1, // Se activa cuando el 10% del elemento es visible
  });

  elementos.forEach((el) => observer.observe(el));
});