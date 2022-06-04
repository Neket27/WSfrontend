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


const framework = ["C", "C++", "C#", "Java", "Python", "JavaScript", "React", "Angular", "Django", "Spring"];

function createHtml(obj) {
    let readyHtml = '';

    for (let i = 0; i < obj.length; i++) {
        readyHtml += `
                    <label>
                        <input type="checkbox" name="inp-${i}">${framework[i]}</input>
                    </label>
                           `
    }
    return readyHtml;
}

const f = document.getElementById("framework");
f.innerHTML += createHtml(framework);
