 $(document).ready(function() {
            $('#carrouselImg').slick({
                autoplay:true,
                dots:true
            })


            $('.menu-hamburguer').click(function() {
                $('nav').slideToggle();

            })

            $('#telefone').mask('(00) 00000-0000')

            $('form').validate({
                rules: {
                    nome: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    telefone: {
                        required: true
                    },
                    mensagem: {
                        required: true
                    }
                }
            })

            $('.listaVeiculos button').click(function(){
                const destino = $('#contato')

                $('html').animate({
                    scrollTop: destino.offset().top
                }, 1000)
            })




        })