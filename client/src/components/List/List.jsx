import Table from './Table.jsx';

const List = (props) => {

	return (
		<table className="table table-striped mt-3 container-sm">
		  <thead>
		    <tr>
		      <th scope="col">No.</th>
		      <th scope="col">Username</th>
		      <th scope="col">Password</th>
		      <th scope="col">Action</th>
		    </tr>
		  </thead>

		  <Table setModeEdit={props.setModeEdit} setValueEdit={props.setValueEdit} database={props.database} setDatabase={props.setDatabase} setAlert={props.setAlert} />

		 </table>
	)
}

export default List;