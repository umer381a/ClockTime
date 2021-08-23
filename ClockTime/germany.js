var getGermanyTime = function () {
    document.getElementById("time").innerHTML = new Date().toLocaleString(
        "en-US", {
            timeZone: "Europe/Berlin",
            timeStyle: "full",
            hourCycle: "h24"
        }
    )
}
getGermanyTime();
setInterval(getGermanyTime(),1000)