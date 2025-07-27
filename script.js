const titleName = document.querySelectorAll(".title");
const currentHours = document.querySelectorAll(".current-hours");
const previousHours = document.querySelectorAll(".previous-hours");
const btns = document.querySelectorAll(".btn");
const stats = document.querySelectorAll(".stats");
const buttonsContainer = document.getElementById("buttons");

let data = [];

// Fetch data once
fetch("data.json")
  .then((response) => response.json())
  .then((json) => {
    data = json;

    // Set titles
    titleName.forEach((element, index) => {
      element.textContent = data[index].title;
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

function updateStats(timeframe) {
  data.forEach((item, index) => {
    const current = item.timeframes[timeframe].current;
    const previous = item.timeframes[timeframe].previous;
    if (currentHours[index]) currentHours[index].textContent = `${current}hrs`;
    if (previousHours[index]) {
      let label = "Last Week";
      if (timeframe === "daily") label = "Yesterday";
      if (timeframe === "monthly") label = "Last Month";
      previousHours[index].textContent = ` ${label} - ${previous}hrs`;
    }
  });

  // Show only the selected stats
  ["daily", "weekly", "monthly"].forEach((tf) => {
    document.querySelectorAll(`.${tf}.stats`).forEach((el) => {
      el.classList.toggle("active", tf === timeframe);
    });
  });
}

// Button click handler
buttonsContainer.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
    updateStats(id);
  }
});