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
        document.documentElement.style.setProperty('--aboutus-d', '-55%');
        document.documentElement.style.setProperty('--aboutus-m', '-50%');
    }
	else {
        document.documentElement.style.setProperty('--aboutus-d', '10%');
        document.documentElement.style.setProperty('--aboutus-m', '50%');
    }
}

// staff show/hide functions
function showStaffMenu() { // show staff scroller
	document.documentElement.style.setProperty('--staffselect-d', 'calc(10% + 40px)');
	document.documentElement.style.setProperty('--staffselect-m', '50%');
	document.documentElement.style.setProperty('--about-us-opacity', '0.7');
	document.getElementById("about-us").style.filter = "brightness(0.85)";
	document.getElementById("staff-select").style.pointerEvents = "auto";
	document.documentElement.style.setProperty('--staffBack-left-d', 'calc(10% + 301px)');
	document.documentElement.style.setProperty('--staffBack-left-m', 'calc(50% + 83px)');			
}
function hideStaffMenu() {
	document.documentElement.style.setProperty('--staffselect-d', '-55%');
	document.documentElement.style.setProperty('--staffselect-m', '-50%');
	document.getElementById("about-us").style.filter = "brightness(1)";
	document.documentElement.style.setProperty('--about-us-opacity', '1');
	document.getElementById("staff-select").style.pointerEvents = "none";
	document.documentElement.style.setProperty('--staffBack-left-d', 'calc(-55% + 262px)');
	document.documentElement.style.setProperty('--staffBack-left-m', '-39%');
}
function showStaffInfo(staffm) { // show staff-info
	document.getElementById("about-us").style.filter = "brightness(0.7)";
	document.getElementById("staff-select").style.filter = "brightness(0.85)";
	document.getElementById("staff-select").style.pointerEvents = "none";
	document.documentElement.style.setProperty('--staffinfo-d', 'calc(10% + 80px)');
	document.documentElement.style.setProperty('--staffinfo-m', '50%');
	document.documentElement.style.setProperty('--staffBack-left-d', 'calc(10% + 341px)');
	document.documentElement.style.setProperty('--staffBack-top-m', 'calc(40% + 270px)');
	document.getElementById("staff-info").style.pointerEvents = "auto";
	document.getElementById(staffm).style.display = "inline";
	document.documentElement.style.setProperty('--staffselect-opacity', '0.7');
	document.documentElement.style.setProperty('--about-us-opacity', '0.45');
}
function hideStaffInfo() {
	document.documentElement.style.setProperty('--topbackground-d', 'var(--default-top-background)');
	document.getElementById("about-us").style.filter = "brightness(0.85)";
	document.getElementById("staff-select").style.filter = "brightness(1)";
	document.getElementById("staff-select").style.opacity = "1";
	document.getElementById("staff-select").style.pointerEvents = "auto";
	document.documentElement.style.setProperty('--staffinfo-d', '-55%');
	document.documentElement.style.setProperty('--staffinfo-m', '-50%');
	document.documentElement.style.setProperty('--staffBack-left-d', 'calc(10% + 301px)');
	document.documentElement.style.setProperty('--staffBack-top-m', 'calc(40% + 250px)');
	document.getElementById("staff-info").style.pointerEvents = "none";
	document.documentElement.style.setProperty('--about-us-opacity', '0.7');
	document.documentElement.style.setProperty('--staffselect-opacity', '1');
	for (let i = 1; i <= 9; i++) {
        document.getElementById("staff"+i).style.display = "none";
    }
}
function staffBack() {
	if (document.getElementById("staff-info").style.pointerEvents == 'auto') hideStaffInfo();
	else hideStaffMenu();
}