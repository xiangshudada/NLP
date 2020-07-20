const AYLIEN_SERVER_URL = 'http://localhost:3000/aylien';

// make the Post Request asynchronously
const makeAylienRequest = async (url='', data={}) => {

	const res = await fetch(url, {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	try {
		const data = await res.json();
		return data;
	}
	catch(err) {
		console.log('Error making API request.');
	}
}

function handleSubmit(event) {
	// prevents default behavior of button submit
	event.preventDefault();

	// get url text from input field
	const url = document.getElementById('user_url');

	// check if url is valid
	if(Client.isValidUrl(url.value)) {
		// changes input border to normal
		document.querySelector('input').style.border = "1px solid #424242";
		// change error paragraph
		document.querySelector('#invalid_message').style.display = "none";
		// makes the request to the server for the Aylien API
		makeAylienRequest('/aylien', {url: url.value})
		.then(data => {
			// updates the fields with API results
			const result_tags = document.querySelectorAll('.nlp-results p');
			result_tags[0].firstElementChild.textContent = data.polarity;
			result_tags[1].firstElementChild.textContent = data.polarity_confidence;
			result_tags[2].firstElementChild.textContent = data.subjectivity;
			result_tags[3].firstElementChild.textContent = data.subjectivity_confidence;
		});
	} else {
		// show invalid URL message and red border
		document.querySelector('input').style.border = "1px solid #f00";
		document.querySelector('#invalid_message').style.display = "inline-block";
	}
}

export {
	handleSubmit,
	makeAylienRequest
}