var getUkraineTime = function () {
    document.getElementById("time").innerHTML = new Date().toLocaleString(
        "en-US", {
            timeZone: "Europe/London",
            timeStyle: "full",
            hourCycle: "h24"
        }
    )
}
getUkraineTime();
setInterval(getUkraineTime, 1000);