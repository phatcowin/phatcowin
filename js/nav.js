var prevScrollPos = window.pageYOffset;

window.onscroll = function () {
    // navigation
    var scrollPos = window.pageYOffset;
    if (prevScrollPos > scrollPos || scrollPos <= 0) {
        document.getElementById("nav-bar").style.transition = "opacity 0.4s ease-in, top 0.4s ease-out";
        document.getElementById("nav-bar").style.top = "0";
        document.getElementById("nav-bar").style.opacity = "1";
        if (document.getElementById('nav-mobile').style.top !== "10px") document.getElementById("nav-mobile").style.top = "-265px"; // -370px
    } else {
        document.getElementById("nav-bar").style.transition = "opacity 0.3s, top 0.5s";
        document.getElementById("nav-bar").style.top = "-90px";
        document.getElementById("nav-bar").style.opacity = "0";
        if (document.getElementById('nav-mobile').style.top !== "10px") document.getElementById("nav-mobile").style.top = "-400px"; // -465px
    }

    prevScrollPos = scrollPos;
    document.getElementById("gradient").style.opacity = (window.pageYOffset / 300) - 0.4;
}

function toggle_m_nav() {
    var navToggled = document.getElementById("nav-mobile").style.top;
    
    if (navToggled == "30px") {
        document.getElementById("nav-mobile").style.top = "-265px";
        document.getElementById("nav-mobile-blinds").style.opacity = "0";
    } else {
        document.getElementById("nav-mobile").style.top = "30px";
        document.getElementById("nav-mobile-blinds").style.opacity = "0.5";
    }
}