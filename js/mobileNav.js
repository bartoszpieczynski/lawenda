let navBtn = document.getElementById('navi-toggle');
let link = document.getElementsByClassName('mobile-nav__link');

function clickCheck() {
   navBtn.checked = false;
}

for (var i = 0 ; i < link.length; i++) {
   link[i].addEventListener('click', clickCheck ) ; 
}


