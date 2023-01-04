let apiQuotes = [];

// Show new quote
function newQuote(quotes) {

}
// Get Quotes from API
async function getQuates() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch error here
    }
};

// on Load
getQuates()