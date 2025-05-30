const numeroB = document.getElementById('b')
const numeroA = document.getElementById('a')
const mensagemValidacao = document.getElementById('successMessage')
const mensagemErro = document.getElementById('errorMessage')
const button = document.querySelector('.btn')


button.addEventListener('click', function() {
    
    if (numeroA.value === '' || numeroB.value === '') {
    alert('Por favor, preencha os dois campos.');
    mensagemErro.style.display = 'none'
    mensagemValidacao.style.display = 'none'
    return;
}
    if(Number(numeroB.value) > Number(numeroA.value)) {
        mensagemValidacao.style.display = 'flex'  
        mensagemErro.style.display = 'none'
    } else {
        mensagemErro.style.display = 'flex'
        mensagemValidacao.style.display = 'none'
    }
})


