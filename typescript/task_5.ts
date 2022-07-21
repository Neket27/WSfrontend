import listInfo from '../jsonFiles/motorists.json' assert {type: 'json'};

interface Motorist {
    id: string;
    person: {
        firstname: string;
        lastname: string;
    };
    car: {
        manufacturer: string;
        model: string;
        type: string;
        vin: string;
        year: number;
        color: string;
        isConvertible: boolean;
    };
}

addBlocksContent(listInfo)

function addBlocksContent(listInfo: Array<Motorist>) {
    const dataInTable: HTMLTableElement = <HTMLTableElement>document.getElementById("table-content");
    const rows = listInfo.map(data => {
        return `
                <tr>
                    <td class="main-table__field">${data.person.firstname} ${data.person.lastname}</td>
                    <td class="main-table__field">${data.car.manufacturer}</td>
                    <td class="main-table__field">${data.car.model}</td>
                    <td class="main-table__field">${data.car.year}</td>
                </tr>
                   `;

    });
    dataInTable.innerHTML += rows.join('');
    dataInTable.hidden = false;
}

const detailsInTable: HTMLTableElement = <HTMLTableElement>document.getElementById("main-table__details");

function addBlocksContentDetail(listInfo: Motorist) {
    detailsInTable.innerHTML = `
                <tr>
                    <th class="main-table__field">Владелец</th>
                    <th class="main-table__field">Производитель</th>
                    <th class="main-table__field">Марка</th>
                    <th class="main-table__field">Год выпуска</th>
                    <th class="main-table__field">Тип кузова</th>
                    <th class="main-table__field">Вин</th>
                    <th class="main-table__field">Цвет</th>
                    <th class="main-table__field">Тип Крыши кабриолет</th>
                </tr>
                <tr>
                    <td class="main-table__field">${listInfo.person.firstname} ${listInfo.person.lastname}</td>
                    <td class="main-table__field">${listInfo.car.manufacturer}</td>
                    <td class="main-table__field">${listInfo.car.model}</td>
                    <td class="main-table__field">${listInfo.car.year}</td>
                    <td class="main-table__field">${listInfo.car.type}</td>
                    <td class="main-table__field">${listInfo.car.vin}</td>
                    <td class="main-table__field">${listInfo.car.color}</td>
                    <td class="main-table__field">${listInfo.car.isConvertible ? "Да" : "Нет"}</td>
                <tr>
                   `;
    detailsInTable.hidden = false;
};


let personId: string;
let rowFlag: boolean = true;

const dataInTable: HTMLTableElement = <HTMLTableElement>document.getElementById("table-content");

dataInTable.addEventListener('click', (event: Event) => {
    const tableRowTarget: HTMLTableRowElement = <HTMLTableRowElement>event.target;
    const row: HTMLTableRowElement = <HTMLTableRowElement>tableRowTarget.closest('tr');

    function updateTable(): void {
        const extendedInfo: Motorist = <Motorist>listInfo.find((m: Motorist) => m.id === personId)
        addBlocksContentDetail(extendedInfo);
        buttonDelete.hidden = false;
    }

    if (rowFlag) {
        personId = listInfo[row.rowIndex - 1].id;
        updateTable();
    } else {
        personId = listInfo[row.rowIndex].id;
        updateTable();
    }
});

const buttonDelete: HTMLTableRowElement = <HTMLTableRowElement>document.getElementById("table-details__delete")
buttonDelete.hidden = true;

if (buttonDelete) {
    buttonDelete.addEventListener('click', function () {
        const numberOfData: number = listInfo.findIndex((driver: Motorist) => driver.id === personId);
        dataInTable.deleteRow(numberOfData);
        listInfo.splice(numberOfData, 1);
        buttonDelete.hidden = true;
        detailsInTable.hidden = true;
        rowFlag = false;
        dataInTable.innerHTML = "";
        addBlocksContent(listInfo)
    });
}


