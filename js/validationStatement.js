const inputs = Array.from(document.querySelectorAll('#applicant-form input'));
const PATTERN_NAME = '^[А-Я][а-я]{2,} [А-Я][а-я]{2,}';
window.addEventListener('load', () => {

    validityName(inputs);
    validityAge(inputs);
    validityDate();
});

function validityName(inputs) {
    inputs.filter(input => input.name === "inputName")
        .forEach(input => input.pattern = PATTERN_NAME);
    validErrorName();
}

function validityAge(inputs) {
    inputs.filter(input => input.name === "inputAge")
        .forEach(input => {
            (input.min = 15) && (input.max = 60)
        });
}

function validityDate() {
    const dateBirthday = document.querySelector('input[name=inputDate]');
    const today = new Date();
    let month = today.getMonth();
    let day = today.getDate();

    if (month < 10)
        month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();

    const maxYear = today.getFullYear();
    const minDateMy = `${maxYear}-${month}-${day}`;
    dateBirthday.setAttribute("max", minDateMy);
}

function validErrorName() {
    const fieldName = document.getElementById("name");
    inputs.filter(input => input.name === "inputName")
        .forEach(input => input.addEventListener('input', () => {
            const valuePattern = RegExp(input.pattern).test(input.value);
            fieldName.innerHTML = valuePattern ? "Имя и Фамилия" : "Заполните имя и фамилию начиная с заглавной буквы";
        }));
}
