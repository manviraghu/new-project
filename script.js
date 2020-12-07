var menu = document.querySelector('span');
var f = document.querySelector('#menu');
var overlayer = document.querySelector('#menuoverlay');
var back = document.querySelector('#back');
var down = document.querySelector('#down');
var footer = document.querySelector('#footer');

menu.addEventListener('click', function() {

    overlayer.style.transform = 'translateX(0%)';
})
back.addEventListener('click', function() {
    overlayer.style.transform = 'translateX(100%)';

})
down.addEventListener('click', function() {
    footer.style.display = 'none';
})