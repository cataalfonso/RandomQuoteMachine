let quote=document.getElementById('text');
let authorQuote=document.getElementById('author');

const tweet= document.getElementById('tweet-quote');
const tumblr= document.getElementById('tumblr-quote');

const getQuotes=()=>{
    fetch("https://type.fit/api/quotes")
    .then(response =>response.json())
    .then(data=> chooseQuote(data));
}

const chooseQuote=(quotes)=>{
    let position= Math.round(Math.random()*quotes.length);
    printQuote(quotes[position].text, quotes[position].author);  
}

const printQuote=(text, author)=>{
    /*update Quotes*/
    quote.innerHTML=text;
    authorQuote.innerHTML=author;

     /*update links*/
    tweet.setAttribute('href',
    'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + text + '" ' + author));
    tumblr.setAttribute('href',
    'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
      encodeURIComponent(author) +'&content=' + encodeURIComponent(text) +
      '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
}


const newQuote = document.getElementById('new-quote');
newQuote.addEventListener("click", getQuotes);


window.onload= getQuotes();





