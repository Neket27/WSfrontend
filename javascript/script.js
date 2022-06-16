// import moment from 'moment';

const today = new Date();
window.console.log(today);
const stringDate = today.toLocaleDateString();
window.console.log(stringDate);
const tomorrow = moment()
    .add(1, 'days')
    .format('DD-MM-yyyy');
const dateBlock = document.getElementById('date');
dateBlock.append(stringDate);
dateBlock.append(`, Завтра: ${tomorrow}`);
