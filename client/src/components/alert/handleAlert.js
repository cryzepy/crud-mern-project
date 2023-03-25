import axios from 'axios';
import API_URL from '../../api_url.js';

const handleAlert = async (data,setALert,setDatabase) => {

	const error = data.status > 299 ? true : false;

	setALert({
		status: true,
		message: data.message,
		code: data.status
	})

	setTimeout(() => setALert({
		status: false,
		message: '',
		code: 0
	}),2500)

	try{
		const data = await axios.get(`${API_URL}/read`);
		setDatabase(data.data)
	}catch(err){
		
	}

	return error
}

export default handleAlert;