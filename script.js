let audios = [
    {rota:'audios/ratinho_ele-nao-e-o-pai.mp3', legenda:'Ele não é o  pai'},
    {rota:'audios/ratinho_grito.mp3', legenda:'GRITO'},
    {rota:'audios/ratinho_jesus.mp3', legenda:'Jesus'},
    {rota:'audios/ratinho_pare.mp3', legenda:'PARE'},
    {rota:'audios/ratinho_que-isso-meu-filho.mp3', legenda:'Que isso meu filho calma'},
    {rota:'audios/ratinho_ratinhoo.mp3', legenda:'RATINHOO'},
    {rota:'audios/ratinho_uepa.mp3', legenda:'UEPA'},
    {rota:'audios/ratinho_vixi.mp3', legenda:'VIXI'},
    {rota:'audios/ratinho_xaropinho.mp3', legenda:'Xaropinho'}, 
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

for (let i=0; i < 9; i++) {
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.rota);
        
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
        });
    });
});