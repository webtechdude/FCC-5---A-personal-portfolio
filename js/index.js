// Scroll Out
ScrollOut({ once: true });
// ===========
var lastScrollTop;
navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-80px';
    }
    else {
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});


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
// ================
// Transition Image

let mypic = document.getElementById('myImg');
let images = ["img/1.png", "img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpeg", "img/6.jpeg"]
let countImg = 0;



setInterval(function changeImg() {
    if (countImg == images.length - 1) {
        countImg = 0;
    }
    else {
        countImg++
    }
    mypic.src = images[countImg];
}, 3000);


// ==================================

// Jquery
$(window).on('keydown', function (event) {
    if (event.keyCode == 123) {
        alert("Not allowed");
        return false;
    }
    else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        alert("Image can't be downloaded so easily!")
        return false;  //Prevent from ctrl+shift+i
    }
    else if (event.ctrlKey && event.keyCode == 73) {
        alert('Couldn\'t open the menu!')
        return false;  //Prevent from ctrl+shift+i
    }
});
$(document).on("contextmenu", function (e) {
    alert('Right Click Not Allowed, dont worry, links will be opened in new tab')
    e.preventDefault();
});