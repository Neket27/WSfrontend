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

    const applicantForm1 = document.forms.myApplicantForm1;
    applicantForm1.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = getFormData(document.forms.myApplicantForm1);
        useFetch(data);
    })

});