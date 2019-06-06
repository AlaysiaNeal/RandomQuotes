/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var  quotes =[
  { quote:"And if at first your don't succeed, then dust yourself off and try again!",
  source:'Aaliyah',
  citation:'Aaliyah',
  year:'2000'
},
  { quote:'It all takes time and lessons and places, but I’m learning to listen to my restless heart,telling me to go go go!!!',  
  source:'Charlotte Ericksson',
  citation:'Another Vagabond Lost To Love: Berlin Stories on Leaving & Arriving.',
  year:'2000' 
},
  { quote:"You can always edit a bad page. You can’t edit a always edit a bad page. You can’t edit a blank page",
source:'Jodi Picoult',
citation:'The Writing Cooperative',
year:'2000'
},
{   quote:'Programers are not to be measured by their ingenuity and their logic but by the completeness of their case analysis.',
source:'Alan J. Pelis',
citation:'Goodreads',
year:'2000'
},
{quote:"The way a team plays as a whole determines its success.You may have the greatest bunch of individual stars in the world,but if they don't play together,the club won't be worth a dime.",
    source:'Alan J. Pelis',
    citation:'Goodreads',
    year:'2000'
}
]

 function getRandomQuote() {
  var myQuote = Math.floor(Math.random() * quotes.length)
  return quotes[myQuote];
}


 function printQuote() {
  var results=getRandomQuote();
  var written=
  '<p class="quote">'+results.quote+'</p>'+
  '<p class="source">'+results.source+
    '<span class="citation">'+results.citation+'</span>'+
    '<span class="year">'+results.year+'</span>';

document.getElementById('quote-box').innerHTML=written;
}

document.getElementById("loadQuote").addEventListener("click", printQuote, false);
