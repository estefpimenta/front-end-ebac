
$(document).ready(function() {

     //Modo escuro
        $('#theme').on('click', function(){
            $('body').toggleClass('darkBody')
            $('input').toggleClass('darkBtnAndInput')
            $('button').toggleClass('darkBtnAndInput')
            $('.container').toggleClass('darkBtnAndInput')
            $('li').toggleClass('darkLi')

             
        })
    
    $('form').on('submit', function(e) {
        e.preventDefault()       
        
        const tarefaAdd = $('#tarefaCadastrada').val()
        const novoItem = $(`<li style="display:none">${tarefaAdd}</li>`)
        
        // Verifica texto vazio
        if(tarefaAdd === '') {
            alert('Texto inválido. Digite uma tarefa para adicionar')
            return
        }

        //Insere tarefa nova na lsita
        
        $(novoItem).appendTo('.lista ul')
        $(novoItem).fadeIn(300)
        $('#tarefaCadastrada').val('')

        if ($('body').hasClass('darkBody')) {
        novoItem.addClass('darkLi')
        }

        //Marca tarefa como concluida
        $(novoItem).on('click',function() {
            $(this).toggleClass('concluida')
        }) 

        //Apaga tarefa doubleClick
        $(novoItem).on('dblclick', function() {
            $(this).fadeOut(300)
        })
    })


    



})



