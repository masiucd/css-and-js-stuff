import "./style.css";

let themeToggle = document.querySelector(
  'input[type="checkbox"]'
) as HTMLInputElement;

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});
