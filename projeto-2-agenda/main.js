
const nome = document.getElementById('nomeContato')
const telefone = document.getElementById('telContato')
const form = document.querySelector('form')
const tbody = document.querySelector('tbody')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const novaLinha = document.createElement('tr') 
    novaLinha.innerHTML = `<td> ${nome.value} </td> <td> ${telefone.value} </td>`
    tbody.appendChild(novaLinha)

    nome.value = ''
    telefone.value = ''
    
})

