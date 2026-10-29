const carrousel= document.querySelector("#carrousel");

/*
=================================================
DECLARATION DES DONNEES
==================================================
*/

const datas_slides= [
    {
        titre: "Ail de garoua",
        description: "Cultiver à Garoua il "
    },
    {
        titre: "Huile de palme camerounais",
        description: "Huile de palme fabriquée au cameroun pour vos repas et mets"
    },
    {
        titre: "Le vrai piment du pays",
        description: "demandez vous serrez servi"
    },

]


carrousel.innerHTML= "";
//une boucle for qui va parcourir les données datas_slides 
for(let i= 0; i< datas_slides.length; i++){
    const data= datas_slides[i];
    carrousel.innerHTML += `
        <div class="slide" style="background-image: url('images/Slide${i+1}.jpg');"> 
            <div class="slide_container">
                <div class="slide_text">
                    <h2>${data.titre}</h2>
                    <p>${data.description}Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nemo. Aliquam, 
                        culpa ea expedita ex ratione officia assumenda quo minus blanditiis in nobis illum corrupti optio
                         excepturi libero delectus velit.</p>
                    <div class="buttons">
                        <a href="#">En savoir +</a>
                    </div>
                </div>
           </div>
        </div>
    `;
}

carrousel.innerHTML += `
    <div class="slide_options">
        <span class="slide_left">
            <i class="fa-solid fa-chevron-left"></i>
        </span>

        <span class="slide_right">
            <i class="fa-solid fa-chevron-right"></i>
        </span>
    </div>
`;

/*
=================================================
DECLARATION DES VARIABLES
==================================================
*/
const slides= document.querySelectorAll("#carrousel .slide");/* querySelectorAll pour tous les slides*/ 
const slide_left= document.querySelector("#carrousel .slide_left");
const slide_right= document.querySelector("#carrousel .slide_right");

//contient l'indice du slide actuellement affiché
let slide_courant= 0;

/*
=================================================
MASQUER TOUS LES SLIDES SAUF LE PREMIER
==================================================
*/
for(let i=1; i< slides.length; i++){
    slides[i].classList.add('hide');
}


/*
=================================================
QUELQUES FONCTIONS UTILES
==================================================
*/
//Fonction permettant d'afficher un slide
function showSlide(index, direction){
    //On masque le slide courant
    slides[slide_courant].classList.add('hide');

    //On cherche l'indice du nouveau slide à afficher
    //toLowerCasepermet de mettre les lettres en miniscule & trim permet de gerer les espaces(annuler les espaces) 
    if (direction.trim().toLowerCase() == "right"){
        if(index >= slides.length){
            slide_courant=0; //affiche le slide suivant
        }
        else{
            slide_courant= index; // sinon affiche le slide precedent
        }
    }
    else if(direction.trim.toLowerCase() == "left"){
        if(index < 0){
            slide_courant= slides.length - 1; //affiche le slide precedent
        }
        else {
            slide_courant= index; // sinon affiche le slide suivant
        }
    }
    //On affiche le slide courant
    slides[slide_courant].classList.remove('hide');
}

/*
=================================================
LANCER LE SLIDE
==================================================
*/
slide_left.addEventListener("click", function(e){
    showSlide(slide_courant - 1, "left");
});
slide_right.addEventListener("click", function(e){
    showSlide(slide_courant + 1, "right");
});

/*
=================================================
LANCER LE SLIDE AUTOMATIQUEMENT
==================================================
*/
setInterval(function() {
    showSlide(slide_courant + 1, "right"); //permet d'afficher tous les slide qui ont été selectionné ils s'afficheront de la droite vers la gauche 
},5000);//5secondes = 5000 correspond au nombre de secondes que va faire chaque slide avant d'être lancer automatiquement

