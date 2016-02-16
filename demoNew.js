var Nightmare = require('nightmare');
 
var nightmare = Nightmare()

nightmare
	.goto('http://yahoo.com')
	.type('input[title="Search"]', 'github nightmare')
	.click('.searchsubmit')