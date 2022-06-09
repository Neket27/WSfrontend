const inputs = Array.from(document.querySelectorAll('#applicant-form input'));
const PATTERN_NAME = '^[А-Я][а-я]{2,} [А-Я][а-я]{2,}';
window.addEventListener('load', () => {

    setValidName(inputs);
    validErrorName()
    setValidAge(inputs);
    setValidMinDate();
});

function setValidName(inputs) {
    inputs.filter(input => input.name === "label-name")
        .forEach(input => input.pattern = PATTERN_NAME);
}

function setValidAge(inputs) {
    inputs.filter(input => input.name === "label-age")
        .forEach(input => {
            (input.min = 15) && (input.max = 60)
        });
}

function setValidMinDate() {
    const dateBirthday = document.querySelector('input[name=label-date]');
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
    inputs.filter(input => input.name === "label-name")
        .forEach(input => input.addEventListener('input', () => {
            const value = RegExp(input.pattern).test(input.value);

            if (value === false) {
                createError(input, "Заполните поле кирилицей, начиная с заглавной буквы");
            }
        }));
}

function createError(input, text) {
    const errorName = document.getElementById("name");
    errorName.innerHTML += `<p>${text}</p>`;
    input.setCustomValidity(text);
}