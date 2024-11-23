import { validateId, validatePassword } from "../common/regex.js";

// ID와 Password Input 및 메시지 삽입 위치
const idInput = document.getElementById("login-id");
const passwordInput = document.getElementById("login-password");

// 함수: 에러 메시지 생성
function createErrorMessage(inputElement, message) {
  // 기존 메시지가 있다면 제거
  let errorMessage = inputElement.nextElementSibling;
  if (errorMessage && errorMessage.classList.contains("error-message")) {
    errorMessage.remove();
  }

  // 새로운 에러 메시지 추가
  if (message) {
    const span = document.createElement("span");
    span.textContent = message;
    span.classList.add("error-message");
    span.style.color = "red"; // 에러 메시지 스타일 (빨간색)
    inputElement.parentNode.insertBefore(span, inputElement.nextSibling);
  }
}

// ID 입력 검증
idInput.addEventListener("input", function () {
  const id = idInput.value;
  const validation = validateId(id);

  if (!validation.isValid) {
    createErrorMessage(idInput, "8~20자 사이의 아이디를 입력하세요.");
  } else {
    createErrorMessage(idInput, ""); // 에러 메시지 제거
  }
});

// Password 입력 검증
passwordInput.addEventListener("input", function () {
  const password = passwordInput.value;
  const validation = validatePassword(password);

  if (!validation.isValid) {
    createErrorMessage(
      passwordInput,
      "8~20자 사이의 대,소문자와 특수문자를 포함한 비밀번호를 입력해주세요."
    );
  } else {
    createErrorMessage(passwordInput, ""); // 에러 메시지 제거
  }
});

// 폼 제출 시 검증
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    const id = idInput.value;
    const password = passwordInput.value;

    const idValidation = validateId(id);
    const passwordValidation = validatePassword(password);

    if (!idValidation.isValid || !passwordValidation.isValid) {
      event.preventDefault(); // 제출 막기
      alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    } else {
      alert("로그인 성공!");
    }
  });
