// Mobile Navigation Toggle
const mobileNav = document.querySelector(".main-nav nav");

const mobileNavTrigger = document.querySelector(".mobile-nav-trigger");

mobileNavTrigger.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
});

// Back to Top Button
const scrollToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
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

// Form Validation
const errorMessages = {
  name: document.querySelector(".name-error"),
  email: document.querySelector(".email-error"),
  subject: document.querySelector(".subject-error"),
  message: document.querySelector(".message-error"),
};

const formInputs = {
  name: document.querySelector("#name"),
  email: document.querySelector("#email"),
  subject: document.querySelector("#subject"),
  message: document.querySelector("#message"),
};

const submitBtn = document.querySelector(".submit");

let errors = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function updateSubmitButton() {
  submitBtn.disabled = Object.values(errors).some((error) => error !== "");
}

function validateName(value) {
  if (value.length < 3) {
    return "Your name must contain at least 3 characters";
  }
  if (!/^[a-zA-Z ]+$/.test(value)) {
    return "Please enter a valid name (letters and spaces only)";
  }
  return "";
}

function validateEmail(value) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return "Please enter a valid email address";
  }
  return "";
}

function validateField(value, fieldName) {
  if (value === "") {
    return `Please enter your ${fieldName}`;
  }
  if (value.length < 10) {
    return `${
      fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
    } must be at least 10 characters`;
  }
  return "";
}

// Add event listeners for form validation
formInputs.name.addEventListener("input", (e) => {
  errors.name = validateName(e.target.value);
  showError("name", errors.name);
  updateSubmitButton();
});

formInputs.email.addEventListener("input", (e) => {
  errors.email = validateEmail(e.target.value);
  showError("email", errors.email);
  updateSubmitButton();
});

formInputs.subject.addEventListener("input", (e) => {
  errors.subject = validateField(e.target.value, "subject");
  showError("subject", errors.subject);
  updateSubmitButton();
});

formInputs.message.addEventListener("input", (e) => {
  errors.message = validateField(e.target.value, "message");
  showError("message", errors.message);
  updateSubmitButton();
});

function showError(field, error) {
  if (error) {
    errorMessages[field].className =
      "block p-[5px_10px_5px_10px] text-start m-[0_0_10px_10px] text-danger text-sm";
    errorMessages[field].textContent = error;
  } else {
    errorMessages[field].className =
      "hidden";
  }
}

// Form Submission
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Validate all fields again in case they were modified without triggering input event
  errors.name = validateName(formInputs.name.value);
  errors.email = validateEmail(formInputs.email.value);
  errors.subject = validateField(formInputs.subject.value, "subject");
  errors.message = validateField(formInputs.message.value, "message");

  Object.keys(errors).forEach((field) => {
    showError(field, errors[field]);
  });

  updateSubmitButton();

  if (Object.values(errors).some((error) => error !== "")) {
    alert("Please fix the errors in the form");
    return;
  }

  if (
    confirm(
      `Your message about "${formInputs.subject.value}" will be sent to ${formInputs.email.value}`
    )
  ) {
    alert("Your message was sent successfully!");
    // Reset form
    Object.values(formInputs).forEach((input) => (input.value = ""));
    Object.keys(errors).forEach((field) => {
      errors[field] = "";
      showError(field, "");
    });
    updateSubmitButton();
  } else {
    alert("Message sending canceled");
  }
});

// Initialize submit button state
updateSubmitButton();
