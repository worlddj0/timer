const currentTimeElement = document.getElementById('current-time');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function updateCurrentTime() {
    const currentTime = new Date();
    currentTimeElement.innerHTML = `Current Time: ${currentTime.toLocaleString()}`;
}

updateCurrentTime();
setInterval(updateCurrentTime, 1000);

function calculateDays() {
    const date1 = new Date(document.getElementById('date1').value);
    const date2 = new Date(document.getElementById('date2').value);

    const timeDifference = Math.abs(date2 - date1);
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    document.getElementById('result').innerHTML = `Number of days: ${daysDifference}`;
}

function updateCountdown() {
    const currentDate = new Date();
    const date2 = new Date(document.getElementById('date2').value);

    if (date2 > currentDate) {
        const timeDifference = date2 - currentDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        daysElement.innerHTML = `${days}d`;
        hoursElement.innerHTML = `${hours}h`;
        minutesElement.innerHTML = `${minutes}m`;
        secondsElement.innerHTML = `${seconds}s`;

        document.getElementById('countdown-seconds').innerHTML = `Remaining Time in Seconds: ${timeDifference / 1000}s`;
    } else {
        daysElement.innerHTML = `0d`;
        hoursElement.innerHTML = `0h`;
        minutesElement.innerHTML = `0m`;
        secondsElement.innerHTML = `0s`;

        document.getElementById('countdown-seconds').innerHTML = "";
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);
