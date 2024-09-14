import "./style.css";

/*
 * 追加ボタン
 */
const onClickAdd = () => {
  // DOM生成
  const [li, div, p] = createDomElement();

  // ボタン生成
  const [completeButton, deleteButton] = createButton();

  // DOM配置
  document.getElementById("incompolete-list").appendChild(li);
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

// 追加
document.getElementById("add-button").addEventListener("click", onClickAdd);
const onClickDelete = (e) => {
  const target = e.target;
  // targeから最も近い親要素を取得
  const listItem = target.closest("li");
  if (listItem) {
    //　ツリー構造により子要素は全て削除される
    listItem.remove();
  }
};

/*
 * 完了ボタン
 */
const onClickComplete = (e) => {
  const target = e.target;
  // li以下の子要素を取得し、complete-areaの配下のulの下のliとして設置する
  const listItem = target.closest("li");

  // ボタンは削除
  listItem.querySelector(".delete-button").remove();
  listItem.querySelector(".complete-button").remove();

  const completedField = document.querySelector(".complete-area ul");
  completedField.appendChild(listItem);

  // 戻るボタン追加
  const returnButton = document.createElement("button");
  returnButton.innerText = "戻す";
  listItem.firstElementChild.appendChild(returnButton);
  returnButton.addEventListener("click", onClickReturn);
};

/*
 * 戻すボタン
 */
const onClickReturn = (e) => {
  const target = e.target;
  const listItem = target.closest("li");

  // 戻すボタンは削除
  target.remove();

  // ボタン生成
  const [completeButton, deleteButton] = createButton();

  // ボタンを追加
  listItem.firstElementChild.appendChild(completeButton);
  listItem.firstElementChild.appendChild(deleteButton);

  const removeField = document.querySelector(".incomplete-area ul");
  removeField.appendChild(listItem);
};

/*
 * ボタン生成
 */
const createButton = () => {
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.classList.add("complete-button");
  completeButton.addEventListener("click", onClickComplete);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", onClickDelete);

  return [completeButton, deleteButton];
};

/*
 * li,div,p生成
 */
const createDomElement = () => {
  const inputElement = document.getElementById("input").value;
  document.getElementById("input").value = "";

  const li = document.createElement("li");

  const div = document.createElement("div");
  div.classList.add("list-row");

  const p = document.createElement("p");
  p.classList.add("todo-item");
  p.innerText = inputElement;

  return [li, div, p];
};
