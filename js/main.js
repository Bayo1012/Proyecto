window.addEventListener("load",()=>{
    const loader=document.getElementById("loader");
    loader.classList.add("hidden");
});

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
}else{
    animatedElements.forEach(element => {
        element.classList.add("show");
    });
}

const pageVideos = document.querySelectorAll(
    ".chapter__video video, .introduction__video video"
);

if("IntersectionObserver" in window) {
    const videoObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                const video = entry.target;
                if(entry.isIntersecting) {
                    if(video.dataset.wasPlaying === "true") {
                        video.play().catch(() => {});
                    }
                }else{
                    video.dataset.wasPlaying =
                        video.paused ? "false" : "true";
                    video.pause();
                }
            });
        },
        {
            threshold: 0.25
        }
    );
    pageVideos.forEach(video => {
        videoObserver.observe(video);
    });
}