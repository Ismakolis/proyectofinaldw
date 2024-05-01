$(document).ready(function () {
    //efecto menu
    $('.mian .Menu  ').each(function (index, elemento) {
        $(this).css({
            'top':'-200px'
        })

        $(this).animate({
             top:'0'
        },2000)



    })

})

