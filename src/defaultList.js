// Factory function for list objects
const ListObject = (name, date) => {
  return { name, date };
};

// Elements of default list
const h1 = document.createElement("h1");
h1.textContent = "Default List";

const inputBox = document.createElement("div");
inputBox.classList.add("inputBox");
const inputBtn = document.createElement("button");
inputBtn.innerHTML = '<i class="fas fa-plus"></i> Add new item';
const input = document.createElement("input");
input.setAttribute("id", "newItem");
const submitBtn = document.createElement("button");
submitBtn.textContent = "Submit";

const inputDate = document.createElement("input");
inputDate.setAttribute("type", "date");

inputBox.appendChild(input);
inputBox.appendChild(inputDate);
inputBox.appendChild(submitBtn);
inputBox.classList.add("hidden", "inputBox");

const listContainer = document.createElement("ul");

const div = document.createElement("div");
div.classList.add("listBox");

function defaultList() {
  div.appendChild(h1);
  div.appendChild(inputBox);
  div.appendChild(inputBtn);
  div.appendChild(listContainer);

  return div;
}

// Event listeners
inputBtn.addEventListener("click", () => {
  inputBtn.classList.add("hidden");
  inputBox.classList.remove("hidden");
});

submitBtn.addEventListener("click", () => {
  if (input.value) {
    let newItem = ListObject(input.value, inputDate.value);
    let listEl = document.createElement("li");
    let p = document.createElement("p");
    p.textContent = newItem.name;
    listEl.appendChild(p);
    console.log(newItem);

    listContainer.appendChild(listEl);
    inputBox.classList.add("hidden");
    inputBtn.classList.remove("hidden");
    input.value = "";
  } else {
    console.log("invalid value");
  }
});

export default defaultList;
