const passwordToggle = document.querySelector(".c-toggle-password__label");
const checkbox = document.querySelector(".c-toggle-password__checkbox");

function handleFloatingLabel() {}

function handlePasswordSwitcher() {
  const passwordOptions = ["password", "text"];

  passwordToggle.addEventListener("change", function () {
    passwordInput.type = passwordOptions[+this.checked];
  });
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded!");
  handleFloatingLabel();
  handlePasswordSwitcher();
});
