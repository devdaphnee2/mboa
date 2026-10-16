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
`


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