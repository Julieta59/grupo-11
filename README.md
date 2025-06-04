# Animación Fade-In para Travel Viajes

## ¿Cómo funciona la función?

1. Espera a que el documento HTML esté completamente cargado.
2. Selecciona todos los elementos con la clase `.fade-in`.
3. Usa `IntersectionObserver` para detectar cuándo cada uno entra en la vista del usuario (al hacer scroll).
4. Cuando un elemento es visible en pantalla (al menos un 10%), se le agrega la clase `.mostrar`.
5. La clase `.mostrar` activa una transición CSS que cambia la opacidad y la posición, generando un efecto "fade-in" suave.

## ¿Por qué es útil o necesaria para el proyecto?

- Hace que el contenido aparezca de forma suave, mejorando la experiencia visual.
- Ayuda a destacar secciones importantes como los destinos o promociones.
- Da una sensación moderna y cuidada, ideal para una página enfocada en viajes y aventura.
- También lo hicimos accesible: si JavaScript está desactivado, el contenido sigue siendo visible (solo sin animación).

---
