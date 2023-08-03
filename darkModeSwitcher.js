let rootElement = document.querySelector(":root");
document.querySelector("html").addEventListener("mouseover", changeText);

let button = document.querySelector("aside > button");
button.addEventListener("click", switchModes);

if (matchMedia("(prefers-color-scheme: dark)").matches) {
  rootElement.classList.toggle("dark");
  button.innerText = "Switch To Light Mode";
}

function changeText() {
  if (rootElement.classList[0] == "dark") {
    button.innerText = "Switch To Light Mode";
  } else {
    button.innerText = "Switch To Dark Mode";
  }
}

function switchModes() {
  rootElement.classList.toggle("dark");
}
