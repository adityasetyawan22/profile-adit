// Navigation Logic
const toSocialsBtn = document.getElementById("to-socials");
const toHomeBtn = document.getElementById("to-home");
const homePage = document.getElementById("home-page");
const socialPage = document.getElementById("social-page");

function switchPage(fromPage, toPage) {
    // Animate Out
    gsap.to(fromPage, {
        opacity: 0,
        y: -50,
        duration: 0.5,
        onComplete: () => {
            fromPage.classList.remove("active");
            fromPage.classList.add("hidden");

            // Prepare In
            toPage.classList.remove("hidden");
            toPage.classList.add("active");
            gsap.set(toPage, { opacity: 0, y: 50 });

            // Animate In
            gsap.to(toPage, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        }
    });
}

toSocialsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    switchPage(homePage, socialPage);
});

toHomeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    switchPage(socialPage, homePage);
});

// Initial Load Animation
gsap.from(".fixed-header", { y: -50, opacity: 0, duration: 1, ease: "power3.out" });
gsap.from(".about-card", { scale: 0.9, opacity: 0, duration: 1, delay: 0.3, ease: "power3.out" });
