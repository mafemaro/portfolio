document.addEventListener("DOMContentLoaded", function() {
    
    // animacoes scroll
    const configuracaoObservador = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observador = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visivel');
                observador.unobserve(entrada.target);
            }
        });
    }, configuracaoObservador);

    const elementosAnimados = document.querySelectorAll('.animacaoaparecer');
    elementosAnimados.forEach(elemento => observador.observe(elemento));

    // modo claro escuro
    const botaotema = document.getElementById('botaotema');
    const iconeTema = botaotema.querySelector('i');
    
    // se tiver preferencia salva, aplica o tema
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'escuro') {
        document.body.classList.add('temaescuro');
        iconeTema.classList.remove('fa-moon');
        iconeTema.classList.add('fa-sun');
    }

    // alterna o tema ao clicar no botão
    botaotema.addEventListener('click', () => {
        document.body.classList.toggle('temaescuro');
        
        if (document.body.classList.contains('temaescuro')) {
            iconeTema.classList.remove('fa-moon');
            iconeTema.classList.add('fa-sun');
            localStorage.setItem('tema', 'escuro');
        } else {
            iconeTema.classList.remove('fa-sun');
            iconeTema.classList.add('fa-moon');
            localStorage.setItem('tema', 'claro');
        }
    });

    // voltar ao topo
    const botaoTopo = document.getElementById('botaotopo');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            botaoTopo.classList.add('mostrar');
        } else {
            botaoTopo.classList.remove('mostrar');
        }
    });

    botaoTopo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});