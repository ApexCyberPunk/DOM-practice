// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [{quote: "lets get it", person: "Jeezy"}, {quote: "lets get it", person: "Jeezy"},{quote: "lets get it", person: "Jeezy"},{quote: "lets get it", person: "Jeezy"},{quote: "Get rich or die trying", person: "50 Cent"}, {quote: "My lipgloss popping", person: "random idiot"}, {quote: "fireBall!", person: "pitbull"}]

btn.addEventListener("click", function() {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})




