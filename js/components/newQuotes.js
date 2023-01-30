import { localQuotes } from "../data/quotes.js";

function newQuote(quotes = localQuotes) {
    const quoteText = document.getElementById('quote');
    const authorText = document.getElementById('author');
    // console.log(quotes);

    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    authorText.textContent = quote.author ? quote.author : 'Unknown';
    quoteText.textContent = quote.text;

    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
}

export { newQuote };