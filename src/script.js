console.log("script loaded")
window.onload = function() { 
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

window.onscroll = function() {myFunction()};

function myFunction() {
if (window.pageYOffset >= sticky) {
console.log("hey")
navbar.classList.add("sticky")
} else {
navbar.classList.remove("sticky");
}
}
}