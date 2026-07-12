/* ==========================================
   LOADER
========================================== */

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    loader.classList.add("hidden");

});

/* ==========================================
   ANIMACIONES AL HACER SCROLL
========================================== */

const animatedElements = document.querySelectorAll(".fade-up");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {
                entry.target.classList.toggle(
                    "show",
                    entry.isIntersecting
                );
            });
        },
        {
            threshold: 0.15,
            rootMargin: "-8% 0px -8% 0px"
        }
    );

    animatedElements.forEach(element => {
        observer.observe(element);
    });

} else {

    animatedElements.forEach(element => {
        element.classList.add("show");
    });

}