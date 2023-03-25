import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header.jsx';
import List from './components/List/List.jsx';
import Create from './components/dataManipulation/Create.jsx';
import Alert from './components/alert/danger-alert.jsx';
import Footer from './components/footer.jsx';
import './App.css'
import API_URL from "./api_url.js";

const App = () => {

	const [ modeEdit, setModeEdit ] = useState(false);
	const [ valueEdit, setValueEdit ] = useState({
		username: '',
		password: '',
		id: 0
	});
	const [ database, setDatabase ] = useState([]);
	const [ alert, setAlert ] = useState({
		status: false,
		message: 'Gagal Menambahkan Data',
		code: 200
	})

	const [ darkMode,setDarkMode ] = useState(false);

	


	useEffect(() => {

		const fetchData = async () => {
			try{
				const data = await axios.get(`${API_URL}/read`);
				
				if(typeof data.data == "object") {
				 	setDatabase(data.data);
				}
				
			}catch(err){
				console.log(err);
			}
		}

		fetchData();

	},[])
	
	return (
		<>
			{ alert.status && <Alert alert={alert} /> }
			<Header />

			<div>
				<Create modeEdit={modeEdit} setModeEdit={setModeEdit} valueEdit={valueEdit} setValueEdit={setValueEdit} setDatabase={setDatabase} database={database} setAlert={setAlert} alert={alert} />
				{ database.length > 0 && <List setModeEdit={setModeEdit} setValueEdit={setValueEdit} database={database} setDatabase={setDatabase} setAlert={setAlert} /> }
			</div>

			<Footer />
		</>
	)
}

export default App;