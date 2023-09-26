document.addEventListener("DOMContentLoaded", function () {
    const dateInfo = document.getElementById("date-info");
    const timeInfo = document.getElementById("time-info"); // Get the element for displaying time

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Function to format a number as a string with leading zero if needed
    function formatNumber(number) {
        return number.toString().padStart(2, '0');
    }

    function updateTime() {
        const today = new Date();
        const dayOfWeek = daysOfWeek[today.getDay()];
        const month = months[today.getMonth()];
        const day = today.getDate();
        const year = today.getFullYear();

        // Get the current time
        const hours = formatNumber(today.getHours());
        const minutes = formatNumber(today.getMinutes());
        const seconds = formatNumber(today.getSeconds());

        // Display date and time
        dateInfo.textContent = `Hello, today is ${dayOfWeek}, ${day}th of ${month} ${year}`;
        timeInfo.textContent = `Current time: ${hours}:${minutes}:${seconds}`;
    }

    // Call updateTime once to display the time immediately
    updateTime();

    // Set an interval to update the time every second
    setInterval(updateTime, 1000);
});