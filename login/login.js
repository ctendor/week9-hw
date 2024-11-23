import { validateId, validatePassword } from "../common/regex.js";

const idInput = document.getElementById("login-id");
const passwordInput = document.getElementById("login-password");

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

idInput.addEventListener("input", function () {
  const id = idInput.value;
  const validation = validateId(id);

  if (!validation.isValid) {
    createErrorMessage(idInput, "8~20자 사이의 아이디를 입력하세요.");
  } else {
    createErrorMessage(idInput, "");
  }
});

passwordInput.addEventListener("input", function () {
  const password = passwordInput.value;
  const validation = validatePassword(password);

  if (!validation.isValid) {
    createErrorMessage(
      passwordInput,
      "8~20자 사이의 대,소문자와 특수문자를 포함한 비밀번호를 입력해주세요."
    );
  } else {
    createErrorMessage(passwordInput, "");
  }
});

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    const id = idInput.value;
    const password = passwordInput.value;

    const idValidation = validateId(id);
    const passwordValidation = validatePassword(password);

    if (!idValidation.isValid || !passwordValidation.isValid) {
      event.preventDefault();
      alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    } else {
      alert("로그인 성공!");
    }
  });
