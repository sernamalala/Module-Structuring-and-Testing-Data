// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

const { error } = require("console");
const { get } = require("https");
const { number } = require("yargs");

// You will need to implement a function getCardValue

// You need to write assertions for your function to check it works in different cases

// Acceptance criteria:

// Given a card string in the format "A♠" (representing a card in blackjack - the last character will always be an emoji for a suit, and all characters before will be a number 2-10, or one letter of J, Q, K, A),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "9",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "10," "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.

// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."

function getCardValue(input) {

    //This function deals with card values and the different faces of the cards
    //It returns a specific value based on the card face
    //2-10 get their respective values returned
    //"J", "Q" and "K" get 10 returned
    //"A" gets 11 returned

    let value = input.slice(0, -1);
    let result = 0;
    //instead of using typeof use !isNaN to check for numbers
    if (/^(10|[2-9])$/.test(value)) {
        result = Number(value);
    }
    else if (value === "J" || value === "Q" || value === "K") {
        result = 10;
    }
    else if (value === "A") {
        result = 11;
    }
    else {
        throw new Error("Invalid card rank.");
    }
    return result;
}

// console.log(getCardValue("5♠"));  // 5
// console.log(getCardValue("J♦"));  // 10
// console.log(getCardValue("A♣"));  // 11
// console.log(getCardValue("Q♠"));  // 10
// console.log(getCardValue("Z♠"));  

//console.log(getCardValue("0Q♠"));
// console.log(getCardValue("010♠"));
// console.log(getCardValue("02♠"));
// console.log(getCardValue("0x02♠"));
// console.log(getCardValue("2.1♠"));


module.exports = getCardValue;