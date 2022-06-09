const inputs = Array.from(document.querySelectorAll('#applicant-form input'));
const PATTERN_NAME = '^[А-Я][а-я]{2,} [А-Я][а-я]{2,}';
window.addEventListener('load', () => {

    setValidName(inputs);
    setValidAge(inputs);
    setValidMinDate();
});

function setValidName(inputs) {
    inputs.filter(input => input.name === "label-name")
        .forEach(input => input.pattern = PATTERN_NAME);
    validErrorName();
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
    const fieldName= document.getElementById("label-name");
    inputs.filter(input => input.name === "label-name")
        .forEach(input => input.addEventListener('input', () => {
            const valuePattern = RegExp(input.pattern).test(input.value);

            if (valuePattern === false) {
                fieldName.innerHTML="Заполните имя и фамилию начиная с заглавной буквы";
            }else {
                fieldName.innerHTML="Имя и Фамилия";
            }
        }));
}
