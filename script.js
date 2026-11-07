
// ==================================
// RELATIONSHIP START DATE
// ==================================

// Vervang dit door jullie echte startdatum.
// Formaat: YYYY-MM-DD
const RELATIONSHIP_START = "2024-11-24";

function updateCounter() {
    const start = new Date(RELATIONSHIP_START + "T20:30:00");
    const now = new Date();

    if (
        RELATIONSHIP_START === "YYYY-MM-DD" ||
        Number.isNaN(start.getTime()) ||
        start > now
    ) {
        document.getElementById("days").textContent = "---";
        document.getElementById("hours").textContent = "--";
        document.getElementById("minutes").textContent = "--";
        return;
    }

    const difference = now - start;

    const totalMinutes = Math.floor(difference / 60000);
    const days = Math.floor(totalMinutes / 1440);
    const hours = Math.floor((totalMinutes % 1440) / 60);
    const minutes = totalMinutes % 60;

    document.getElementById("days").textContent =
        days.toLocaleString("en-US");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");
}

updateCounter();
setInterval(updateCounter, 60000);


// ==================================
// MOBILE NAVIGATION
// ==================================

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
});


// Close menu after clicking a link
document.querySelectorAll(".navigation a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});
