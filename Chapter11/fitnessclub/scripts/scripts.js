// Hamburger menu funtion
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");
    if(menu.style.display === "block" && logo.style.display === "none"){
        menu.style.display = "none";
        logo.style.display = "block";
    }
    else{
        menu.style.display = "block";
        logo.style.display = "none";
    }
}

function discount() {
    var promo = document.getElementById("special");
    promo.firstChild.nodeValue = "Promo Code: D25START";
    promo.style.color = "#ff0000";
    promo.style.fontSize = "2em";
}

