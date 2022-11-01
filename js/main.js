const load = document.querySelector('.loader')
window.addEventListener("load", function(){
    load.style.display = 'none'
})
mybutton = document.querySelector('#scrollTopBtn')

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {scrollFunction()}

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