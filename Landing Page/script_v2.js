// =========================================================
// SCRIPT_V2.JS — ELITE LINKUP V2 FUNCTIONALITY
// Luxury Black & Gold Version
// =========================================================

// ---------------------------------------------------------
// 1. Dynamic Year in Footer
// ---------------------------------------------------------
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// ---------------------------------------------------------
// 2. Mentor Toggle System (Expand/Collapse)
// ---------------------------------------------------------
const mentorButtons = document.querySelectorAll("[data-mentor-toggle]");

mentorButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-mentor-toggle");
        const content = document.getElementById(`mentor-${target}`);

        if (!content) return;

        const isOpen = content.classList.contains("open");

        // Close all other mentor details
        document.querySelectorAll(".mentor-details").forEach(detail => {
            detail.classList.remove("open");
            detail.style.maxHeight = null;
        });

        if (!isOpen) {
            content.classList.add("open");
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.classList.remove("open");
            content.style.maxHeight = null;
        }
    });
});

// ---------------------------------------------------------
// 3. Smooth Fade-In on Scroll (Intersection Observer)
// ---------------------------------------------------------
const observerOptions = {
    threshold: 0.15
};

const fadeElements = document.querySelectorAll(
    ".hero-inner, .proof-card, .offer-card, .mentor-card, .faq-item, .final-cta-inner, .story-text, .section-heading"
);

const fadeObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            obs.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeElements.forEach(el => fadeObserver.observe(el));

// ---------------------------------------------------------
// 4. Mobile Navigation (future friendly)
// ---------------------------------------------------------
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");

if (mobileNavToggle) {
    mobileNavToggle.addEventListener("click", () => {
        mobileNav.classList.toggle("open");
    });
}

// ---------------------------------------------------------
// 5. Smooth Anchor Scrolling for older browsers
// ---------------------------------------------------------
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
    link.addEventListener("click", e => {
        const targetID = link.getAttribute("href");
        const targetSection = document.querySelector(targetID);

        if (targetSection) {
            e.preventDefault();
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});

// ---------------------------------------------------------
// 6. Glow Pulse Effect (Optional Future Expansion)
// ---------------------------------------------------------
// This can be attached to buttons or CTAs when needed.
function addGlowPulse(element) {
    if (!element) return;
    element.classList.add("glow-pulse");
}

// Example usage:
// addGlowPulse(document.querySelector('.btn-primary'));

// ---------------------------------------------------------
// END OF SCRIPT
// ---------------------------------------------------------
// ---------------------------------------------------------
// 7. Golden Overlay Click-to-Play + Click-to-Pause System
// ---------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("heroVideo");
    const overlay = document.getElementById("videoOverlay");

    if (!video || !overlay) return;

    // Autoplay background muted preview
    video.muted = true;
    video.play().catch(() => {});

    let firstPlay = true;  // tracks if overlay play is the first click

    // CLICK OVERLAY → Play video
    overlay.addEventListener("click", () => {
        overlay.classList.add("hidden");

        // ONLY restart on the first play
        if (firstPlay) {
            video.currentTime = 0;
            video.muted = false;
            firstPlay = false;  // after first time, never restart again
        }

        video.play();
    });

    // CLICK VIDEO → Pause + return overlay
    video.addEventListener("click", () => {
        if (!video.paused) {
            video.pause();
            overlay.classList.remove("hidden");
        }
    });

    // When video ends → show overlay again
    video.addEventListener("ended", () => {
        overlay.classList.remove("hidden");
    });
});
/* =========================================================
   SUBTLE MAGNETIC CURSOR PULL FOR FAQ ITEMS
   ========================================================= */

const faqCards = document.querySelectorAll(".faq-item");

faqCards.forEach(card => {
    const strength = 8; // small subtlety

    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        card.style.transform = `
            translate(${x * 0.03}px, ${y * 0.03}px)
            scale(1.00)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translate(0,0)";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("heroVideo");
    const overlay = document.getElementById("videoOverlay");
    const fullscreenBtn = document.getElementById("fullscreenBtn");

    if (!video || !overlay) return;

    // Autoplay background muted preview
    video.muted = true;
    video.play().catch(() => {});

    let firstPlay = true;  // tracks if overlay play is the first click

    // CLICK OVERLAY → Play video
    overlay.addEventListener("click", () => {
        overlay.classList.add("hidden");

        if (firstPlay) {
            video.currentTime = 0;
            video.muted = false;
            firstPlay = false;
        }

        // Show fullscreen button only when actually watching
        if (fullscreenBtn) {
            fullscreenBtn.classList.remove("hidden");
        }

        video.play();
    });

    // CLICK VIDEO → Pause + return overlay
    video.addEventListener("click", () => {
        if (!video.paused) {
            video.pause();
            overlay.classList.remove("hidden");

            // hide fullscreen button when paused
            if (fullscreenBtn) {
                fullscreenBtn.classList.add("hidden");
            }
        }
    });

    // 1️⃣ When user exits fullscreen AND video is paused → show overlay again
    document.addEventListener("fullscreenchange", () => {
        const isFullscreen = document.fullscreenElement != null;

        if (!isFullscreen && video.paused) {
            overlay.classList.remove("hidden");

            // hide fullscreen button when not playing
            if (fullscreenBtn) fullscreenBtn.classList.add("hidden");
        }
    });

    // When video ends → show overlay again & hide fullscreen button
    video.addEventListener("ended", () => {
        overlay.classList.remove("hidden");
        if (fullscreenBtn) {
            fullscreenBtn.classList.add("hidden");
        }
    });

    // CLICK FULLSCREEN BUTTON → request fullscreen
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // prevent triggering pause/play

            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.webkitEnterFullscreen) {
                video.webkitEnterFullscreen(); // iOS Safari
            }
        });
    }
});
