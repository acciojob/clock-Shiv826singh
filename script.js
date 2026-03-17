document.addEventListener("DOMContentLoaded", function () {

    function updateTime() {
        const timer = document.getElementById("timer");

        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();

        timer.textContent = date + ", " + time;
    }

    // Run immediately
    updateTime();

    // Update every second
    setInterval(updateTime, 1000);

});