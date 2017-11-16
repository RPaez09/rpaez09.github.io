/* Richard Paez | 2017 */

var nav = document.getElementById("navigation-main");
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

});