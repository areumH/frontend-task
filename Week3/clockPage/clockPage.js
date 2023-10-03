const alarmHour = document.getElementById("selectHour");
for (let i = 1; i < 13; i++) {
  const getHour = document.createElement("option");
  getHour.value = i;
  getHour.text = i;
  alarmHour.appendChild(getHour);
}

const alarmMin = document.getElementById("selectMin");
for (let i = 0; i < 60; i++) {
  const getMin = document.createElement("option");
  getMin.value = i;
  getMin.text = i;
  alarmMin.appendChild(getMin);
}

const alarmSec = document.getElementById("selectSec");
for (let i = 0; i < 60; i++) {
  const getSec = document.createElement("option");
  getSec.value = i;
  getSec.text = i;
  alarmSec.appendChild(getSec);
}

let battery = 100;

const getBattery = () => {
  battery--;
  let currentBattery = document.getElementById("battery");
  let clockContainer = document.querySelector(".clock_container");

  if (battery >= 0) {
    currentBattery.textContent = battery;
  }
  if (battery == 0) {
    clockContainer.classList.add("clock_black");
  }
};

const getClock = () => {
  const today = new Date();

  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();

  let hour = today.getHours().toString().padStart(2, "0");
  let min = today.getMinutes().toString().padStart(2, "0");
  let sec = today.getSeconds().toString().padStart(2, "0");

  const clock = `${year}년 ${month}월 ${date}일 ${hour}:${min}:${sec}`;

  document.querySelector("h3").innerText = clock;
};
getClock();

const alarmBtn = document.getElementById("alarmBtn");
const alarmBox = document.querySelector(".alarm_box");
let totalAlarm = 0;

alarmBtn.addEventListener("click", () => {
  if (totalAlarm == 3) {
    alert("알람은 최대 3개까지 가능!");
  } else {
    const selectTime = document.getElementById("selectTime");
    const timeIndex = selectTime.selectedIndex;
    const timeValue = selectTime.options[timeIndex].value;

    const selectHour = document.getElementById("selectHour");
    const hourIndex = selectHour.selectedIndex;
    const hourValue = selectHour.options[hourIndex].value.padStart(2, "0");

    const selectMin = document.getElementById("selectMin");
    const minIndex = selectMin.selectedIndex;
    const minValue = selectMin.options[minIndex].value.padStart(2, "0");

    const selectSec = document.getElementById("selectSec");
    const secIndex = selectSec.selectedIndex;
    const secValue = selectSec.options[secIndex].value.padStart(2, "0");

    const alarm = document.createElement("div");
    alarm.textContent =
      timeValue + " " + hourValue + ":" + minValue + ":" + secValue;
    alarmBox.appendChild(alarm);
    alarm.classList.add("alarm_item");
    totalAlarm++;
  }
});

const deleteBtn = document.getElementById("deleteBtn");

deleteBtn.addEventListener("click", () => {
  let alarms = alarmBox.querySelectorAll(".alarm_item");

  alarms.forEach((el) => {
    alarmBox.removeChild(el);
  });
  totalAlarm = 0;
});

setInterval(() => {
  getBattery();
  getClock();
}, 1000);
