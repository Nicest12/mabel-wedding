const galleryImages = document.querySelectorAll(".gallery-grid img");

const photoViewer = document.querySelector("#photoViewer");
const viewerImage = document.querySelector("#viewerImage");
const closeViewer = document.querySelector("#closeViewer");

// Open a larger photo when a gallery image is clicked
galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    viewerImage.src = image.src;
    viewerImage.alt = image.alt;

    photoViewer.showModal();
  });
});

// Close the photo viewer
closeViewer.addEventListener("click", () => {
  photoViewer.close();
});

// Close when the user clicks outside the photo
photoViewer.addEventListener("click", (event) => {
  if (event.target === photoViewer) {
    photoViewer.close();
  }
});

// Wedding countdown timer

const weddingDate = new Date("2026-12-20T12:00:00+01:00").getTime();

const countdownTimer = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = weddingDate - now;

  if (timeLeft <= 0) {
    clearInterval(countdownTimer);

    document.querySelector("#countdownMessage").textContent =
      "Today is the big day! Happy Wedding Day! ❤️";

    document.querySelector(".countdown-container").style.display = "none";

    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  document.querySelector("#days").textContent = days;
  document.querySelector("#hours").textContent = hours;
  document.querySelector("#minutes").textContent = minutes;
  document.querySelector("#seconds").textContent = seconds;

}, 1000);