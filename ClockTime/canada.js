let time = document.getElementById("time")
let getCanadaTime = () => {
    time.innerHTML = new Date().toLocaleString(
        "en-US",{
            timeZone:"America/Toronto",
            timeStyle:"full",
            hourCycle:"h24",
            dateStyle: "medium"
            
        }
    )
}
getCanadaTime();
setInterval(getCanadaTime(),1000)