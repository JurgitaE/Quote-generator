import { newQuote } from "./newQuotes.js";
import { showLoading } from "./loader.js";

let apiQuotes = [];
async function getQuotes() {
    showLoading();
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