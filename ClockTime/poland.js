var getPolandTime = function () {
    document.getElementById("time").innerHTML = new Date().toLocaleString(
        "en-US", {
            timeZone: "Europe/London",
            timeStyle: "full",
            hourCycle: "h24"
        }
    )
}
getPolandTime();
setInterval(getPolandTime, 1000);