/* 
    Random Quote Generator - Pulls a random from the array of quotes
*/

let quoteArray = [
    {
        content: "Let's get crazy!",
        author: "Bob Ross"
    },
    {
        content: "Wash the brush, just beats the devil out of it!",
        author: "Bob Ross"
    },
    {
        content: "Nah.",
        author: "Rosa Parks"
    },
    {
        content: "That is the key to navigating this life — don't take it too seriously. That's when the party begins.",
        author: "Ru Paul"
    },
    {
        content: "May the forces of evil become confused on the way to your house",
        author: "George Carlin"
    },
    {
        content: "Just cause you got the monkey off your back doesn't mean the circus has left town.",
        author: "George Carlin"
    },
    {
        content: "Life is 10% what happens to you and 90% how you react to it.",
        author: "Charles R. Swindoll"
    },
    {
        content: "Cynicism masquerades as wisdom, but it is the furthest thing from it. Because cynics don't learn anything. Because cynicism is a self-imposed blindness: a rejection of the world because we are afraid it will hurt us or disappoint us. Cynics always say 'no.' But saying 'yes' begins things. Saying 'yes' is how things grow.",
        author: "Stephen Colbert"
    },
    {
        content: "You can't really be passionately moderate. It's like wearing an 'Extra Medium' - it doesn't exist.",
        author: "Stephen Colbert"
    },
    {
        content: "There's an old saying about those who forget history. I don't remember it, but it's good.",
        author: "Stephen Colbert"
    },
    {
        content: "The Internet is just a world passing around notes in a classroom.",
        author: "Jon Stewart"
    },
    {
        content: "Confidence is 10% hard work and 90% delusion.",
        author: "Tina Fey"
    },
    {
        content: "The evil that is in the world almost always comes of ignorance, and good intentions may do as much harm as malevolence if they lack understanding.",
        author: "Albert Camus"
    },
    {
        content: "Blessed are the hearts that can bend; they shall never be broken.",
        author: "Albert Camus"
    }

];

//Setup html elements
let button = document.getElementById('new-quote'),
    quote = document.getElementById('new-quote'),
    author = document.getElementById('author');

//Generate a Random Quote
window.onload = randomQuote;
button.addEventListener('click', randomQuote);

//Random quote function
function randomQuote (){
    //Get a random number to pick a random quote object
    const random = Math.floor(Math.random() * quoteArray.length);
    //Get the quote content
    quote.innerHTML = quoteArray[random].content;
    //Get the quote author
    author.innerHTML = '&mdash; ' + quoteArray[random].author;
}