import { data } from "./data.js";

window.onload = () => {
  // Variables
  const curHours = document.querySelectorAll(".hours-current");
  const prevHours = document.querySelectorAll(".hours-previous");
  const titles = document.querySelectorAll(".title");
  const daily = document.querySelector("#daily");
  const weekly = document.querySelector("#weekly");
  const monthly = document.querySelector("#monthly");

  // Iteratates through the title DOM elements, replacing inner text with corresponding title in the data file
  (function () {
    titles.forEach((title, index) => {
      title.innerText = data[index].title;
    });
  })();

  // Functions
  // Receives the timeframe (daily,weekly,monthly) as a string. Loops through the previously declared DOM element arrays. Sets the inner text to the corresponding data point based in timeframe input (daily, weekly, monthly)
  function setTimeFrame(timeframe) {
    curHours.forEach((hours, index) => {
      hours.innerText = `${data[index].timeframes[timeframe].current}hrs`;
    });
    prevHours.forEach((hours, index) => {
      hours.innerText = `Last Week - ${data[index].timeframes[timeframe].previous}hrs`;
    });
  }

  function highlightTimeFrame(timeButton) {
    // Remove the selected class which highlights time period button
    [daily, weekly, monthly].forEach((timeFrame) => {
      timeFrame.firstElementChild.classList.remove("selected");
    });
    // Add selected class to the button clicked which was sent by the button clicked
    timeButton.classList.add("selected");
  }

  setTimeFrame("monthly");

  // Event listeners

  // Sets event listeners to (daily, weekly, monthly) DOM elements. Sends the data to setTimeFrame based on timeframe as 'string'.
  daily.addEventListener("click", (e) => {
    setTimeFrame("daily");
    highlightTimeFrame(e.target);
  });

  weekly.addEventListener("click", (e) => {
    setTimeFrame("weekly");
    highlightTimeFrame(e.target);
  });

  monthly.addEventListener("click", (e) => {
    setTimeFrame("monthly");
    highlightTimeFrame(e.target);
  });
};