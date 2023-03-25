import { useRef, useEffect } from 'react';
import axios from 'axios';
import handleAlert from '../alert/handleAlert.js'; 
import API_URL from '../../api_url.js';

const FormCreate = (props) => {

	const username_input = useRef();
	const password_input = useRef();

	useEffect(() => {
		if(props.modeEdit == 'EDIT'){
			username_input.current.value = props.valueEdit.username
			password_input.current.value = props.valueEdit.password
		}
	},[props.valueEdit]);

	const handleSubmit = async (event) => {
		event.preventDefault();

		let handle;

		const query = {
			type: props.modeEdit,
			payload: {
				username: username_input.current.value,
				password: password_input.current.value,
				_id: props.modeEdit == "EDIT" ? props.valueEdit.id : Date.now()
			}
		}

		try{
			const post = await axios.post(`${API_URL}/set`, query);
			handle = await handleAlert(post.data,props.setAlert,props.setDatabase);
		}catch(err){
			
		}finally{
			!handle && props.setModeEdit(false);
		}
		
	};

	const handleChange = () => {
		props.setValueEdit({
			username: username_input.current.value,
			password: password_input.current.value,
			id: props.valueEdit.id 
		})
	}

	return (
		<>
			<h5 className='mt-3'>{props.modeEdit=='EDIT' ? 'Edit' : 'Tambah'} User</h5>
			<form className="row g-3" onSubmit={handleSubmit} >
			  <div className="col-auto">
			    <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
			    <input type="text" className="form-control" id="staticEmail2"  placeholder="Username" ref={username_input} onChange={handleChange} />
			  </div>
			  <div className="col-auto">
			    <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
			    <input type="text" className="form-control" id="inputPassword2" placeholder="Password" ref={password_input} onChange={handleChange} />
			  </div>
			  <div className="col-auto">

			    <button className="btn btn-primary mb-3" type='submit' >
			    	{props.modeEdit=='EDIT' ? 'Edit' : 'Tambah'} User
			    </button>
			  </div>
			</form>
		</>
	)
}

export default FormCreate;