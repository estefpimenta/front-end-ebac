const form = document.getElementById('formDeposito')
const nomeBeneficiario = document.getElementById('nomeBeneficiario')

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >= 2
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    
    const valorDeposito = document.getElementById('valorDeposito')
    const numeroConta = document.getElementById('numeroConta')

    const mensagemSucesso = `O montante de <b>${valorDeposito.value}</b> foi enviado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroConta.value}</b>`
    if (validaNome(nomeBeneficiario.value) === false) {
        document.querySelector('.errorMessageName').style.display = 'block'
        nomeBeneficiario.style.border = '1px solid red'
    } else {
        nomeBeneficiario.value = '';
        valorDeposito.value = '';
        numeroConta.value = '';
        const containerMensagemSucesso = document.querySelector('.successMessage')
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block'
    }
})

nomeBeneficiario.addEventListener('change', function(){

    
})