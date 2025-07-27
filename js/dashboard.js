const dashboardNav = document.querySelector(".dash-nav");

const dashNavTrigger = document.querySelector(".dash-nav-trigger");

dashNavTrigger.addEventListener("click", () => {
  console.log("clicked");

  dashboardNav.classList.toggle("hidden");
});


// Search Functionality
const searchBtn = document.querySelector(".search-button");
const searchForm = document.querySelector(".search form");
const searchInput = document.querySelector(".search-input");

searchBtn.addEventListener("click", () => {
  searchForm.classList.toggle("hidden");
});

// Theme Toggle
const toggleTheme = document.querySelector("#theme-toggle");

toggleTheme.addEventListener("change", (e) => {
  if (e.target.checked) {
    console.log("checked");
    
    localStorage.setItem("theme", "dark");
    document.body.classList.toggle("dark");
  } else {
    localStorage.setItem("theme", "light");
    document.body.classList.remove("dark");
  }
});

// Initialize theme
if (localStorage.getItem("theme") === "dark") {
  toggleTheme.checked = true;
  document.documentElement.classList.add("dark");
} else {
  toggleTheme.checked = false;
  document.documentElement.classList.remove("dark");
}
