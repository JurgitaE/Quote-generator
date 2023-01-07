let apiQuotes = [];

// Show new quote
function newQuote(quotes) {
    const randomQuote = Math.ceil(Math.random() * quotes.length);
    console.log(quotes[randomQuote].author, quotes[randomQuote].text, quotes[randomQuote].tag);
}
// Get Quotes from API
async function getQuates() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote(apiQuotes);
    } catch (error) {
        // Catch error here
    }
};

// on Load
getQuates()