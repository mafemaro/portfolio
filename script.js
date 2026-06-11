document.addEventListener("DOMContentLoaded", function() {
    
    // configuração para as animações
    const configuracaoObservador = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observador = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                // adiciona a classe que aciona o CSS do fade
                entrada.target.classList.add('visivel');
                // para de observar o elemento
                observador.unobserve(entrada.target);
            }
        });
    }, configuracaoObservador);

    // seleciona classe
    const elementosAnimados = document.querySelectorAll('.animacaoaparecer');
    elementosAnimados.forEach(elemento => observador.observe(elemento));
    
});