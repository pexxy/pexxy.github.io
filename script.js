$(document).ready(function () {
  $("#next-quote").on("click", function (e) {
    e.preventDefault();

    var randomQuoteNumber = getRandomQuoteNumber();
    updateQuote(randomQuoteNumber);
  });

  var q = location.search.split("?q=")[1];

  if (q >= 0 && q < quotes.length) {
    updateQuote(q);
  } else {
    $("#next-quote").click();
  }
});



function updateQuote(quoteNumber) {
  var randomQuote = quotes[quoteNumber];

  $("#quote").html(randomQuote.fact);
  $("#author").html(randomQuote.author);
  $("#quote-box").removeClass().addClass("animated bounceIn").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    $(this).removeClass();
  });
}

function getRandomQuoteNumber() {
  return Math.floor(Math.random() * quotes.length);
}

var quotes = [{ "author": "catLover", "fact": "The oldest known pet cat existed 9,500 years ago" },
{ "author": "catLover", "fact": "Cats spend 70% of their lives sleeping" },
{ "author": "catLover", "fact": "A cat was the Mayor of an Alaskan town for 20 years" },

{ "author": "catLover", "fact": "The record for the longest cat ever is 48.5 inches" },
{ "author": "catLover", "fact": "The richest cat in the world had £7 million" },
{ "author": "catLover", "fact": "Cats walk like camels and giraffes" },
{ "author": "catLover", "fact": "Isaac Newton invented the cat door" },
{ "author": "catLover", "fact": "In 1963 a cat went to space" },

{ "author": "catLover", "fact": "Ancient Egyptians would shave off their eyebrows when their cats died" },

{ "author": "catLover", "fact": "House cats share 95.6% of their genetic makeup with tigers" },
{ "author": "catLover", "fact": "A house cat can reach speeds of up to 30mph" },
{ "author": "catLover", "fact": "The oldest cat in the world was 38 years old!" },
{ "author": "catLover", "fact": "The record for the loudest purr is 67.8db(A)" },
{ "author": "catLover", "fact": " Didga the cat can perform 24 tricks in one minute" },

]



if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('../sw.js');
  });
}

window.addEventListener('offline', handleConnection);

function handleConnection() {
  if (!navigator.onLine) {
    alert("You are offline!");
  }
}




