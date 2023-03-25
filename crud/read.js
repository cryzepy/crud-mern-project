const connect = require('./connect.js');

async function readData(){
	const db = await connect();

	return await db.find({}).toArray()
}

module.exports = readData;