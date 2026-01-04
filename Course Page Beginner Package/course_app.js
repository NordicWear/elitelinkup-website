// course_app.js — CLEAN VERSION (BEGINNER PROGRAMS ONLY)

// Path from Course Page folder
const ROOT_V2 = "..";

// BEGINNER PROGRAMS ONLY
const COURSES = [
    {
        id: "affiliate_elite",
        title: "Affiliate Elite (Affiliate Marketing)",
        track: "Affiliate Marketing · Aleks",
        url: "https://elitelinkupapp.super.site/affiliate-elite-affiliate-marketing"
    },
    {
        id: "agency_vanguard",
        title: "Agency Vanguard (SMMA)",
        track: "SMMA · Lukas",
        url: "https://elitelinkupapp.super.site/agency-vanguard-smma"
    },
    {
        id: "amazon_pro",
        title: "Amazon PRO (Amazon FBA)",
        track: "Amazon FBA · Adrian",
        url: "https://elitelinkupapp.super.site/amazon-pro-amazon-fba"
    },
    {
        id: "copywriting_pro",
        title: "Copywriting PRO",
        track: "Copywriting · Dominic",
        url: "https://elitelinkupapp.super.site/copywriting-pro"
    },
    {
        id: "ecommerce_pro",
        title: "E-Commerce PRO (Dropshipping)",
        track: "Dropshipping · Victor",
        url: "https://elitelinkupapp.super.site/e-commerce-pro-dropshipping"
    },
    {
        id: "bull_masterclass",
        title: "The Bull Masterclass (Trading)",
        track: "Trading · Henrik",
        url: "https://elitelinkupapp.super.site/the-bull-masterclass-trading"
    },
    {
        id: "faceless_creator",
        title: "The Faceless Creator (Content Automation)",
        track: "Content Automation · Ryan",
        url: "https://elitelinkupapp.super.site/the-faceless-creator-content-automation"
    },
    {
        id: "rikhards_50_secrets",
        title: "Rikhard's 50 Secrets of Success",
        track: "Mindset & Business · Rikhard",
        url: "https://elitelinkupapp.super.site/rikhards-50-secrets-of-success"
    }
];

// -------------------------------------------
// COURSE GRID (SAME AS CLEAN VERSION)
// -------------------------------------------
(function initCourseGrid() {
    const grid = document.getElementById("courseGrid");
    if (!grid) return;

    COURSES.forEach(course => {
        const card = document.createElement("article");
        card.className = "mentor-style-card";

        card.innerHTML = `
            <div class="mentor-card-img">
                <img src="courses/courses_profiles/${course.id}.png" alt="${course.title}">
            </div>

            <h3 class="mentor-card-title">${course.title}</h3>
            <p class="mentor-card-sub">${course.track}</p>

            <p class="mentor-card-desc">Click to open</p>
            <button class="mentor-card-btn">Open</button>
        `;

        card.addEventListener("click", () => {
            window.location.href = course.url;
        });

        grid.appendChild(card);
    });
})();

// -------------------------------------------
// RIKHARD HERO PROGRAMS (BEGINNER)
// -------------------------------------------
const RIKHARD_PROGRAMS = [
    "rikhards_50_secrets"
];

const eliteContainer = document.getElementById("rikhardsPrograms");
const mentorContainer = document.getElementById("mentorPrograms");

COURSES.forEach(course => {
    const isElite = RIKHARD_PROGRAMS.includes(course.id);
    let card;

    if (isElite) {
        // HERO CARD
        card = document.createElement("article");
        card.className = "hero-card";

        card.innerHTML = `
            <div class="hero-img-wrap">
                <img src="courses/courses_profiles/${course.id}.png" alt="${course.title}">
            </div>

            <h3 class="hero-title">${course.title}</h3>
            <p class="hero-sub">${course.track}</p>
            <p class="hero-desc">Rikhard’s official top-tier program.</p>

            <button class="hero-btn">Start</button>
        `;

        card.addEventListener("click", () => {
            window.location.href = course.url;
        });

        eliteContainer.appendChild(card);

    } else {
        // NORMAL MENTOR CARD
        card = document.createElement("article");
        card.className = "mentor-style-card";

        card.innerHTML = `
            <div class="mentor-card-img">
                <img src="courses/courses_profiles/${course.id}.png" alt="${course.title}">
            </div>

            <h3 class="mentor-card-title">${course.title}</h3>
            <p class="mentor-card-sub">${course.track}</p>

            <p class="mentor-card-desc">Click to start</p>
            <button class="mentor-card-btn">Start</button>
        `;

        card.addEventListener("click", () => {
            window.location.href = course.url;
        });

        mentorContainer.appendChild(card);
    }
});
