const aylien = require("aylien_textapi");
const dotenv = require('dotenv');

dotenv.config();

const textapi = new aylien({
	application_id: process.env.API_ID,
	application_key: process.env.API_KEY
});

function makeAylienRequest(url, server_res) {
	textapi.sentiment({'url': url}, (err, api_res) => {
		if (err === null) {
			server_res.send(api_res);
		}
		else {
			server_res.send({});
		}
	});
}

module.exports = {
	makeAylienRequest
}