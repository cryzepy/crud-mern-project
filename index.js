const express = require("express");
const app = express();
const cors = require("cors");
const { config } = require('dotenv');

config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use(express.static('client/build'));

const readData = require('./crud/read.js');
const deleteData = require('./crud/delete.js');
const setData = require('./crud/set.js');

app.get('/read', async (req,res) => {
	const data = await readData();
	res.send(data);
})

app.post('/delete', async (req,res) => {
	const data = await deleteData(req.body.id);
	res.send(data);
})

app.post('/set', async (req,res) => {
	const data = await setData(req.body);
	res.send(data);
})

app.listen(PORT,() => {
	console.log(`server running on port:${PORT}`)
});