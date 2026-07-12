/* ==========================================
   SIDEBAR ACTIVE LINK
========================================== */

const sidebarLinks = document.querySelectorAll(".sidebar__link");
const sections = document.querySelectorAll("main section[id]");

/* Cambiar el enlace activo al hacer clic */
sidebarLinks.forEach(link => {

    link.addEventListener("click", () => {

        sidebarLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});

/* ==========================================
   ACTUALIZAR SEGÚN EL SCROLL
========================================== */

function updateActiveSection() {

    const scrollPosition =
        window.scrollY + window.innerHeight * 0.35;

    let currentSectionId = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
        ) {
            currentSectionId = section.id;
        }

    });

    if (!currentSectionId) {
        return;
    }

    sidebarLinks.forEach(link => {

        const linkTarget = link.getAttribute("href");

        link.classList.toggle(
            "active",
            linkTarget === `#${currentSectionId}`
        );

    });

}

/* Ejecutar al cargar */
window.addEventListener("load", updateActiveSection);

/* Ejecutar al hacer scroll */
window.addEventListener("scroll", updateActiveSection);