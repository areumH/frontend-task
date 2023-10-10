const clockElement = document.querySelector("h2");

const getClock = () => {
  const today = new Date();

  let year = today.getFullYear();
  let month = (today.getMonth() + 1).toString().padStart(2, "0");
  let date = today.getDate().toString().padStart(2, "0");

  let hour = today.getHours().toString().padStart(2, "0");
  let min = today.getMinutes().toString().padStart(2, "0");

  const clock = `${year}-${month}-${date} ${hour}:${min}`;

  clockElement.innerText = clock;
  setTimeout(() => {
    getClock();
  }, 1000);
};
getClock();

const planMonth = document.getElementById("month");
for (let i = 1; i < 13; i++) {
  const month = document.createElement("option");
  month.value = i;
  month.text = i;
  planMonth.appendChild(month);
}

const planDate = document.getElementById("date");

const setDate = () => {
  const monthIndex = planMonth.selectedIndex;
  const monthValue = parseInt(planMonth.options[monthIndex].value);

  planDate.innerHTML = "";

  if (monthValue === 2) {
    day = 28;
  } else if ([4, 6, 9, 11].includes(monthValue)) {
    day = 30;
  } else {
    day = 31;
  }
  for (let i = 1; i <= day; i++) {
    const date = document.createElement("option");
    date.value = i;
    date.text = i;
    planDate.appendChild(date);
  }
};
setDate();
planMonth.addEventListener("change", setDate);

const addPlanBtn = document.getElementById("addPlan");
const planBox = document.querySelector(".planBox");
const planInput = document.getElementById("planInput");

const addPlan = () => {
  if (!planInput.value) {
    alert("일정을 입력하세요!");
  } else {
    const planElement = document.createElement("div");
    
    const plan = document.createElement("div");
    plan.textContent = planInput.value;
    
    const deletePlanBtn = document.createElement("button");
    deletePlanBtn.textContent = "●";
    deletePlanBtn.classList.add("deleteBtn");

    const selectYear = document.getElementById("year");
    const yearValue = selectYear.options[selectYear.selectedIndex].value;

    const selectMonth = document.getElementById("month");
    const selectedMonth = selectMonth.options[selectMonth.selectedIndex].value;
    const monthValue = selectedMonth.toString().padStart(2, "0");

    const selectDate = document.getElementById("date");
    const selectedDate = selectDate.options[selectDate.selectedIndex].value;
    const dateValue = selectedDate.toString().padStart(2, "0");

    const planDate = document.createElement("span");
    planDate.textContent = `${yearValue}-${monthValue}-${dateValue}`;

    planElement.appendChild(plan);
    planElement.appendChild(planDate);
    planElement.appendChild(deletePlanBtn);
    planElement.classList.add("plan_item");

    planBox.appendChild(planElement);
    planInput.value = "";

    deletePlanBtn.addEventListener("click", () => {
      planBox.removeChild(planElement);
    });
  }
};

const onPlanKeyPress = (e) => {
  if (e.key === "Enter") {
    addPlan();
  }
};

addPlanBtn.addEventListener("click", addPlan);
planInput.addEventListener("keypress", onPlanKeyPress);

const addTodoBtn = document.getElementById("addTodo");
const todoBox = document.querySelector(".todoBox");
const todoInput = document.getElementById("todoInput");

const addTodo = () => {
  if (!todoInput.value) {
    alert("내용을 입력하세요!");
  } else {
    const todoElement = document.createElement("div");
    todoElement.textContent = todoInput.value;
    
    const deleteTodoBtn = document.createElement("button");
    deleteTodoBtn.textContent = "●";
    deleteTodoBtn.classList.add("deleteBtn");

    todoElement.appendChild(deleteTodoBtn);
    todoElement.classList.add("todo_item");

    todoBox.appendChild(todoElement);
    todoInput.value = "";

    deleteTodoBtn.addEventListener("click", () => {
      todoBox.removeChild(todoElement);
    });
  }
};

const onTodoKeyPress = (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
};

addTodoBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", onTodoKeyPress);
