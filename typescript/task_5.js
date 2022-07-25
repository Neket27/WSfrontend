import listInfo from '../jsonFiles/motorists.json' assert { type: 'json' };
addBlocksContent(listInfo);
function addBlocksContent(listInfo) {
    var dataInTable = document.getElementById("table-content");
    var rows = listInfo.map(function (data) {
        return "\n                <tr>\n                    <td class=\"main-table__field\">".concat(data.person.firstname, " ").concat(data.person.lastname, "</td>\n                    <td class=\"main-table__field\">").concat(data.car.manufacturer, "</td>\n                    <td class=\"main-table__field\">").concat(data.car.model, "</td>\n                    <td class=\"main-table__field\">").concat(data.car.year, "</td>\n                </tr>\n                   ");
    });
    dataInTable.innerHTML += rows.join('');
    dataInTable.hidden = false;
}
var detailsInTable = document.getElementById("main-table__details");
function addBlocksContentDetail(listInfo) {
    detailsInTable.innerHTML = "\n                <tr>\n                    <th class=\"main-table__field\">\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446</th>\n                    <th class=\"main-table__field\">\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C</th>\n                    <th class=\"main-table__field\">\u041C\u0430\u0440\u043A\u0430</th>\n                    <th class=\"main-table__field\">\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430</th>\n                    <th class=\"main-table__field\">\u0422\u0438\u043F \u043A\u0443\u0437\u043E\u0432\u0430</th>\n                    <th class=\"main-table__field\">\u0412\u0438\u043D</th>\n                    <th class=\"main-table__field\">\u0426\u0432\u0435\u0442</th>\n                    <th class=\"main-table__field\">\u0422\u0438\u043F \u041A\u0440\u044B\u0448\u0438 \u043A\u0430\u0431\u0440\u0438\u043E\u043B\u0435\u0442</th>\n                </tr>\n                <tr>\n                    <td class=\"main-table__field\">".concat(listInfo.person.firstname, " ").concat(listInfo.person.lastname, "</td>\n                    <td class=\"main-table__field\">").concat(listInfo.car.manufacturer, "</td>\n                    <td class=\"main-table__field\">").concat(listInfo.car.model, "</td>\n                    <td class=\"main-table__field\">").concat(listInfo.car.year, "</td>\n                    <td class=\"main-table__field\">").concat(listInfo.car.type, "</td>\n                    <td class=\"main-table__field\">").concat(listInfo.car.vin, "</td>\n                    <td class=\"main-table__field\">").concat(listInfo.car.color, "</td>\n                    <td class=\"main-table__field\">").concat(listInfo.car.isConvertible ? "Да" : "Нет", "</td>\n                <tr>\n                   ");
    detailsInTable.hidden = false;
}
;
var personId;
var rowFlag = true;
var dataInTable = document.getElementById("table-content");
dataInTable.addEventListener('click', function (event) {
    var tableRowTarget = event.target;
    var row = tableRowTarget.closest('tr');
    function updateTable() {
        var extendedInfo = listInfo.find(function (m) { return m.id === personId; });
        addBlocksContentDetail(extendedInfo);
        buttonDelete.hidden = false;
    }
    if (rowFlag) {
        personId = listInfo[row.rowIndex - 1].id;
        updateTable();
    }
    else {
        personId = listInfo[row.rowIndex].id;
        updateTable();
    }
});
var buttonDelete = document.getElementById("table-details__delete");
buttonDelete.hidden = true;
if (buttonDelete) {
    buttonDelete.addEventListener('click', function () {
        var numberOfData = listInfo.findIndex(function (driver) { return driver.id === personId; });
        dataInTable.deleteRow(numberOfData);
        listInfo.splice(numberOfData, 1);
        buttonDelete.hidden = true;
        detailsInTable.hidden = true;
        rowFlag = false;
        dataInTable.innerHTML = "";
        addBlocksContent(listInfo);
    });
}
