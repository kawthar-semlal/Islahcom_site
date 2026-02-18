// ================= SCROLL ANIMATION =================
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(40px)";
    section.style.transition = "0.6s ease";
    observer.observe(section);
});

// ================= FORM ALERT =================
const form = document.querySelector("form");

form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Merci ! Votre message a bien été envoyé.");
    form.reset();
});
