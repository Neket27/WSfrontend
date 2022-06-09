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
        useFetch(data);
        window.location.reload();
    });
});

const selectRoleForSkill = document.querySelector('#role');
selectRoleForSkill.addEventListener('change', function () {

    const userRole = document.getElementById("role").value;

    const skills = {
        student: ['КуМир', 'Pascale abs'],
        youngSpecialist: ["C", "C++", "C#", "Java", "Python", "JavaScript"],
        professional: ["React", "Angular", "Django", "Spring"],
    };

    function createSkillsHtml(userRole) {
        let skillInHtml = '';
        const developerSkills = skills[userRole];

        for (let i = 0; i < developerSkills.length; i++) {
            skillInHtml += `
                        <label>
                          <input type="checkbox" name="inp-${userRole}-${i}">${developerSkills[i]}</input>
                        </label>
                            `;
        }
        return skillInHtml;
    }

    const specializations = document.getElementById("skills");
    specializations.innerHTML = createSkillsHtml(userRole);
});
