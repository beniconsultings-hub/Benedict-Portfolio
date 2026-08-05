/*=========================================
        APP.JS
=========================================*/
document.addEventListener("DOMContentLoaded", () => {
    /*=========================================
        STICKY HEADER
    =========================================*/
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 80) {
           header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });
    /*=========================================
        ACTIVE NAV LINK
    =========================================*/
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a");
    function activeMenu() {
        const scrollY = window.pageYOffset;
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute("id");
            if (scrollY >= sectionTop &&
                scrollY < sectionTop + sectionHeight) {
               navLinks.forEach(link => {
                   link.classList.remove("active");
                   if (link.getAttribute("href") === "#" + sectionId) {
                       link.classList.add("active");
                    }
                });
            }
        });
    }
    window.addEventListener("scroll", activeMenu);
    /*=========================================
        SCROLL TO TOP
    =========================================*/
    const topBtn = document.getElementById("scroll-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            topBtn.classList.add("show");
        } else {
            topBtn.classList.remove("show");
        }
    });
    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
    /*=========================================
        SCROLL REVEAL
    =========================================*/
    const revealItems = document.querySelectorAll(
        ".project-card, .service-box, .step, .testimonial-card, .about-grid, .cta-box"
    );
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
               }
           });
        },
        {
            threshold: .15
        }
    );
    revealItems.forEach(item => {
        item.classList.add("hidden");
        revealObserver.observe(item);
    });
    /*=========================================
        PARALLAX IMAGE
    =========================================*/
    const heroImage = document.querySelector(".image-wrapper");
    window.addEventListener("mousemove", (e) => {
        if (!heroImage) return;
        const x = (window.innerWidth / 2 - e.clientX) / 60;
        const y = (window.innerHeight / 2 - e.clientY) / 60;
        heroImage.style.transform =
            `translate(${x}px, ${y}px)`;
    });
    /*=========================================
        CURSOR
    =========================================*/
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", e => {
        if (!cursor) return;
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });
    const hoverItems = document.querySelectorAll(
        "a, button, .service-box, .project-card"
    );
    hoverItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            cursor.classList.add("cursor-grow");
        });
        item.addEventListener("mouseleave", () => {
            cursor.classList.remove("cursor-grow");
        });
    });
    /*=========================================
        MOBILE MENU
    =========================================*/
    const menuBtn = document.getElementById("menu-btn");
    const nav = document.querySelector("nav");
    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            nav.classList.toggle("show-menu");
            menuBtn.classList.toggle("open");
        });
    }
    /*=========================================
        CLOSE MOBILE MENU
    =========================================*/
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("show-menu");
        });
    });
    /*=========================================
        BUTTON RIPPLE
    =========================================*/
    const buttons = document.querySelectorAll(
        ".primary-btn, .secondary-btn, .nav-btn"
    );
    buttons.forEach(button => {
        button.addEventListener("mousemove", function(e){
            const rect = this.getBoundingClientRect();
            this.style.setProperty(
                "--x",
                `${e.clientX - rect.left}px`
          );
            this.style.setProperty(
                "--y",
                `${e.clientY - rect.top}px`
            );
        });
    });
    /*=========================================
        PROJECT HOVER
    =========================================*/
    const projects = document.querySelectorAll(".project-card");
    projects.forEach(project => {
        project.addEventListener("mousemove", e => {
            const rect = project.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            project.style.setProperty("--mouse-x", `${x}px`);
            project.style.setProperty("--mouse-y", `${y}px`);
        });
    });
    /*=========================================
        HERO FADE
    =========================================*/
    const hero = document.querySelector(".hero");
    window.addEventListener("scroll", () => {
        if (!hero) return;
        hero.style.opacity = 1 - window.scrollY / 900;
    });
});
