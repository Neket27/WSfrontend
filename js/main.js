(async () => {
    let data = await fetch("motorists.json")
        .then(response => response.json());
    addBlocksContent(data)
})();

function addBlocksContent(listInfo) {
    let main = document.getElementById("table-content");

    listInfo.map(data => {
        const str =
            '<tr> ' +
            '<td class="main-table__field">' + data.person.firstname + " " + data.person.lastname + '</td> ' +
            '<td class="main-table__field">' + data.car.manufacturer + '</td> ' +
            '<td class="main-table__field">' + data.car.model + '</td> ' +
            '<td class="main-table__field">' + data.car.year + '</td> ' +
            '</tr>'
        return main.innerHTML += str;

    });
}

