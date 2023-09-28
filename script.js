function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Provide a valid email address";
    emailInput.classList.add("error"); // Add error class
    emailInput.focus();
    return false;
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("error"); // Remove error class if valid
    return true;
  }
}
