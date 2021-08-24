var getUsaTime = function () {
    document.getElementById("time").innerHTML = new Date().toLocaleString(
        "en-US", {
            timeZone: "Europe/London",
            timeStyle: "full",
            hourCycle: "h24"
        }
    )
}
getUsaTime();
setInterval(getUsaTime, 1000);