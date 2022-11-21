const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () => nav.classList.toggle('active'))


//TRABALHOS//

function rotate() {
    var lastChild = $('.slider div:last-child').clone();
    $('.slider div').removeClass('firstSlide')
    $('.slider div:last-child').remove();
    $('.slider').prepend(lastChild)
    $(lastChild).addClass('firstSlide')
}

window.setInterval(function() {
    rotate()
}, 4000);