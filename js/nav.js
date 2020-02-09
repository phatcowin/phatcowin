navProperties = document.getElementById("nav-bar").style;
navButtonProperties = document.getElementById("nav-button").style;
prevScrollPos = window.pageYOffset;
        
window.onscroll = function() {
			
// navigation
scrollPos = window.pageYOffset;
if (prevScrollPos > scrollPos || scrollPos <= 0) {
    navProperties.transition = "opacity 0.4s ease-in, top 0.4s ease-out";
    navProperties.top = "0";
    navProperties.opacity = "1";
    navButtonProperties.right = "25px";
    navButtonProperties.cursor = "pointer";
    navButtonProperties.pointerEvents = "auto";
    navButtonProperties.transform = "rotate(0deg)";
} else {
    navProperties.transition = "opacity 0.3s, top 0.5s";
    navProperties.top = "-90px";
    navProperties.opacity = "0";
    navButtonProperties.right = "-110px";
    navButtonProperties.cursor = "default";
    navButtonProperties.pointerEvents = "none";
    navButtonProperties.transform = "rotate(115deg)";
}
prevScrollPos = scrollPos;
    document.getElementById("gradient").style.opacity = (window.pageYOffset / 300) - 0.4;
}
// nav-screen show/hide functions
navScreen = document.getElementById("nav-screen").style;
navShade = document.getElementById("background-shader").style;
function openMenu() {
    navScreen.bottom = "10px";
    navShade.opacity = "1";
    navShade.pointerEvents = "auto";
}
function closeMenu() {
	navScreen.bottom = "-500px";
	navShade.opacity = "0";
	navShade.pointerEvents = "none";
}