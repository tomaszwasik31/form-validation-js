const form = document.querySelector("#my-form");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email + span.error");

function showErrorEmail() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an e-mail address.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  email.className = "invalid";
}

email.addEventListener("input", () => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
    email.classList.remove("invalid");
  } else {
    showErrorEmail();
  }
});

// select country
const country = document.querySelector("#country");
const zipCountry = document.querySelector("#country + span.error");
function showErrorCountry() {
  country.className = "invalid";
  zipCountry.textContent = "Please select a country.";
}

country.addEventListener("change", () => {
  country.classList.remove("invalid");
  zipCountry.textContent = "";
});

// zip
const zip = document.querySelector("#zip");
const zipError = document.querySelector("#zip + span.error");

function showErrorZip() {
  if (!zip.validity.valid) {
    zipError.textContent = "Zip code need to be in 123-123 format";
  }
  if (zip.validity.valueMissing) {
    zipError.textContent = "You need to enter an Zip code.";
  }
  zip.className = "invalid";
}

zip.addEventListener("input", () => {
  if (zip.validity.valid) {
    zipError.textContent = "";
    zipError.className = "error";
    zip.classList.remove("invalid");
  } else {
    showErrorZip();
  }
});
// password
const password = document.querySelector("#password");
const passwordError = document.querySelector("#password + span.error");

function showErrorPassword() {
  if (password.validity.valueMissing) {
    passwordError.textContent = "You need to enter a password";
  } else if (password.validity.tooShort) {
    passwordError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
  }
  password.className = "invalid";
}

password.addEventListener("input", () => {
  if (password.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "error";
    password.classList.remove("invalid");
  } else {
    showErrorPassword();
  }
});

// confirm password
const confirmPassword = document.querySelector("#confirm-password");
const confirmPasswordError = document.querySelector(
  "#confirm-password + span.error"
);

function showErrorConfirmPassword() {
  if (confirmPassword.validity.valueMissing) {
    confirmPasswordError.textContent = "You need to enter a confirm password";
  } else {
    confirmPasswordError.textContent = "Password mismatch.";
  }
  confirmPassword.className = "invalid";
}

confirmPassword.addEventListener("input", () => {
  if (confirmPassword.value === password.value) {
    confirmPasswordError.textContent = "";
    confirmPasswordError.className = "error";
    confirmPassword.classList.remove("invalid");
  } else {
    showErrorConfirmPassword();
  }
});

// on submit validation
form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showErrorEmail();
    event.preventDefault();
  }
  if (!country.value) {
    showErrorCountry();
    event.preventDefault();
  }
  if (!zip.validity.valid) {
    showErrorZip();
    event.preventDefault();
  }
  if (!password.validity.valid) {
    showErrorPassword();
    event.preventDefault();
  }

  if (
    confirmPassword.value !== password.value ||
    confirmPassword.value === ""
  ) {
    showErrorConfirmPassword();
    event.preventDefault();
  } else {
    alert('submit')
  }
});
