/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** I created an array of five quotes with the property of source,citation,and year.I have five quotes.***/
var  quotes =[
  { quote:"And If At First You Don't Succeed, Dust Yourself Off And Try Again!",
  source:'Aaliyah',
  citation:'Aaliyah',
  year:'2000',
  category:'(Music🎼)'
},
  { quote:'It All Takes Time And Lessons And places, But I’m Learning To Listen To My Restless Heart,Telling Me To Go!!!',  
  source:'Charlotte Ericksson',
  citation:'Vagabond Lost To Love: Berlin Stories on Leaving & Arriving.',
  category:'(Author & Books📚✏️)'
},
  { quote:"You Can Always Edit A Bad Page.You Can’t Edit A Blank Page",
source:'Jodi Picoult',
citation:'The Writing Cooperative',
category:'(Author & Books📚✏️)'
},
{   quote:'Programers Are Not To Be Measured By Their Ingenuity And Their Logic But By The Completeness Of Their Case Analysis.',
source:'Alan J. Pelis',
citation:'Goodreads',
category:'(Technology💻)'
},
{   quote:"The Way A Team Plays As A Whole Determines Its Success.You May Have The Greatest Bunch Of Individual Stars In The World,But If They Don't Play Together,The Club Won't Be Worth A Dime.",
source:'Alan J. Pelis',
citation:'Goodreads',
category:'(Sports🏆)'    
}
]
/*** I created the getRandomQuote function to select a random quote each time the code is ran.My variable is myQuote ***/
 function getRandomQuote() {
  var myQuote = Math.floor(Math.random() * quotes.length)
  return quotes[myQuote];
}

/*** I created the print fucnction quote so that the webpage will display my random quotes.My variables are written and result.
In the function I have to use the if statement to stop the webpage from displaying undefined for the atrribute year and citation that is not present in the array of quotes.
i am calling my printquote and random background function.I also added a new attribute named category***/
 function printQuote() {
  random_bg_color();
  var written="";
  var results=getRandomQuote();
  written+='<p class="quote">'+results.quote+'</p>';
  written+='<p class="source">'+results.source;
  if(results.citation){
    written+='<span class="citation">'+results.citation+'</span>'
  };
  if(results.year) {
    written+='<span class="year">'+results.year+'</span>'
  };
  if(results.category){
    written+='<span class="category">'+results.category+'</span>'
  }
    written+="</p>";
    document.getElementById('quote-box').innerHTML=written
}

/*** the function below allows my webpage to pull a random color to place as my background .My variable is random color.***/

function random_bg_color() {
  var randomColor = '#' + Math.floor(Math.random()*9000000).toString(16); //limit the whiteness of the color.
  document.body.style.backgroundColor = randomColor;
  
}
/*** The set interval function allows my web page to generate a differnt background color and quote every 25 seconds .***/
setInterval(function(){ printQuote(); }, 25000);

/*** The printQuote button allows you to click through the random quotes .***/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
