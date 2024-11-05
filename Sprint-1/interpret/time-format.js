const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//there are 6 varibale declarations
// b) How many function calls are there?
//There is one function call, console.log
// c) Using documentation, explain what the expression movieLength % 60 represents
// according to the documentation the The remainder (%) operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.

// The remaining value of the movieLength will be return as the remaining amounts of minutes since the saved 60 minutes will be equivalent to an hour
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

//The total minutes line takes all the seconds thats are able to fit into miutes and saves that and gives the reminder secconds that dont fit full into 60 seconds which counts as a whole minute.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//The result tells us how long the movie is in hours and minutes, a better name would be totalMovieTime

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

//I think it would work for all movie lengths as long as the number of seconds is correct, it is emant to work around standard time values either way
