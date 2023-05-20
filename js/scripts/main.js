var typed = new Typed("#typed-text", {
    strings: ["We Make Magic!", "Design.", "Create.", "Emulate."],
    typeSpeed: 50,
    backSpeed: 50,
    smartBackspace: true,
    loop: true,
});

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
        header.classList.toggle("active");
        const accordionContent = header.nextElementSibling;
        if (accordionContent.style.display === "block") {
            accordionContent.style.display = "none";
        } else {
            accordionContent.style.display = "block";
        }
    });
});

// BACKGROUND MAIN SECTION SEASON 1

const ButtonSeason1 = document.getElementById("button-season1");
const VideoSeason1 = document.getElementById("js-video");

ButtonSeason1.addEventListener("mouseover", (event) => {
    VideoSeason1.classList.add("s1");
});

ButtonSeason1.addEventListener("mouseleave", (event) => {
    VideoSeason1.classList.remove("s1");
});

const ButtonSeason2 = document.getElementById("button-season2");
const VideoSeason2 = document.getElementById("js-video2");

ButtonSeason2.addEventListener("mouseover", (event) => {
    VideoSeason2.classList.add("s1");
});

ButtonSeason2.addEventListener("mouseleave", (event) => {
    VideoSeason2.classList.remove("s1");
});

const ButtonSeason4 = document.getElementById("button-season4");
const VideoSeason4 = document.getElementById("js-video4");

ButtonSeason4.addEventListener("mouseover", (event) => {
    VideoSeason4.classList.add("s1");
});

ButtonSeason4.addEventListener("mouseleave", (event) => {
    VideoSeason4.classList.remove("s1");
});
