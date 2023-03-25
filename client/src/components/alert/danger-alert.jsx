const Alert = (props) => {

	const theClass = `alert alert-${props.alert.code > 299 ? 'danger' : 'success'} w-auto py-2 px-5 position-fixed top-0 end-0 mt-3 me-3 z-3` 

	return (
		<div className={theClass} role="alert">
			  {props.alert.message}
		</div>
	)
}

export default Alert;