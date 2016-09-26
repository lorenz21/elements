var quotes = [];

			quotes[0] = {
				quote: "The earth is the mother of all people, and all people should have equal rights upon it.",
				source: "-Chief Joseph"};
			quotes[1] = {
				quote: "I believe alien life is quite common in the universe, although intelligent life is less so. Some say it has yet to appear on planet Earth.",
				source: "-Stephen Hawking"};
			quotes[2] = {
				quote: "Earth provides enough to satisfy every man's needs, but not every man's greed.",
				source: "-Mahatma Gandhi"};
			quotes[3] = {
				quote: "The only thing that scares me more than space aliens is the idea that there aren't any space aliens. We can't be the best that creation has to offer. I pray we're not all there is. If so, we're in big trouble.",
				source: "-Ellen DeGeneres"};
var count= 0;

function earthTransform() {
  document.getElementById("gonnaChange").style.backgroundImage = "url(\"images/earth2.jpg\")";
}

function waterTransform() {
  document.getElementById("gonnaChange").style.backgroundImage = "url(\"images/water.jpg\")";
}

function airTransform() {
  document.getElementById("gonnaChange").style.backgroundImage = "url(\"images/air3.jpg\")";
}

function fireTransform() {
  document.getElementById("gonnaChange").style.backgroundImage = "url(\"images/fire3.jpg\")";
}

function quoteGenerate() {
				count = Math.floor(Math.random() * quotes.length);
				count = Math.floor(Math.random() * quotes.length);
				document.getElementById("quoteText").innerHTML = '"'+quotes[count].quote+'"';
				document.getElementById("sourceText").innerHTML = quotes[count].source;
			}