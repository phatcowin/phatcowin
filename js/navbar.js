// Navigation Bar
window.onscroll = function() {
    var prevScroll = window.scrollY;
    if (window.scrollY > prevScroll) {
        document.getElementById("nav-bar").style.top = "-100px;";
    }
    else document.getElementById("nav-bar").style.top = "0";
}