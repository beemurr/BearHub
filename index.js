document.addEventListener("DOMContentLoaded", async () => {
    const videoContainer = document.getElementById("video-container");

    // Fetch video list
    const response = await fetch("./list.json");
    const videoTitles = await response.json();

    // Create video cards
    videoTitles.forEach((title, index) => {
        const videoCard = document.createElement("div");
        videoCard.className = "video-card";
        videoCard.innerHTML = `
        <img src="./thumbnails/${index}.jpg" alt="${title}" class="video-thumbnail">
        <div class="video-title">${title}</div>
    `;

        // Add click event to redirect to video
        videoCard.addEventListener("click", () => {
            window.location.href = `./videos/${index}.mp4`;
        });

        videoContainer.appendChild(videoCard);
    });
});
