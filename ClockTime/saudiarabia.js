var getSaudiaTime = function () {
    document.getElementById("time").innerHTML = new Date().toLocaleString(
        "en-US", {
            timeZone: "Asia/Riyadh",
            timeStyle: "full",
            hourCycle: "h24"
        }
    )
}
getSaudiaTime();
setInterval(getSaudiaTime, 1000);