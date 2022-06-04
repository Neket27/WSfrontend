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





