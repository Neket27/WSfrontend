let data;
(async () => {
    data = await (await fetch('motorists.json')).json();
    addBlocksContent(data)
})();

function addBlocksContent(data) {
    var main = document.getElementById("table-content");
    for (let index = 0; index < data.length; index++) {
        var str =
            '<tr> ' +
            '<td class="main-table__field">' + data[index]["person"]["firstname"] + " " + data[index]["person"]["lastname"] + '</td> ' +
            '<td class="main-table__field">' + data[index]["car"]["manufacturer"] + '</td> ' +
            '<td class="main-table__field">' + data[index]["car"]["model"] + '</td> ' +
            '<td class="main-table__field">' + data[index]["car"]["year"] + '</td> ' +
            '</tr>'
        main.innerHTML += str;
    }
}

