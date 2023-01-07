
// Show new quote
function newQuote(quotes) {
    const randomIndex = Math.ceil(Math.random() * quotes.length);
    console.log(quotes[randomIndex].author, quotes[randomIndex].text);
}
/* // Get Quotes from API
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
getQuotes() */

// Playing with quotes.js locally
newQuote(localQuotes)