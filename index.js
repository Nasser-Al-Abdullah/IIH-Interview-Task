const { parseDate, incrementDate } = require('./utils');


const readline = require('readline');

// Create interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let prices = [
    { start_date: "5/1/2022", end_date: "15/1/2022", price: 5 },
    { start_date: "1/1/2022", end_date: "11/1/2022", price: 3 },
    { start_date: "3/1/2022", end_date: "13/1/2022", price: 10 },
    { start_date: "2/1/2022", end_date: "11/1/2022", price: 4 },
];

prices = prices.map(price => ({
    start_date: parseDate(price.start_date),
    end_date: parseDate(price.end_date),
    price: price.price
}));


// ---------------------------------------------------------------------------------------------------------


function calculatePrices(startDate, endDate) {
    let price = 0;
    let arraySize = prices.length -1;

    while (startDate <= endDate) {
        let index = arraySize;
        let priceFound = false;
        // compare each date with array ranges

        while(!priceFound) {
            if (startDate >= prices[index].start_date && startDate <= prices[index].end_date) {
                price += prices[index].price;
                priceFound = true;
            }
            index--;
        } 
        
        incrementDate(startDate);
    }
    console.log(price + "$");
}



// ---------------------------------------------------------------------------------------------------------
rl.question('Enter the start date (e.g., 1/1/2022): ', (startDate) => {
    rl.question('Enter the end date (e.g., 15/1/2022): ', (endDate) => {
        calculatePrices(parseDate(startDate), parseDate(endDate));
        rl.close();
    });
});