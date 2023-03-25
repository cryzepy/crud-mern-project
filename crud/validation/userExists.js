const connect = require('../connect.js');
const ObjectId = require('mongodb').ObjectId;


async function validUserExistFunc(payload){

	const c = await connect();

	const result = await c.findOne({
		username: payload.username
	})


	if(result != null){
		return {
			status: 401,
			message: 'Username sudah digunakan !!!'
		}		
	}

	return true
};

module.exports = validUserExistFunc;