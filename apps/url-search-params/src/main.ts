import "./style.css";

let teams = Object.freeze([
  {
    name: "Legia",
    year: 1916,
  },
  {
    name: "Wisła",
    year: 1906,
  },
  {
    name: "Lech",
    year: 1922,
  },
  {
    name: "Cracovia",
    year: 1906,
  },
  {
    name: "Ruch",
    year: 1920,
  },
]);

document.addEventListener("DOMContentLoaded", () => {
  let paramSet = localStorage.getItem("paramSet");
  if (!paramSet) {
    let url = new URLSearchParams(window.location.search);
    url.set("team", "Legia");
    url.set("year", "1916");
    window.history.pushState({}, "", "?" + url.toString());
    // location.search = url.toString();
    localStorage.setItem("paramSet", "true");
  }
});

let dataAction = document.querySelector("[data-action]");
if (dataAction && dataAction.getAttribute("data-action") === "clear-storage") {
  dataAction.addEventListener("click", () => {
    localStorage.clear();
    console.log("Local storage cleared!!!");
  });
}

let app = document.querySelector("#app");
if (app) {
  let url = new URLSearchParams(window.location.search);
  let team = url.get("team");
  // let year = url.get("year");
  let teamsList = document.createElement("ul");
  teams.forEach((x) => {
    let li = document.createElement("li");
    li.textContent = `${x.name} (${x.year})`;
    if (x.name === team) {
      li.style.fontWeight = "bold";
    }
    teamsList.appendChild(li);
  });
  app.appendChild(teamsList);
}
