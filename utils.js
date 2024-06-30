function parseDate(dateStr) {
    const [day, month, year] = dateStr.split('/');
    return new Date(Date.UTC(year, month - 1, day)); // month - 1 because months are 0-indexed in JS
}
function incrementDate(date) {
    date.setDate(date.getDate() + 1);
}

module.exports = { parseDate, incrementDate };