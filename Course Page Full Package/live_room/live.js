const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        panels.forEach(p => p.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(tab.dataset.tab).classList.add("active");
    });
});
// ----------------------------
// VIDEO PLAY LOGIC
// ----------------------------
function playVideo(url) {
    const player = document.getElementById("main-player");
    const gridView = document.getElementById("videos-grid-view");
    const playerView = document.getElementById("video-player-view");

    gridView.style.display = "none";
    playerView.style.display = "block";

    player.src = url;
    player.play();
}


// ----------------------------
// TEST DATA (LOCAL ONLY)
// ----------------------------
const testVideos = [
    "private-jet.mp4"
];




// ----------------------------
// FILENAME → TITLE
// ----------------------------
function titleFromFilename(file) {
    return file
        .replace(".mp4", "")
        .replace(/^\d{4}-\d{2}-\d{2}_/, "")
        .replace(/[-_]/g, " ");
}

// ----------------------------
// RENDER VIDEOS
// ----------------------------
function loadVideos() {
    const grid = document.getElementById("videos-grid");
    grid.innerHTML = "";

testVideos.forEach(file => {
    const card = document.createElement("div");
    card.className = "video-card";
    card.style.backgroundImage = `url(${getThumbUrl(file)})`;
    card.style.backgroundSize = "cover";
    card.style.backgroundPosition = "center";

    card.innerHTML = `
        <div class="video-title">
            ${titleFromFilename(file)}
        </div>
    `;

    card.onclick = () => playVideo(getVideoUrl(file));

    grid.appendChild(card);
});

}

loadVideos();
document.addEventListener("DOMContentLoaded", () => {
    const backBtn = document.getElementById("back-to-videos");
    const gridView = document.getElementById("videos-grid-view");
    const playerView = document.getElementById("video-player-view");
    const player = document.getElementById("main-player");

    if (backBtn) {
        backBtn.onclick = () => {
            player.pause();
            player.src = "";
            playerView.style.display = "none";
            gridView.style.display = "block";
        };
    }
});
function getVideoUrl(file) {
    return `media/upload/videos/${file}`;
}

function getThumbUrl(file) {
    return `media/upload/videos/${file.replace(".mp4", ".jpg")}`;
}
