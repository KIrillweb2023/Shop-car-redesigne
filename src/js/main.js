import slider from "./modules/slider";
import replaseImg from "./modules/slide-image";
import tabs from "./modules/tabs";
import accordeon from "./modules/accordeon";
import logout from "./modules/logout";
import modal from "./modules/modal";
import catalogPage from "./modules/catalog";
import menu from "./modules/menu";

document.addEventListener("DOMContentLoaded", (e) =>{

    "use strict"
    slider();
    replaseImg();
    tabs();
    accordeon();
    logout();
    modal();
    catalogPage();
    menu();
    
});