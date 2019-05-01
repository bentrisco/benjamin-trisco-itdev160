var data = [
	{
		artist: 'Bee Gees',
		description: 'The original movie soundtrack',
		albumtitle: '"Saturday Night Fever (Soundtrack)"',
		copiessold: 15000000,
		selector: 'p1',
	},
	{
		artist: 'Michael Jackson',
		description: 'Epic Records',
		albumtitle: '"Thriller"',
		copiessold: 33000000,
		selector: 'p2',
	},
	{
		artist: 'Simon & Garfunkel',
		description: 'Sony Records',
		albumtitle: '"Simon & Garfunkel: Greatest Hits"',
		copiessold: 14000000,
		selector: 'p3',
	},
    	{
		artist: 'Kenny Rogers',
		description: 'Liberty Records',
		albumtitle: '"Kenny Rogers: Greatest Hits"',
		copiessold: 12000000,
		selector: 'p4',
	},
        	{
		artist: 'Led Zeppelin',
		description: 'Atlantic Records',
		albumtitle: '"Led Zeppelin II"',
		copiessold: 12000000,
		selector: 'p5',
	},
];
    var price = 20;
    var price2 = 15,
    deluxeMult = 1.30,
    deluxePrice = price + (price * deluxeMult);
    deluxePrice2 = price2 + (price2 * deluxeMult);
    priceEl = document.getElementById('price'),
    price2El = document.getElementById('price2');
    deluxePriceEl = document.getElementById('deluxe-price'),
    deluxePrice2El = document.getElementById('deluxe-price2');

function Package(data) {
	this.artist = data.artist;
	this.description = data.description;
	this.albumtitle = data.albumtitle;
	this.copiessold = data.copiessold;
	this.selector = data.selector;
}

function writePackageInfo(package) {
	// Get reference to Dom elements
	var selector = package.selector,
		artistEl = document.getElementById(selector + '-artist'),
		descEl = document.getElementById(selector + '-description'),
		albumtitleEl = document.getElementById(selector + "-albumtitle"),
    	copiessoldEl = document.getElementById(selector + "-copiessold");
		descriptionEl = document.getElementById(selector + "-description");

/*nameEl.textContent = package.name;*/
	descEl.textContent = package.description;
	artistEl.textContent = package.artist;
  	copiessoldEl.textContent = package.copiessold.toLocaleString("en");
    albumtitleEl.textContent = package.albumtitle.toLocaleString("en");
    priceEl.textContent = price.toFixed(2);
    deluxePriceEl.textContent = deluxePrice.toFixed(2);
    price2El.textContent = price2.toFixed(2);
    deluxePrice2El.textContent = deluxePrice2.toFixed(2);
}

function init() {
	for (let i = 0; i < data.length; i++) {
		const package = data[i];
		//console.log(package.name);
		writePackageInfo(package);
	}

	//TODO Write other activity requirements
}
init();
