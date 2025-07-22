const mobileNav = document.querySelector(".main-nav .nav ul");
const mobileNavTrigger = document.querySelector(".mobile-nav-trigger");

mobileNavTrigger.addEventListener("click", () => {
  if (mobileNav.style.display == "none") {
    mobileNav.style.display = "block";
  } else {
    mobileNav.style.display = "none";
  }
});

let impactActivities = [
  {
    image: "assets/images/impact_1.jpg",
    title:
      "Working where it counts: UNESCO leads local initiatives and develops tools to safeguard World Heritage",
  },
  {
    image: "assets/images/impact_2.jpg",
    title:
      "Bangkok sets the pace for AI Ethics: Highlights from UNESCO’s 3rd Global Forum on the Ethics of AI",
  },
  {
    image: "assets/images/higher education - uganda_0.jpg",
    title:
      "Record number of higher education students highlights global need for recognition of qualifications",
  },
  {
    image: "assets/images/story_whc_mafagascar.JPG.webp",
    title:
      "Caribbean cuisine transcends borders thanks to UNESCO’s Transcultura programme",
  },
];

const impactsGrid = document.querySelector(".impact-activities");

impactActivities.forEach((item) => {
  const element = document.createElement("div");
  element.className = "item";
  impactsGrid.appendChild(element);

  const impactImage = document.createElement("img");
  impactImage.src = item.image;
  impactImage.alt = item.title;

  const impactTitle = document.createElement("p");
  impactTitle.className = "title";
  impactTitle.textContent = item.title;

  element.append(impactImage, impactTitle);
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
