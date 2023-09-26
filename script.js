document.addEventListener("DOMContentLoaded", function () {
    const dateInfo = document.getElementById("date-info");
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getDay()];
    const month = months[today.getMonth()];
    const day = today.getDate();
    const year = today.getFullYear();

    dateInfo.textContent = `Hello, today is ${dayOfWeek}, ${day}th of ${month} ${year}`;
});
