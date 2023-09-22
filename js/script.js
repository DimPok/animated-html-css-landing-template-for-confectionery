const menushkaIcon = document.querySelector(".menushka-icons")
const container = document.querySelector(".container")


menushkaIcon.addEventListener("click", () => {
    container.classList.toggle("change");
});