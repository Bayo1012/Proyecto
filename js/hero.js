/* ==========================================
   HERO BUTTON
========================================== */

const heroButton=document.querySelector(".hero__button");

if(heroButton){

    heroButton.addEventListener("click",()=>{

        document
        .querySelector("#introduccion")
        .scrollIntoView({

            behavior:"smooth"

        });

    });

}