const countdownDate = new Date("April 23, 2025 13:45:00 GMT+0700").getTime();

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".cont-days").textContent = days < 10 ? `0${days}` : days;
    document.querySelector(".cont-hour").textContent = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".cont-minute").textContent = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".cont-second").textContent = seconds < 10 ? `0${seconds}` : seconds;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "HAPPY BIRTHDAY!";
    }
}, 1000);
