
var mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function scrollPlz() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}



// Jquery
$(window).on('keydown', function (event) {
    if (event.keyCode == 123) {
        alert("Don't do nonsense 😜");
        return false;
    }
    else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        alert("Don't try downloading my hot pic 😜")
        return false;  //Prevent from ctrl+shift+i
    }
    else if (event.ctrlKey && event.keyCode == 73) {
        alert('Please dont 😜')
        return false;  //Prevent from ctrl+shift+i
    }
});
$(document).on("contextmenu", function (e) {
    alert('Right Click Not Allowed, dont worry links will be opened in new tab')
    e.preventDefault();
});
