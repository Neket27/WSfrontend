function getFormData(form) {
    const formData = new FormData(form);
    const res = {};
    Array.from(formData.keys()).forEach(key => {
        res[key] = formData.get(key);
        console.log(res[key]);
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

let userRole = 'student';
let selectRoleForSkill = document.querySelector('#role');
selectRoleForSkill.addEventListener('change', function () {
    userRole = document.getElementById("role").value;

    let skills = {
        select: [],
        student: ['КуМир', 'Pascale abs'],
        youngSpecialist: ["C", "C++", "C#", "Java", "Python", "JavaScript"],
        professional: ["React", "Angular", "Django", "Spring"],
    };
    console.log("role=", userRole);

    function createSkillsHtml(obj) {
        for (key in obj) {
            let skillInHtml = '';
            if (key == userRole) {

                if (key != "select") {
                    skillInHtml += ` <label>Известные языки и фреймворки
                                    <small>(Выберите варианты)</small>
                                 </label>`;
                }

                for (let i = 0; i < obj[key].length; i++) {
                    skillInHtml += `
                        <label>
                          <input type="checkbox" name="inp-${key}-${i}">${obj[key][i]}</input>
                        </label>
                         `;
                }
                return skillInHtml;
            }
        }
    }

    const f = document.getElementById("skill");
    f.innerHTML = createSkillsHtml(skills);
});
