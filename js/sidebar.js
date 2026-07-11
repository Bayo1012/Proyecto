/* ==========================================
   SIDEBAR ACTIVE LINK
========================================== */

const sidebarLinks = document.querySelectorAll(".sidebar__link");

sidebarLinks.forEach(link => {

    link.addEventListener("click", () => {

        sidebarLinks.forEach(item =>
            item.classList.remove("active")
        );

        link.classList.add("active");

    });

});

/* ==========================================
   ACTIVE SECTION ON SCROLL
========================================== */

const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    sidebarLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});