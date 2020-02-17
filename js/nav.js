navProperties = document.getElementById("nav-bar").style;
prevScrollPos = window.pageYOffset;
        
window.onscroll = function() {
    // navigation
    scrollPos = window.pageYOffset;
    if (prevScrollPos > scrollPos || scrollPos <= 0) {
        document.getElementById("nav-bar").style.transition = "opacity 0.4s ease-in, top 0.4s ease-out";
        document.getElementById("nav-bar").style.top = "0";
        document.getElementById("nav-bar").style.opacity = "1";
    } else {
        document.getElementById("nav-bar").style.transition = "opacity 0.3s, top 0.5s";
        document.getElementById("nav-bar").style.top = "-90px";
        document.getElementById("nav-bar").style.opacity = "0";
    }

    prevScrollPos = scrollPos;
    document.getElementById("gradient").style.opacity = (window.pageYOffset / 300) - 0.4;
}