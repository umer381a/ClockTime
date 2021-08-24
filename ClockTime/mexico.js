var getMexicoTime = function () {
    document.getElementById("time").innerHTML = new Date().toLocaleString(
        "en-US", {
            timeZone: "Europe/London",
            timeStyle: "full",
            hourCycle: "h24"
        }
    )
}
getMexicoTime();
setInterval(getMexicoTime, 1000);