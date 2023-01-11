import { localQuotes } from './quotes.js'
console.clear();

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter-button');
const quoteBtn = document.getElementById('new-quote');

// Show new quote
function newQuote() {
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);

    authorText.textContent = quote.author ? quote.author : 'Unknown';
    quoteText.textContent = quote.text;

    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    console.log('fucku');
}

quoteBtn.addEventListener('click', newQuote);
/* let apiQuotes = [];
// Get Quotes from API
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
getQuotes() */

// Playing with quotes.js locally
newQuote(localQuotes);
