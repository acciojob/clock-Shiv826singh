//your JS code here. If required.
function updateTime() {
    const timer = document.getElementById("timer");

    const now = new Date();

    // Format: M/D/YYYY, H:MM:SS AM/PM
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    timer.textContent = date + ", " + time;
}

// Run immediately
updateTime();

// Update every second
setInterval(updateTime, 1000);