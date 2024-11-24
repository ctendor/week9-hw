import { validateId, validateEmail } from "../common/regex.js";

const idInput = document.getElementById("find-id");
const nameInput = document.getElementById("find-name");
const emailInput = document.getElementById("find-email");

function createErrorMessage(inputElement, message) {
  let errorMessage = inputElement.nextElementSibling;

  if (errorMessage && errorMessage.classList.contains("error-message")) {
    errorMessage.remove();
  }

  if (message) {
    const span = document.createElement("span");
    span.textContent = message;
    span.classList.add("error-message");
    inputElement.parentNode.insertBefore(span, inputElement.nextSibling);
  }
}

idInput.addEventListener("change", function () {
  const validation = validateId(idInput.value);
  createErrorMessage(idInput, validation.isValid ? "" : validation.message);
});

nameInput.addEventListener("change", function () {
  const validation = {
    isValid: nameInput.value.trim().length > 0,
    message: "이름을 입력해주세요.",
  };
  createErrorMessage(nameInput, validation.isValid ? "" : validation.message);
});

emailInput.addEventListener("change", function () {
  const validation = validateEmail(emailInput.value);
  createErrorMessage(emailInput, validation.isValid ? "" : validation.message);
});

document
  .getElementById("find-form")
  .addEventListener("submit", function (event) {
    const idValidation = validateId(idInput.value);
    const nameValidation = {
      isValid: nameInput.value.trim().length > 0,
      message: "이름을 입력해주세요.",
    };
    const emailValidation = validateEmail(emailInput.value);

    if (
      !idValidation.isValid ||
      !nameValidation.isValid ||
      !emailValidation.isValid
    ) {
      event.preventDefault();
      alert("입력한 정보를 확인해주세요.");
    } else {
      alert("정보 요청 성공!");
    }
  });
