import "./style.css";

const onClickAdd = () => {
  const inputElement = document.getElementById("input").value;
  document.getElementById("input").value = "";

  const li = document.createElement("li");

  const div = document.createElement("div");
  div.classList.add("list-row");

  const p = document.createElement("p");
  p.classList.add("todo-item");
  p.innerText = inputElement;

  div.appendChild(p);
  li.appendChild(div);

  document.getElementById("incompolete-list").appendChild(li);
}

document.getElementById("add-button").addEventListener("click", onClickAdd);
