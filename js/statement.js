addSkills("student"); //роль по умолчанию

const applicantForm = document.forms.applicantFormSurvey;
applicantForm.addEventListener('submit', () => {
    window.location.reload();
});

const selectRoleForSkill = document.querySelector('#role');
selectRoleForSkill.addEventListener('change', function () {
    addSkills(selectRoleForSkill.value);
});

function addSkills(userRole) {
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
}