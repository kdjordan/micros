const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.post('/posts', (req, res) => {
	const event = req.body;
	axios.post('http://localhost:4000/posts', event);
	axios.post('http://localhost:4001/posts', event);
	axios.post('http://localhost:4002/posts', event);

	res.send({ status: 'ok' });
});

app.listen(4005, () => {
	console.log('Event Bus listening on  on PORT 4005');
});
