// Data, simulate a database response
var data = [
	{
		name: 'HTML Snippets',
		description: 'Visual Studio Code HTML Snippets',
		author: 'Mohamed Abusaid',
		url: 'https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets',
		downloads: 256931,
		stars: 51,
		selector: 'p1',
	},
	{
		name: 'ESLint',
		description: 'VS Code ESLint extension',
		author: 'Dirk Baeumer',
		url: 'https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint',
		downloads: 18815438,
		stars: 114,
		selector: 'p2',
	},
	{
		name: 'Trailing Spaces',
		description: 'Highlight and Remove Trailing Spaces',
		author: 'Shardul Mahadik',
		url: 'https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces',
		downloads: 152033,
		stars: 19,
		selector: 'p3',
	},
	
];
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);
// Pacakge constructor function
function Package(data) {
	this.name = data.name;
	this.description = data.description;
	this.author = data.author;
	this.url = data.url;
	this.downloads = data.downloads;
	this.stars = data.stars;
	this.selector = data.selector;
}

// Function to write package data to page
function writePackageInfo(package) {
	// Get reference to Dom elements
	var selector = package.selector,
		nameEl = document.getElementById(selector + '-name'),
		descEl = document.getElementById(selector + '-description');
		authorEl = document.getElementById(selector + "-author"),
    	downloadsEl = document.getElementById(selector + "-downloads"),
    	starsEl = document.getElementById(selector + "-stars");
	//TODO: get regerence to remaining package properties

	// Write package data to Dom elements
	nameEl.textContent = package.name;
	descEl.textContent = package.description;
	authorEl.textContent = package.author;
  	downloadsEl.textContent = package.downloads.toLocaleString("en");
    starsEl.textContent = package.stars.toLocaleString("en");
	//TODO: write the remaining properties to the DOM elements
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
getTodaysDate();