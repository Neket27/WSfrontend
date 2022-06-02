(async () => {
    let data = await fetch("db.json")
        .then(response => response.json());
    addBlocksContent(data);
})();

function addBlocksContent(listInfo) {
    const main = document.getElementById("table-content");

    const valuesForm = Object.values(Object.entries(listInfo['form-interview']));
    let str = '';
    for (let i in valuesForm) {
        str +=
            '<tr> ' +
            '<td class="main-table__field">' + valuesForm[i][1]['label-name'] + '</td> ' +
            '<td class="main-table__field">' + valuesForm[i][1]['label-email'] + '</td> ' +
            '<td class="main-table__field">' + valuesForm[i][1]['label-age'] + '</td> ' +
            '<td class="main-table__field">' + valuesForm[i][1]['role'] + '</td> ' +
            '<td class="main-table__field">' + valuesForm[i][1]['recommend'] + '</td> ' +
            '<td class="main-table__field">' + valuesForm[i][1]['label-date'] + '</td> ' +
            '<td class="main-table__field">' + valuesForm[i][1]['comment'] + '</td> ' +
            '</tr>'
    }
    return main.innerHTML += str;

}

