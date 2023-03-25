import axios from 'axios';
import handleAlert from '../alert/handleAlert.js';
import API_URL from '../../api_url.js';


const Table = (props) => {

	const handleEdit = (username, password, id) => {
		props.setModeEdit('EDIT');
		props.setValueEdit({ username, password, id });
	}

	const handleDelete = async (event,id) => {
		const filter = props.database.filter(user => id != user.id);

		try{
			const del = await axios.post(`${API_URL}/delete`,{ id });
			console.log(del)
			try{
				const data = await axios.get(`${API_URL}/read`);
				handleAlert(del.data,props.setAlert,props.setDatabase);
				props.setDatabase(data.data);
			}catch(err){

			}
		}catch(err){

		}

	}

	return (
		<tbody>
			{
			  	props.database.map((user, index) => {
			  		return (
					    <tr key={index}>
					      <th scope="row">{index + 1}</th>
					      <td>{user.username}</td>
					      <td>{user.password}</td>
					      <td className='d-flex gap-3'>
					      	<a className='btn btn-info text-light btn-sm' onClick={() => handleEdit(user.username, user.password, user._id)} href="#form-edit">Edit</a>
					      	<button className='btn btn-danger btn-sm' onClick={(event) => handleDelete(event,user._id)} >
					      		Delete
					      	</button>
					      </td>
					    </tr>
			  		)
			  	})
		  	}
		</tbody>
	)
}

export default Table;