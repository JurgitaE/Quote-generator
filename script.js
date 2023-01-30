import { getQuotes } from './js/components/api-quotes.js';
import { newQuote } from './js/components/newQuotes.js';
import { localQuotes } from './js/data/quotes.js';

console.clear();

const selectBtn = document.getElementById('select');
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const quoteBtn = document.getElementById('new-quote');
// primary values
let useLocal = true;
selectBtn.textContent = 'Change to API quotes';

if (!useLocal) getQuotes();
if (useLocal) newQuote(localQuotes);




// Tweet Quote
function tweetQuote() {
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterURL, '_blank');
}
// Event listeners
selectBtn.addEventListener('click', () => {
    selectBtn.textContent = selectBtn.textContent === 'Change to API quotes' ? 'Change to Local quotes' : 'Change to API quotes';
    if (selectBtn.textContent === 'Change to API quotes') {
        useLocal = true;
        newQuote(localQuotes);

    } else {
        useLocal = false;
        getQuotes();
    }
})
quoteBtn.addEventListener('click', () => {
    if (useLocal) {
        newQuote(localQuotes)
    } else {
        getQuotes();
    }
});



twitterBtn.addEventListener('click', tweetQuote);