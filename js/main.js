const mobileNav = document.querySelector(".main-nav .nav ul");
const mobileNavTrigger = document.querySelector(".mobile-nav-trigger");

mobileNavTrigger.addEventListener("click", () => {
  if (mobileNav.style.display == "none") {
    mobileNav.style.display = "block";
  } else {
    mobileNav.style.display = "none";
  }
});

const searchBtn = document.querySelector(".search-button");
const submitSearch = document.querySelector("#submit-search");
const searchForm = document.querySelector(".search form");
const searchInput = document.querySelector(".search-input");

searchBtn.addEventListener("click", () => {
  searchForm.classList.toggle("hide-search-form");
});

submitSearch.addEventListener("click", (e) => {
  e.preventDefault();
  alert(`You want to search for \"${searchInput.value}\"`);
});

const toggleTheme = document.querySelector("#theme-toggle");

toggleTheme.addEventListener("change", (e) => {
  if (e.target.checked) {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  }
});

// Initialize the theme on page load
if (localStorage.getItem("theme") === "dark") {
  toggleTheme.checked = true;
  document.documentElement.setAttribute("data-theme", "dark");
} else {
  toggleTheme.checked = false;
  document.documentElement.setAttribute("data-theme", "light");
}
