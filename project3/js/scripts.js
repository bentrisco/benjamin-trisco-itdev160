var data = [
	{
		charity: 'Save the Children',
		description: 'Helping kids in poverty',
		rating: 'Five Stars',
		selector: 'p1',
	},
	{
		charity: 'myFace',
		description: 'Helping craniofacial patients',
		rating: 'Five Stars',
		selector: 'p2',
	},
	{
		charity: 'Abandoned Childrens Fund',
		description: 'Helping Abandoned Children in need.',
		rating: 'Five Stars',
		selector: 'p3',
	},
    	{
		charity: 'Foster Parent Association',
		description: 'Connecting Foster parents to Foster children',
		rating: 'Four Stars',
		selector: 'p4',
	},
        	{
		charity: 'Children Fighting Serious Illness',
		description: 'A charity for terminally ill children',
		rating: 'Five Stars',
		selector: 'p5',
	},
];
function Package(data) {
	this.charity = data.charity;
	this.description = data.description;
	this.rating = data.rating;
	this.selector = data.selector;
}
function writePackageInfo(package) {
	var selector = package.selector;
		charityEl = document.getElementById(selector + '-charity'),
		descEl = document.getElementById(selector + '-description'),
		ratingEl = document.getElementById(selector + "-rating");

  charityEl.textContent = package.charity.toLocaleString("en");
	descEl.textContent = package.description.toLocaleString("en");
	ratingEl.textContent = package.rating.toLocaleString("en");
}
function init() {
	for (let i = 0; i < data.length; i++) {
		const package = data[i];
		writePackageInfo(package);
	}
}
init();
