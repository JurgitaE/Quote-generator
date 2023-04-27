const loader = document.querySelector('.loader');
const quoteContainer = document.querySelector('.quote-container');
// https://www.w3schools.com/howto/howto_css_loader.asp
function showLoading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function hideLoading() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}
export { showLoading, hideLoading };