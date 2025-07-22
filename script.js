const titleName = document.querySelectorAll(".title");
const currentHours = document.querySelectorAll(".current-hours");
const previousHours = document.querySelectorAll(".previous-hours");

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
