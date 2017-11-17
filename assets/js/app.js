/* Richard Paez | 2017 */

var nav = document.getElementById("navigation-main");
var jumbo = document.getElementById("jumbotron-main");
var jumboH1 = document.getElementById("jumboH1");
var jumboH2 = document.getElementById("jumboH2");

var navExpanded = true;

window.addEventListener('scroll', function(e) {
    
    if( window.scrollY >= 20 && navExpanded == true ){
        nav.style.paddingTop = 0;
        nav.style.paddingBottom = 0;
        navExpanded = false;
    }

    else if ( window.scrollY == 0 && navExpanded == false ){
        nav.style.paddingTop = "15px";
        nav.style.paddingBottom = "15px";
        navExpanded = true;
    }

    jumboH1.style.top = (window.scrollY * .4) + "px";
    jumboH2.style.top = (window.scrollY * .4) + "px";
    jumbo.style.backgroundPositionY = "-" + window.scrollY + "px";

});
//
/* Now for switching sections */
//
var aboutBtn = document.getElementById("about-btn");
var portfolioBtn = document.getElementById("portfolio-btn");
var contactBtn = document.getElementById("contact-btn");

var aboutSection = document.getElementById("about-section");
var portfolioSection = document.getElementById("portfolio-section");
var contactSection = document.getElementById("contact-section");

var activeSection = "about";

function toggleSection(newSection){

    if(newSection != activeSection){
        
        switch(newSection){
            
            case "about":
                portfolioSection.style.display = "none";
                contactSection.style.display = "none";
                aboutSection.style.display = "block";
                activeSection = "about";
                break;

            case "portfolio":
                aboutSection.style.display = "none";
                contactSection.style.display = "none";
                portfolioSection.style.display = "block";
                activeSection = "portfolio";
                break;

            case "contact":
                aboutSection.style.display = "none";
                portfolioSection.style.display = "none";
                contactSection.style.display = "block";
                activeSection = "contact";
                break;
        }
    }
}

aboutBtn.addEventListener("click", function(e){
    toggleSection("about");
});

portfolioBtn.addEventListener("click", function(e){
    toggleSection("portfolio");
});

contactBtn.addEventListener("click", function(e){
    toggleSection("contact");
});