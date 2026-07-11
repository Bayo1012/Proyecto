/* ==========================================
   LOADER
========================================== */

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    loader.classList.add("hidden");

});


/* ==========================================
   SCROLL ANIMATION
========================================== */

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

document.querySelectorAll(".fade-up").forEach(section=>{

    observer.observe(section);

});