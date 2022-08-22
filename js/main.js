const load = document.querySelector('.loader')
let body = document.querySelector('.body')
window.addEventListener("load", function(){
    load.style.display = 'none'
    body.style.display = 'block'
})