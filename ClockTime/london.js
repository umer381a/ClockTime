var getLondonTime = function () {
    document.getElementById("time").innerHTML = new Date().toLocaleString(
        "en-US", {
            timeZone: "Europe/London",
            timeStyle: "full",
            hourCycle: "h24"
        }
    )
}
getLondonTime();
setInterval(getLondonTime, 1000);