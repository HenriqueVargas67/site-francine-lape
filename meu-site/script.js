const elementos = document.querySelectorAll("section, .foto-francine");

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("aparecer");
        }
    });
});

elementos.forEach((elemento) => {
    observador.observe(elemento);
});