import { showLoading, hideLoading } from "./loader.js";

function newQuote(quotes) {
    showLoading();
    const quoteText = document.getElementById('quote');
    const authorText = document.getElementById('author');

    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    authorText.textContent = quote.author ? quote.author : 'Unknown';
    quoteText.textContent = quote.text;
    hideLoading();

    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
}

export { newQuote };