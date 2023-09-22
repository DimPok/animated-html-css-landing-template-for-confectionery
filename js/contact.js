const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const subjTITLE = document.querySelector("#subject-title");
const messageEl = document.querySelector("#message");

const form = document.querySelector("#submit-form");

function checkValidations() {
  let letters = /^[a-zA-Z\s]*$/;
  const name = nameEl.value.trim();
  const email = emailEl.value.trim();
  const subjecttitle = subjTITLE.value.trim();
  const message = messageEl.value.trim();
  if (name === "") {
     document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Если Хотите, Чтобы Вам Ответили - Укажите Адрес Своей Электронной Почты";
  } else {
    if (!letters.test(name)) {
      document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Возможно, Вы НЕПРАВИЛЬНО Указали Свой EMAIL";
    } else {
      
    }
  }
  if (email === "") {
     document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Почему Вы Не Хотите Сообщить Нам Свое Имя?";
  } else {
    if (!letters.test(name)) {
      document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Нам Кажется, Что Вас Зовут НЕ ТАК...";
    } else {
      
    }
  }
}

function reset() {
  nameEl = "";
  emailEl = "";
  companyNameEl = "";
  messageEl = "";
  document.querySelector(".name-error").innerText = "";
}



Resources