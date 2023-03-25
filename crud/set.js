const connect = require('./connect.js');
const userExists = require('./validation/userExists.js')
const ObjectId = require('mongodb').ObjectId


const set = async (query) => {

	for(let wordUsername of query.payload.username){

		let error = true;

		for(let wordValid of "_1234567890qwertyuiopasdfghjklzxcvbnm@."){
			if(wordUsername.toLowerCase() == wordValid){
				error = false;
			}
		}

		if(error){
			return {
				status: 400,
				message: 'username hanya boleh menggunakan huruf, angka dan symbol _ !!!'
			}
		}

	}


	if(query.payload.username.indexOf(' ') != -1){
		return {
			status: 400,
			message: 'Username tidak boleh mengandung spasi !!!'
		}
	}


	if(query.payload.username.length == 0){
		return {
			status: 400,
			message: 'Username harus di isi !!!'
		}
	}

	if(query.payload.password.length < 8){
		return {
			status: 400,
			message: 'Password minimal 8 character !!!'
		}
	}

	const validUserExist = await userExists(query.payload);

	if(validUserExist != true){
		return validUserExist
	}


	const data = await connect();

	if(query.type == 'EDIT'){

		await data.updateOne({
			_id: new ObjectId(query.payload._id)
		},
		{
			$set:{
				username: query.payload.username,
				password: query.payload.password
			}
		})

	}else{
		await data.insertOne({
			username: query.payload.username,
			password: query.payload.password
		})	
	}

	return {
		status: 200,
		message: `Sukses Me${query.type == 'EDIT' ? 'ngedit' : 'nambahkan'} Data`,
	}
}

module.exports = set;