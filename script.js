import { getQuotes } from './js/components/api-quotes.js';
import { newQuote } from './js/components/newQuotes.js';

console.clear();

const useLocal = true;
if (!useLocal) getQuotes();
if (useLocal) newQuote();


const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const quoteBtn = document.getElementById('new-quote');

// Tweet Quote
function tweetQuote() {
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterURL, '_blank');
}
// Event listeners
quoteBtn.addEventListener('click', getQuotes);
twitterBtn.addEventListener('click', tweetQuote);