const api_url = "https://api.quotable.io/quotes/random?maxLength=70";

const qouteText = document.querySelector('.qoute');
const getAuthorName = document.querySelector('.author_name_span');
const tweetButton = document.querySelector('.twitter_button');

// Function to get a new quote
async function getQuote(url) {
    const response = await fetch(url);
    const data = await response.json();

    const quote = Array.isArray(data) ? data[0] : data;
    const quoteContent = quote.content;

    qouteText.innerHTML = quoteContent;
    getAuthorName.innerHTML = quote.author;
}

// Function to open a tweet window with the current quote
function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + qouteText.innerHTML + "---- by " + getAuthorName.innerHTML, "Tweet window", "width=600, height=400");
}

// When i refreshed the website one quote should be there //

document.addEventListener('DOMContentLoaded', function(){
    getQuote(api_url);
})