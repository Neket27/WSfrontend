(async () => {

    let data = await fetch('http://localhost:3000/form-interview', {
        method: 'GET',
    })
        .then(response => response.json());
    addBlocksContent(data);
})();


function addBlocksContent(listInfo) {
    const table = document.getElementById("table-content");
    console.log(listInfo)

    // const valuesForm = Object.values(Object.entries(listInfo['form-interview']));


    let str = '';
    for (let i in listInfo) {
        str += `
            <tr>
                <td className="main-table__field" style="background: antiquewhite">${listInfo[i]['label-name']}</td>
                <td className="main-table__field">${listInfo[i]['label-email']}</td>
                <td className="main-table__field">${listInfo[i]['label-age']}</td>
                <td className="main-table__field">${listInfo[i]['role']}</td>
                <td className="main-table__field">${listInfo[i]['recommend']}</td>
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
    })
    console.log(response.json())
}

window.addEventListener('load', () => {

    const applicantForm = document.forms.applicantFormSurvey;
    applicantForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = getFormData(document.forms.applicantFormSurvey);
        useFetch(data);
    })

});


// const framework = ["C", "C++", "C#", "Java", "Python", "JavaScript", "React", "Angular", "Django", "Spring"];
//
// function createHtml(obj) {
//     let readyHtml = '';
//
//     for (let i = 0; i < obj.length; i++) {
//         readyHtml += `
//                     <label>
//                         <input type="checkbox" name="inp-${i}">${framework[i]}</input>
//                     </label>
//                            `
//     }
//     return readyHtml;
// }
//
// const f = document.getElementById("framework");
// f.innerHTML += createHtml(framework);



