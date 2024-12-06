const imagens = document.querySelectorAll('.slide');
const setaVoltar = document.getElementById('seta-voltar');
const setaAvançar = document.getElementById('seta-avançar');

let imagemAtual = 0;

function mostrarImagem() {
    imagens[imagemAtual].classList.add('mostrar');
}

function esconderImagemAberta() {
    const imagemAberta = document.querySelector('.mostrar');
    imagemAberta.classList.remove('mostrar');
}

setaAvançar.addEventListener('click', () => {
    if (imagemAtual === imagens.length - 1) {
        return;
    }
   
    imagemAtual++ ;

    esconderImagemAberta();
    mostrarImagem();    
    mostrarOuEsconderSetas();
})

setaVoltar.addEventListener('click', () => {
    if (imagemAtual === 0 ) {
        return;
    }
    
    imagemAtual-- ; 
    
    esconderImagemAberta(); 
    mostrarImagem();
    mostrarOuEsconderSetas();
})

function mostrarOuEsconderSetas(){
    const naoEhAPrimeiraImagem = imagemAtual !== 0 ;
    if (naoEhAPrimeiraImagem) {
        setaVoltar.classList.remove("opacidade");
    } else {
        setaVoltar.classList.add("opacidade");
    }

    const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1 ;
    if (chegouNaUltimaImagem) {
        setaAvançar.classList.add("opacidade");
    } else {
        setaAvançar.classList.remove("opacidade");
    }
}