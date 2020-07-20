const urlChecker = require('../client/js/urlChecker');

// https://
test('Test if valid URL was given', () => {
	expect(urlChecker.isValidUrl('https://techcrunch.com/2020/06/18/the-techcrunch-list-rebuilding-vc/'))
	.toBe(true);
});

// http://
test('Test if valid URL was given', () => {
	expect(urlChecker.isValidUrl('http://techcrunch.com/2020/06/18/the-techcrunch-list-rebuilding-vc/'))
	.toBe(true);
});

// without http
test('Test if valid URL was given', () => {
	expect(urlChecker.isValidUrl('techcrunch.com/2020/06/18/the-techcrunch-list-rebuilding-vc/'))
	.toBe(false);
});