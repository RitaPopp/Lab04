function onEdit () {
  const textArea = document.getElementById("textArea");
  const result = document.getElementById("result");
  textArea.innerText = result.innerText;
  textArea.classList.remove("hidden");
  document.getElementById("edit").classList.add("selected");

  result.classList.add("hidden");
}

function onFocusOut () {
  const textArea = document.getElementById("textArea");
  const result = document.getElementById("result");

  result.innerText = textArea.value;
  textArea.classList.add("hidden");
  document.getElementById("edit").classList.remove("selected");
  result.classList.remove("hidden");
}

function onRemove () {
  const textArea = document.getElementById("textArea");
  textArea.value = "";
  textArea.classList.add("hidden");

  const result = document.getElementById("result");
  result.innerText = "";
  result.classList.add("hidden");

  document.getElementById("edit").classList.remove("selected");
}
