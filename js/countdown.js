const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const targetDate = new Date(APP_CONFIG.countdownDate).getTime();

function updateCountdown(){
    const now = new Date().getTime();
    const difference = targetDate - now;
    if(difference <= 0){
        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";
        clearInterval(timer);
        return;
    }
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (difference % (1000 * 60 * 60))
        / (1000 * 60)
    );
    const seconds = Math.floor(
        (difference % (1000 * 60))
        / 1000
    );
    daysElement.textContent = String(days).padStart(2,"0");
    hoursElement.textContent = String(hours).padStart(2,"0");
    minutesElement.textContent = String(minutes).padStart(2,"0");
    secondsElement.textContent = String(seconds).padStart(2,"0");
}
updateCountdown();
const timer = setInterval(updateCountdown,1000);