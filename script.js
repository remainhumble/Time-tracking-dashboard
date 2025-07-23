const profile = document.getElementById("profile");
const titleName = document.querySelectorAll(".title");
const currentHours = document.querySelectorAll(".current-hours");
const previousHours = document.querySelectorAll(".previous-hours");
const btns = document.querySelectorAll(".btn");
const stats = document.querySelectorAll(".stats");

titleName.forEach((element, index) => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const title = data[index].title;
      element.textContent = title;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

currentHours.forEach((element, index) => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const current = data[index].timeframes.weekly.current;
      element.textContent = `${current}hrs`;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

previousHours.forEach((element, index) => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const previous = data[index].timeframes.weekly.previous;
      element.textContent = ` Last Week - ${previous}hrs`;
    });
});

profile.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    // remove active from other buttons
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // hide other stats
    stats.forEach((stat) => {
      stat.classList.remove("active");
    });
const element = document.querySelector(`.${id}.stats`);
    element.classList.add("active");
  }
});
