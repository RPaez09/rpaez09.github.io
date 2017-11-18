/* Richard Paez | 2017 */

//
/* Menu growing/shrinking + parallax effects */
//
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

    if(window.scrollY * .4 > 110){
        jumboH1.style.top = "110px";
    }
    else{
        jumboH1.style.top = (window.scrollY * .4) + "px";
        jumboH2.style.top = (window.scrollY * .4) + "px";
        
    }
    jumbo.style.backgroundPositionY = "-" + window.scrollY + "px";

});

//
/* Switching sections */
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

        switch(activeSection){
            case "about":
                aboutSection.style.display = "none";
                aboutBtn.classList.remove("active");
                break;
            
            case "portfolio":
                portfolioSection.style.display = "none";
                portfolioBtn.classList.remove("active");
                break;

            case "contact":
                contactSection.style.display = "none";
                contactBtn.classList.remove("active");
                break;
        }
        
        switch(newSection){
            
            case "about":
                aboutSection.style.display = "block";
                activeSection = "about";
                aboutBtn.classList.add("active");
                break;

            case "portfolio":
                portfolioSection.style.display = "block";
                portfolioBtn.classList.add("active");
                activeSection = "portfolio";
                break;

            case "contact":
                contactSection.style.display = "block";
                contactBtn.classList.add("active");
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