let time = document.getElementById("time")
let getChinaTime = () => {
    time.innerHTML=new Date().toLocaleString(
        "en-US",{
            timeZone:'Asia/Shanghai',
            timeStyle:"full",
            hourCycle:"h24",
            dateStyle:"medium"
            
        }
    )
}
getChinaTime();
setInterval(getChinaTime(),1000)