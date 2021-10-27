import defaultList from "./defaultList";
import todayList from "./todayList";
import weekList from "./weekList";

function inboxBtn() {
  const section = document.querySelector("section");
  const button = document.createElement("button");
  button.setAttribute("id", "inboxBtn");
  button.textContent = "Inbox";
  button.addEventListener("click", () => {
    section.innerHTML = "";
    section.appendChild(defaultList());
  });

  return button;
}

function todayBtn() {
  const section = document.querySelector("section");
  const button = document.createElement("button");
  button.textContent = "Today";
  button.addEventListener("click", () => {
    section.innerHTML = "";
    section.appendChild(todayList());
  });

  return button;
}

function weekBtn() {
  const section = document.querySelector("section");
  const button = document.createElement("button");
  button.textContent = "This week";
  button.addEventListener("click", () => {
    section.innerHTML = "";
    section.appendChild(weekList());
  });

  return button;
}

export { inboxBtn, todayBtn, weekBtn };
