

const form = document.getElementById('formAtividade')
const imageAprovado = '<img src="./assets/aprovado.png">'
const imageReprovado = '<img src="./assets/reprovado.png">' 
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'

let linhas = ' '

form.addEventListener('submit', function(e) {
    e.preventDefault()

    addLinha()
    atualizaTabela()
    atualizaMediaFinal()
})


function addLinha() {
    const inputNomeAtividade = document.getElementById('nomeAtividade')
    const inputNotaNotaAtividade = document.getElementById('notaAtividade')
    
    atividades.push(inputNomeAtividade.value)
    notas.push(parseFloat(inputNotaNotaAtividade))

    let linha = '<tr>'
    linha += `<td> ${inputNomeAtividade.value} </td>`
    linha += `<td> ${inputNotaNotaAtividade.value} </td>`
    linha += `<td> ${inputNotaNotaAtividade.value >= 7 ? imageAprovado : imageReprovado } </td>`
    linha += '<tr>'
    linhas += linha

    

    inputNomeAtividade.value = ''
    inputNotaNotaAtividade.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal () {
    const mediaFinal = calculaMediaFinal()

    document.getElementById('mediaFinalValor').innerHTML = mediaFinal
    document.getElementById('mediaFinalResultado').innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado

}


function calculaMediaFinal() {
    let somaNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i]
    }

    return somaNotas / notas.length
}