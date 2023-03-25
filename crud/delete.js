const connect = require('./connect.js');
const ObjectId = require('mongodb').ObjectId;

const delete_ = async (_id) => {

	const data = await connect();

	const x = await data.deleteOne({
		"_id": new ObjectId(_id)
	});


	return {
		status: 200,
		message: 'Sukses Menghapus Data !!!'
	}
}

 
module.exports = delete_;