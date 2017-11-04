const express = require('express')

const mongoose = require('mongoose');
mongoose.connect('mongodb://will:will12345@ds119302.mlab.com:19302/node-security');

const db = mongoose.connection;
const app = express()
const port = 8888

app.get('/', (req, res) => {
	res.send('hi')
})

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})