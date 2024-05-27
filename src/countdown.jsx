const countdownDate = new Date("Jun 30, 2024 00:00:00").getTime();

const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("countdown-timer").innerHTML = days + " días";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-timer").innerHTML = "¡Ya es el día!";
    }
}, 1000);
