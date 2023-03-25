import BtnCreate from './BtnCreate.jsx';
import FormCreate from './FormCreate.jsx';

const Create = (props) => {

	return (
		<div className='mt-3 container'>
			<BtnCreate setModeEdit={props.setModeEdit} modeEdit={props.modeEdit} />
			{ (props.modeEdit == 'ADD' || props.modeEdit == 'EDIT') && <FormCreate modeEdit={props.modeEdit} setModeEdit={props.setModeEdit} valueEdit={props.valueEdit} setValueEdit={props.setValueEdit} setDatabase={props.setDatabase} database={props.database} setAlert={props.setAlert} alert={props.alert} /> }
		</div>
	)
}

export default Create;