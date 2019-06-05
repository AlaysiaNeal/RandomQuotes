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
var Quotes =[
  { quote:"And if at first your don't succeed, then dust yourself off and try again!",
  source:'Aaliyah.',
  citation:'Aaliyah.',
  year:'2000'
},
  { quote:"It all takes time and lessons and places, but I’m learning to listen to my restless heart, telling me to “go, go, go!",
  source:'Charlotte Ericksson.',
  citation:'Another Vagabond Lost To Love: Berlin Stories on Leaving & Arriving.',
},
  { quote:"The way a team plays as a whole determines its success. You may have the greatest bunch of individual stars in the world,but if they don't play together,the club won't be worth a dime.",
  source:'Babe Ruth.',
  citation:' http://famousquotefrom.com/babe-ruth/ .',
},
  { quote:"You can always edit a bad page. You can’t edit a blank page",
  source:'Jodi Picoult.',
  citation:'The Writing Cooperative.',
},
  { quote:"Programmers are not to be measured by their ingenuity and their logic but by the completeness of their case analysis.",
  source:'Alan J. Pelis.',
  citation:'Goodreads.',
}
]





/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
var getRandomQuote = function (array) {
  var myQuote = Math.floor(Math.random() * quotes.length);
  return quotes[quoteIndex];

}






/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.