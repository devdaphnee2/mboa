/*
=================================================
GESTION DE L'ENTETE
==================================================
*/
const entete= document.querySelector("#entete");
window.addEventListener("scroll", function(e){
    // Lorsque ça va atteindre la valeur 50, la couleur de fond de l`\'ente changera
    if(this.window.scrollY > 50){
        entete.classList.add("entete_fond");
    }
    else{
        entete.classList.remove("entete_fond");
    }
});