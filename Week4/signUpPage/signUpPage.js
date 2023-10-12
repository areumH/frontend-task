// 아이디 = 소문자 + 숫자 4~12글자
// 비밀번호 = 대문자/소문자 + 특수문자 + 숫자 8~16글자
const RegexId = /^[a-z0-9]{4,12}$/;
const RegexPw = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*])(?!.*\s).{8,16}$/;

const idInput = document.getElementById("idInput");

idInput.addEventListener("input", () => {
  const validId = RegexId.test(idInput.value);

  idInput.classList.toggle("id_correct", validId);
  idInput.classList.toggle("id_wrong", !validId);
});

const pwInput = document.getElementById("pwInput");

pwInput.addEventListener("input", () => {
  const validPw = RegexPw.test(pwInput.value);

  pwInput.classList.toggle("pw_correct", validPw);
  pwInput.classList.toggle("pw_wrong", !validPw);

  pwConfirmInput.classList.toggle("pw_wrong", true);
});

const pwConfirmInput = document.getElementById("pwConfirmInput");

const checkPw = () => {
  const confirmPw = pwConfirmInput.value === pwInput.value;

  pwConfirmInput.classList.toggle("pw_correct", confirmPw);
  pwConfirmInput.classList.toggle("pw_wrong", !confirmPw);
}

pwConfirmInput.addEventListener("input", checkPw);
pwConfirmInput.addEventListener("focus", checkPw);

const idConfirmBtn = document.querySelector(".idConfirmBtn");
const idConfirm = document.querySelector(".idConfirm");
let idArr = [];

idConfirmBtn.addEventListener("click", () => {
  if (idArr.includes(idInput.value)) {
    idConfirm.textContent = "* 이미 사용 중인 아이디입니다.";
  } else if (!RegexId.test(idInput.value)) {
    idConfirm.textContent = "* 형식에 맞게 입력하세요.";
  } else {
    idConfirm.textContent = "* 사용 가능한 아이디입니다.";
  }
});

const signUpBtn = document.querySelector(".signUpBtn");

signUpBtn.addEventListener("click", () => {
  if (!RegexId.test(idInput.value) || idArr.includes(idInput.value)) {
    alert("아이디를 확인하세요!");
  } else if (
    !RegexPw.test(pwInput.value) || pwConfirmInput.value !== pwInput.value
  ) {
    alert("비밀번호를 확인하세요!");
  } else {
    alert("회원 가입 완료!");
    idArr.push(idInput.value);

    idInput.value = "";
    pwInput.value = "";
    pwConfirmInput.value = "";
    idConfirm.textContent = "";

    idInput.classList.toggle("id_wrong");
    pwInput.classList.toggle("pw_wrong");
    pwConfirmInput.classList.toggle("pw_wrong");
  }
});
