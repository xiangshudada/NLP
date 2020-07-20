/*
The only logic implemented to check if user input was valid URL or not
was to check for the 'http://' or 'https://' at the beginning of the text.
*/

function isValidUrl(url) {
	// User input has to start with 'http://' or 'https://'
	const url_pattern = new RegExp('^https?:\\/\\/');
	return url_pattern.test(url);
}

export {
	isValidUrl
}