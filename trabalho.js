const botao = document.querySelector('#botao')
const mensagem = document.querySelector('#mensagem')

botao.addEventListener('click', () => {
    mensagem.textContent = 'Olá, seja bem vindo ao meu site, sinta-se livre, tenha um ótimo dia.'
});
