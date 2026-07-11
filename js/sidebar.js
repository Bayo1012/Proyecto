const sidebarLinks = document.querySelectorAll('.sidebar__link');

sidebarLinks.forEach(link => {
    link.addEventListener("click",()=>{
        sidebarLinks.forEach(item=>{
            item.classList.remove("active");
        });
        link.classList.add("active");
    });
});