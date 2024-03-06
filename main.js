$(document).ready(function() {
    $('header button').click(function(){
        let form = $('form');
        if (form.is(':visible')) {
            form.slideUp();
        } else {
            form.slideDown();
        }
    });
    
    $('button[type="reset"]').click(function() {
        $('form').slideUp();
    })
    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoNovaImg = $('#endereco-de-img').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src='${enderecoNovaImg}' />`).appendTo(novoItem);
        $(`
        <div class="overlay-img-link">
            <a href='${enderecoNovaImg}' title="Ver imagem em tamanho real" target="_blank">
                Ver imagem em tamanho real
            </a>
        </div>
    `).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn();
    $('#endereco-de-img').val('');
    })
})