const express = require('express')
const app = express()
const port = 8888

app.get('/', (req, res) => {
	res.send('hi')
})

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})