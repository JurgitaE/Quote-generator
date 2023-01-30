import { newQuote } from "./newQuotes.js";

let apiQuotes = [];
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote(apiQuotes);
    } catch (error) {
        // Catch error here
    }
};

export { getQuotes };