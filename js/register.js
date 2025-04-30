const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const address = document.getElementById("address");
const password2 = document.getElementById("confirm-pass");
const date = document.getElementById("date");
const agree = document.getElementById("check");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateInputs()) {
    window.location.href = "index.html";
  }
});

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const addressValue = address.value.trim();
  const dateValue = date.value;

  let noErrors = true;

  if (usernameValue === "") {
    setError(username, "* Username is required");
    noErrors = false;
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "* Email is required");
    noErrors = false;
  } else if (!isValidEmail(emailValue)) {
    setError(email, "* Provide a valid email address");
    noErrors = false;
  } else if (!emailValue.endsWith("@binus.ac.id")) {
    setError(email, "* Email must be end with @binus.ac.id");
    noErrors = false;
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "* Password is required");
    noErrors = false;
  } else if (passwordValue.length < 8) {
    setError(password, "* Password must be at least 8 character.");
    noErrors = false;
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "* Please confirm your password");
    noErrors = false;
  } else if (password2Value !== passwordValue) {
    setError(password2, "* Passwords doesn't match");
    noErrors = false;
  } else {
    setSuccess(password2);
  }

  if (addressValue === "") {
    setError(address, "* Please enter your address");
    noErrors = false;
  } else {
    setSuccess(address);
  }

  if (dateValue === "") {
    setError(date, "* Please select your date of birth");
    noErrors = false;
  } else {
    setSuccess(date);
  }

  if (!agree.checked) {
    alert("Please check the privacy requirements' box");
    noErrors = false;
  }

  return noErrors;
};
