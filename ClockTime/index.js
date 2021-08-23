var getPakistanTime = function () {
    document.getElementById("time").innerHTML = new Date().toLocaleString(
        "en-US", {
            timeZone: "Asia/Karachi",
            timeStyle: "full",
            hourCycle: "h24"
        }
    )
}
getPakistanTime();
setInterval(getPakistanTime, 1000);