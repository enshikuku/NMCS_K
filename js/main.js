const load = document.querySelector('.loader')
mybutton = document.querySelector('#scrollTopBtn')

window.addEventListener("load", function() {
    load.style.display = 'none'
})

window.onscroll = function() {
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        mybutton.style.display = "block"
    } else {
        mybutton.style.display = "none"
    }
}

function topFunction() {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}