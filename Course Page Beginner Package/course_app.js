// course_app.js — CLEAN VERSION (No course.html references)

// Path from Course Page folder
const ROOT_V2 = "..";

// List of courses for the grid
const COURSES = [
    {
        id: "rikhards_50_secrets",
        title: "Rikhard's 50 Secrets of Success",
        track: "Success & Mindset · Rikhard",
        notion: "https://www.notion.so/Rikhard-s-50-Secrets-of-Success-2bd02dac10bc818080f7c45aa58d7102?pvs=21"
    },
    {
        id: "affiliate_elite",
        title: "Affiliate Elite (Affiliate Marketing)",
        track: "Affiliate Marketing · Aleks"
    },
    {
        id: "ecommerce_pro",
        title: "E-Commerce PRO (Dropshipping)",
        track: "Dropshipping · Victor"
    },
    {
        id: "faceless_creator",
        title: "The Faceless Creator (Content Automation)",
        track: "Content Automation · Ryan"
    },
    {
        id: "amazon_pro",
        title: "Amazon PRO (Amazon FBA)",
        track: "Amazon FBA · Adrian"
    },
    {
        id: "copywriting_pro",
        title: "Copywriting PRO",
        track: "Copywriting · Dominic"
    },
    {
        id: "agency_vanguard",
        title: "Agency Vanguard (SMMA)",
        track: "SMMA · Lukas"
    },
    {
        id: "bull_masterclass",
        title: "The Bull Masterclass (Trading)",
        track: "Trading · Henrik"
    }
];

// -------------------------------------------
// ONLY REMAINING FUNCTION: COURSE GRID
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
            if (course.id === "rikhards_50_secrets") {
                            window.location.href = course.notion; // Open Notion directly
                        } else {
                            window.location.href = `course_modules.html?id=${course.id}`; // Default behavior
                        }
        });

        grid.appendChild(card);
    });
})();
// Top 2 Rikhard programs
const RIKHARD_PROGRAMS = [
    "rikhards_50_secrets",
    "rikhards_networking_playbook"
];

const eliteContainer = document.getElementById("rikhardsPrograms");
const mentorContainer = document.getElementById("mentorPrograms");

COURSES.forEach(course => {
    const isElite = RIKHARD_PROGRAMS.includes(course.id);
    let card;

    if (isElite) {
        // HERO PREMIUM CARD
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
            if (course.id === "rikhards_50_secrets" && course.notion) {
                window.location.href = "https://rikhards-50-secrets.super.site/";
            } else {
                window.location.href = `course_modules.html?id=${course.id}`;
            }
        });

        eliteContainer.appendChild(card);

    } else {
        // NORMAL MENTOR PROGRAM CARD
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
            if (course.id === "rikhards_50_secrets" && course.notion) {
                window.location.href = "https://rikhards-50-secrets.super.site/";
            } else {
                window.location.href = `course_modules.html?id=${course.id}`;
            }
        });

        mentorContainer.appendChild(card);
    }
});

