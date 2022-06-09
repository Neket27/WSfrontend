const fields = ["Имя и Фамилия", "Почта", "Возраст", "Кем является пользователь", "Рекомендует организацию", "Дата начала работы", "Комментарий"];
const keyAndValueSkill={student:"Студент",youngSpecialist:"Молодой специалист",professional:"Профессионал"};
const keyAndValueRecommend={yes:"Да",no:"Нет",maybe:"Возможно"};

(async () => {

    let data = await fetch('http://localhost:3000/form-interview', {
        method: 'GET',
    })
        .then(response => response.json());
    addBlocksContent(data);
})();

function addBlocksContent(listInfo) {
    const table = document.getElementById("table-content");

    let str = ` 
                <tr>
                    <th class="main-table__field">${fields[0]}</th>
                    <th class="main-table__field">${fields[1]}</th>
                    <th class="main-table__field">${fields[2]}</th>
                    <th class="main-table__field">${fields[3]}</th>
                    <th class="main-table__field">${fields[4]}</th>
                    <th class="main-table__field">${fields[5]}</th>
                    <th class="main-table__field">${fields[6]}</th>
                </tr>                           
                  `

    for (let i in listInfo) {
        str += `
            <tr>
                <td className="main-table__field" style="background: antiquewhite">${listInfo[i]['label-name']}</td>
                <td className="main-table__field">${listInfo[i]['label-email']}</td>
                <td className="main-table__field">${listInfo[i]['label-age']}</td>
                <td className="main-table__field">${keyAndValueSkill[listInfo[i]['role']]}</td>
                <td className="main-table__field">${keyAndValueRecommend[listInfo[i]['recommend']]}</td>
                <td className="main-table__field">${listInfo[i]['label-date']}</td>
                <td className="main-table__field">${listInfo[i]['comment']}</td>
            </tr>
                `
    }
    table.innerHTML += str;
}

function getFormData(form) {
    const formData = new FormData(form);
    const res = {};

    Array.from(formData.keys()).forEach(key => {
        res[key] = formData.get(key);
    });
    return res;
}

async function useFetch(data) {
    const response = await fetch('http://localhost:3000/form-interview', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    console.log(response.json())
}

window.addEventListener('load', () => {

    const applicantForm = document.forms.applicantFormSurvey;
    applicantForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = getFormData(document.forms.applicantFormSurvey);
        useFetch(data);
    });
});




