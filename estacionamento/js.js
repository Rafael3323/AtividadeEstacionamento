/*ao clicar em qualquer vaga, muda a cor da vaga selecionada para amarelo, vermelho caso esteja amarelo ou verde caso ja esteja vermelho*/

const vagas = document.querySelectorAll('.vaga');
vagas.forEach(vaga => {
    vaga.addEventListener('click', () => {
        if (vaga.style.backgroundColor === 'yellow') {
            vaga.style.backgroundColor = 'red';
        } else if (vaga.style.backgroundColor === 'red') {
            vaga.style.backgroundColor = 'green';
        } else {
            vaga.style.backgroundColor = 'yellow';
        }
    });
    
});


