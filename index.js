import { timeData } from "./data.js"
window.onload = () =>{
    const curHours = document.querySelectorAll(".current-hour");
    const prevHours = document.querySelectorAll(".previous-hour");
    const titles = document.querySelectorAll(".title");
    const daily = document.querySelector("#daily");
    const weekly = document.querySelector("#weekly");
    const monthly = document.querySelector("#monthly");
    const categories = document.querySelectorAll(".category");

    (function () {
      titles.forEach ((title, index) => {
        title.innerText = timeData[index].title
      })
    })()

    function setTimeFrame(timeFrame) {
      curHours.forEach (function (hour, index) {
        hour.innerText = `${timeData[index].timeframes[timeFrame].current}hrs`
      })

      switch(timeFrame){
        case "daily":
          prevHours.forEach((hour, index) => {
            hour.innerText = `Yesterday - ${timeData[index].timeframes[timeFrame].previous}hrs`
          })
          break;
        case "weekly":
          prevHours.forEach((hour, index) => {
            hour.innerText = `Last Week - ${timeData[index].timeframes[timeFrame].previous}hrs`
          })
          break;
        case "monthly":
          prevHours.forEach((hour, index) => {
            hour.innerText = `Last Month - ${timeData[index].timeframes[timeFrame].previous}hrs`
          })
          break;
      }
    }
    setTimeFrame("weekly")

    function highlightsTimeFrame(time) {
      [daily, weekly, monthly].forEach((a) => {
        a.classList.remove("selected")
      })
      time.classList.add("selected")
    }

    function setAnimation(animated){
      animated.forEach ((e) => {
        e.classList.add("animation")
        setTimeout(() => {e.classList.remove("animation")}, 500)
      })
    }
    daily.addEventListener("click", (e) => {
      highlightsTimeFrame(e.target)
      setTimeFrame("daily")
      setAnimation(categories)
    })
    weekly.addEventListener("click", (e) => {
      highlightsTimeFrame(e.target)
      setTimeFrame("weekly")
      setAnimation(categories)
    })
    monthly.addEventListener("click", (e) => {
      highlightsTimeFrame(e.target)
      setTimeFrame("monthly")
      setAnimation(categories)
    })


}
