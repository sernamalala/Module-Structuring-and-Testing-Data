let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//5 function calls in total

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//The error occurs on line 5. This happens because I needed to add a comma between the two arguments inside replaceAll, ensuring both the search value (",") and the replacement value ("") are properly specified.
// c) Identify all the lines that are variable reassignment statements
//line 4 and 5 are reassignemnets of carPrice and priceAfterOneYear
// d) Identify all the lines that are variable declarations
//Line 1,2,7 and 8 are declarations using let or const as the keyword.
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//It is saying that all the places in the statement where there are commas (,) should be replaces with nothing
