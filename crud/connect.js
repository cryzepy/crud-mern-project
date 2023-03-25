const mongodb = require('mongodb');

require('dotenv').config();

const connect = new mongodb.MongoClient(process.env.MONGO_URI)

async function connections(){

	try{
		const database = await connect.db(process.env.DATABASE);
		const collection = await database.collection(process.env.COLLECTION)

		return collection
	}catch(err){
		return 0
	}

}

module.exports = connections;