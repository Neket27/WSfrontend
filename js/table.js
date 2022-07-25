const fields = ["Имя и Фамилия", "Почта", "Возраст", "Кем является пользователь", "Рекомендует организацию", "Дата начала работы", "Комментарий"];
const keyAndValueSkill = {student: "Студент", youngSpecialist: "Молодой специалист", professional: "Профессионал"};
const keyAndValueRecommend = {yes: "Да", no: "Нет", maybe: "Возможно"};

(async () => {

    let data = await fetch('http://localhost:3000/form-interview', {
        method: 'GET',
    })
        .then(response => response.json());
    addBlocksContent(data);
})();

function addBlocksContent(listInfo) {
    const table = document.getElementById("table-content");

    let strFieldsName = "";
    fields.forEach(field => {
        strFieldsName += `<th className="main-table__field">${field}</th> `
    });
    let str = `<tr>${strFieldsName}</tr>`;

    for (let i in listInfo) {
        str += `
            <tr>
                <td class="main-table__field">${listInfo[i].inputName}</td>
                <td class="main-table__field">${listInfo[i].inputEmail}</td>
                <td class="main-table__field">${listInfo[i].inputAge}</td>
                <td class="main-table__field">${keyAndValueSkill[listInfo[i].selectRole]}</td>
                <td class="main-table__field">${keyAndValueRecommend[listInfo[i].inputRecommend]}</td>
                <td class="main-table__field">${listInfo[i].inputDate}</td>
                <td class="main-table__field">${listInfo[i].textareaComment}</td>
            </tr>
                `
    }
    table.innerHTML += str;
}

function getFormData(form) {
    const formData = new FormData(form);
    const res = {};

    Array.from(formData.keys()).forEach(key => {
        const isKeyArray = formData.getAll(key).length > 1;
        res[key] = isKeyArray ?  formData.getAll(key) :  formData.get(key);
    });
    return res;
}

async function sendDataFromTable(data) {
    await fetch('http://localhost:3000/form-interview', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

window.addEventListener('load', () => {

    const applicantForm = document.forms.applicantFormSurvey;
    applicantForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = getFormData(document.forms.applicantFormSurvey);
        sendDataFromTable(data);
    });
});




