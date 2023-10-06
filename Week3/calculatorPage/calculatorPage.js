let num1 = "";
let num2 = "";
let operator = "";

const result = document.querySelector("#result");

const onClickNum = (event) => {
  if (!operator) {
    num1 += event.target.value;
    result.textContent += event.target.textContent;
    countLength();
    return;
  }
  if (!num2) {
    result.textContent += event.target.value;
  }
  num2 += event.target.textContent;
  result.textContent += event.target.textContent;
  countLength();
};
document.querySelectorAll(".numberBtn").forEach((el) => {
  el.addEventListener("click", onClickNum);
});

const onClickOp = (op) => {
  if (num2) {
    switch (operator) {
      case "+":
        result.textContent = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        result.textContent = num1 - num2;
        break;
      case "*":
        result.textContent = num1 * num2;
        break;
      case "/":
        result.textContent = num1 / num2;
        break;
      default:
        break;
    }
  }

  num1 = result.textContent;
  num2 = "";
  const opArr = ["+", "-", "×", "/"];
  let text = result.textContent.slice(-1);

  if (num1) {
    operator = op;

    if (opArr.includes(text)) {
      result.textContent = result.textContent.slice(0, -1);
      result.textContent += operator == "*" ? "×" : operator;
    } else {
      result.textContent += operator == "*" ? "×" : operator;
    }
  } else {
    alert("숫자를 먼저 입력하세요!");
  }
};
document.querySelector("#plus").addEventListener("click", () => {
  onClickOp("+");
});
document.querySelector("#minus").addEventListener("click", () => {
  onClickOp("-");
});
document.querySelector("#multiply").addEventListener("click", () => {
  onClickOp("*");
});
document.querySelector("#divide").addEventListener("click", () => {
  onClickOp("/");
});

document.querySelector(".resultBtn").addEventListener("click", () => {
  if (num2) {
    switch (operator) {
      case "+":
        result.textContent = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        result.textContent = num1 - num2;
        break;
      case "*":
        result.textContent = num1 * num2;
        break;
      case "/":
        result.textContent = num1 / num2;
        break;
      default:
        break;
    }
  } else {
    alert("숫자를 먼저 입력하세요!");
  }
});

const clearCalculator = () => {
  num1 = "";
  num2 = "";
  operator = "";
  result.textContent = "";
};
document.querySelector(".clearBtn").addEventListener("click", clearCalculator);

const countLength = () => {
  const text = result.textContent;
  if (text.length > 22) {
    alert("제한 길이를 초과했습니다!");
    clearCalculator();
  }
};
