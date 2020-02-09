cssvar = document.documentElement.style;
		
// hero funcitons
hero = document.getElementById("slideshow").style;
historyViewer = document.getElementById("history-viewer").style;
let imageCount = 2;
let histPage = 0;
let histPagePrev = 0;
let histPageNext = 1;
isGecko = getComputedStyle(document.body).getPropertyValue('--is-gecko');
		
function heroDefault() {
    if (isGecko == 1) hero.backgroundImage = "url(images/hero/hero1.jpeg)";
    else {
        setInterval (function() {
            hero.backgroundImage = "url(images/hero/hero"+imageCount+".jpeg)";
            imageCount++;
            if (imageCount > 9) imageCount = 1;
        }, 7000);
    }
}
heroDefault();
		
function history(delta) {
	if (delta == 'next') histPage++;
	if (delta == 'previous') histPage--;
	if (delta == 'home') { 
        histPage = 0;			
        for (var i = 0; i < 5; i++) {
            document.getElementById("history-content-"+(i + 1)).style.left = "var(--history-inactive)"
        }
    }
    if (histPage > 5) histPage = 5;
    if (histPage < 0) histPage = 0;
    if (histPage > 0) viewHistory('1');
    else viewHistory('0');
}
		
function viewHistory(historyBool) {
    historyViewer.backgroundImage = "url(images/history/history"+histPage+".png)";
    historyViewer.opacity = historyBool;
	histPagePrev = histPage - 1;
	histPageNext = histPage + 1;
	if (histPagePrev > 0) {
        document.getElementById("history-content-"+histPagePrev).style.left = 'var(--history-inactive)';
    }
    if (histPageNext < 6) {
        document.getElementById("history-content-"+histPageNext).style.left = 'var(--history-inactive)';
    }
    if (histPage > 0 && histPage < 6) document.getElementById("history-content-"+histPage).style.left = 'var(--history-active)';
    if (historyBool == '1') {
        cssvar.setProperty('--aboutus-d', '-55%');
        cssvar.setProperty('--aboutus-m', '-50%');
    }
	else {
        cssvar.setProperty('--aboutus-d', '10%');
        cssvar.setProperty('--aboutus-m', '50%');
    }
}

aboutUs = document.getElementById("about-us").style;
staffMenu = document.getElementById("staff-select").style;
staffInfo = document.getElementById("staff-info").style;
// staff show/hide functions
function showStaffMenu() { // show staff scroller
	cssvar.setProperty('--staffselect-d', 'calc(10% + 40px)');
	cssvar.setProperty('--staffselect-m', '50%');
	cssvar.setProperty('--about-us-opacity', '0.7');
	aboutUs.filter = "brightness(0.85)";
	staffMenu.pointerEvents = "auto";
	cssvar.setProperty('--staffBack-left-d', 'calc(10% + 301px)');
	cssvar.setProperty('--staffBack-left-m', 'calc(50% + 83px)');			
}
function hideStaffMenu() {
	cssvar.setProperty('--staffselect-d', '-55%');
	cssvar.setProperty('--staffselect-m', '-50%');
	aboutUs.filter = "brightness(1)";
	cssvar.setProperty('--about-us-opacity', '1');
	staffMenu.pointerEvents = "none";
	cssvar.setProperty('--staffBack-left-d', 'calc(-55% + 262px)');
	cssvar.setProperty('--staffBack-left-m', '-39%');
}
function showStaffInfo(staffm) { // show staff-info
	aboutUs.filter = "brightness(0.7)";
	staffMenu.filter = "brightness(0.85)";
	staffMenu.pointerEvents = "none";
	cssvar.setProperty('--staffinfo-d', 'calc(10% + 80px)');
	cssvar.setProperty('--staffinfo-m', '50%');
	cssvar.setProperty('--staffBack-left-d', 'calc(10% + 341px)');
	cssvar.setProperty('--staffBack-top-m', 'calc(50% + 185px)');
	staffInfo.pointerEvents = "auto";
	document.getElementById(staffm).style.display = "inline";
	cssvar.setProperty('--staffselect-opacity', '0.7');
	cssvar.setProperty('--about-us-opacity', '0.45');
}
function hideStaffInfo() {
	cssvar.setProperty('--topbackground-d', 'var(--default-top-background)');
	aboutUs.filter = "brightness(0.85)";
	staffMenu.filter = "brightness(1)";
	staffMenu.opacity = "1";
	staffMenu.pointerEvents = "auto";
	cssvar.setProperty('--staffinfo-d', '-55%');
	cssvar.setProperty('--staffinfo-m', '-50%');
	cssvar.setProperty('--staffBack-left-d', 'calc(10% + 301px)');
	cssvar.setProperty('--staffBack-top-m', 'calc(50% + 167px)');
	staffInfo.pointerEvents = "none";
	cssvar.setProperty('--about-us-opacity', '0.7');
	cssvar.setProperty('--staffselect-opacity', '1');
	for (var i = 1; i <= 12; i++) {
        document.getElementById("staff"+i).style.display = "none";
    }
}
function staffBack() {
	if (staffInfo.pointerEvents == 'auto') hideStaffInfo();
	else hideStaffMenu();
}