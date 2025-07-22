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

const nameErrorMessage = document.querySelector(".name-error");
const emailErrorMessage = document.querySelector(".email-error");
const subjectErrorMessage = document.querySelector(".subject-error");
const messageErrorMessage = document.querySelector(".message-error");

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const submit = document.querySelector(".submit");

let nameError = "";
let emailError = "";
let subjectError = "";
let messageError = "";

function updateSubmitButton() {
  nameError || emailError || subjectError || messageError
    ? (submit.disabled = true)
    : (submit.disabled = false);
}

name.addEventListener("input", () => {
  const value = name.value;

  if (value.length < 3) {
    nameError = "Your name must contain at least 3 characters";
  } else if (!/^[a-zA-Z ]+$/.test(value)) {
    nameError = "Please enter a valid name (letters and spaces only)";
  } else {
    nameError = "";
  }

  if (nameError) {
    nameErrorMessage.style.display = "block";
    nameErrorMessage.innerHTML = nameError;
  } else {
    nameErrorMessage.style.display = "none";
  }

  updateSubmitButton();
});

email.addEventListener("input", () => {
  const value = email.value;

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    emailError = "Please enter a valid email address";
  } else {
    emailError = "";
  }

  if (emailError) {
    emailErrorMessage.style.display = "block";
    emailErrorMessage.innerHTML = emailError;
  } else {
    emailErrorMessage.style.display = "none";
  }

  updateSubmitButton();
});

subject.addEventListener("input", () => {
  const value = subject.value;

  if (value === "" || value.length < 10) {
    subjectError = "Please enter a subject with at least 10 characters.";
  } else {
    subjectError = "";
  }

  if (subjectError) {
    subjectErrorMessage.style.display = "block";
    subjectErrorMessage.innerHTML = subjectError;
  } else {
    subjectErrorMessage.style.display = "none";
  }

  updateSubmitButton();
});

message.addEventListener("input", () => {
  const value = message.value;

  if (value === "" || value.length < 10) {
    messageError = "Please enter a message with at least 10 characters.";
  } else {
    messageError = "";
  }

  if (messageError) {
    messageErrorMessage.style.display = "block";
    messageErrorMessage.innerHTML = messageError;
  } else {
    messageErrorMessage.style.display = "none";
  }

  updateSubmitButton();
});

updateSubmitButton();

const sendMessage = document.querySelector("#send-message");

sendMessage.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    confirm(`Your message of ${subject.value} will be sent to ${email.value}`)
  ) {
    alert("Your message was sent successfully!");
  } else {
    alert("Your message was canceled!");
  }

  name.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
});
