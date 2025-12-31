/* =====================================================
   Elite LinkUp – Content Vault Core Logic
   Works for ALL courses (video + text)
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("overlay");
    if (!overlay) return;

    const video = document.getElementById("lessonVideo");

    // ============================
    // VIDEO LESSONS (ALL COURSES)
    // ============================
    if (video) {
        overlay.addEventListener("click", () => {
            overlay.classList.add("hidden");
            video.play();
        });

        video.addEventListener("pause", () => {
            overlay.classList.remove("hidden");
        });

        video.addEventListener("ended", () => {
            overlay.classList.remove("hidden");
        });

        video.addEventListener("play", () => {
            overlay.classList.add("hidden");
        });

        return;
    }

// ============================
// TEXT LESSONS
// ============================
const content = document.getElementById("lessonContent");
const exitBtn = document.getElementById("exitLesson");
const card = document.getElementById("textLessonCard");
const iframe = document.querySelector(".lesson-iframe");

if (!content || !exitBtn) return;

overlay.addEventListener("click", () => {
    overlay.classList.add("hidden");
    content.classList.remove("hidden");
    card.classList.add("is-open");

    document.body.classList.add("lesson-open");

    if (iframe) iframe.focus();
});



    exitBtn.addEventListener("click", () => {
    content.classList.add("hidden");
    overlay.classList.remove("hidden");
    card.classList.remove("is-open");

    document.body.classList.remove("lesson-open");

    window.scrollTo({ top: 0, behavior: "smooth" });
});

});
