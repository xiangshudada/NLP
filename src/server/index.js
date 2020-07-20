const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const aylien = require('./aylienAPI');

// server definition
const PORT = 3000;
const app = express();

// dependencies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('dist'))

// routes
app.get('/', (req, res) => {
	res.sendFile(path.resolve('dist/index.html'))
})

app.post('/aylien', (req, res) => {
	aylien.makeAylienRequest(req.body.url, res);
})

// server creation
const server = app.listen(PORT, () => {
	console.log(`Server is up. Listening on port ${PORT}.`);
})