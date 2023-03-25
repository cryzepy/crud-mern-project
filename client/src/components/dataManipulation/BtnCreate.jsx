import { useRef, useEffect } from 'react';

const BtnCreate = (props) => {
	
	const button = useRef();

	useEffect(() => {

		if(props.modeEdit == 'ADD' || props.modeEdit == 'EDIT'){
			button.current.classList.remove('btn-primary');
			button.current.classList.add('btn-danger');
			return
		}

		button.current.classList.add('btn-primary');
		button.current.classList.remove('btn-danger');

	})

	const handleSetMode = () => {
		props.setModeEdit(prev => {
			if(prev == false){
				return 'ADD'
			}else if(prev == 'EDIT' || prev == 'ADD'){
				return false
			}
		})
	}

	return (
		<button className='btn' onClick={handleSetMode} ref={button} id="form-edit" > 
			{ props.modeEdit == 'ADD' && 'Batal Tambah' }
			{ props.modeEdit == 'EDIT' && 'Batal Edit' }
			{ props.modeEdit == false && 'Tambah User' }
		</button>
	)
}

export default BtnCreate;