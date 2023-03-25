import { useState, useRef, useEffect } from 'react';

const Header = () => {

	const [ darkMode, setDarkMode ] = useState(false);
	const toggleDarkMode = useRef();

	useEffect(() => {

		document.body.dataset.bsTheme = darkMode ? "dark" : "light"

	},[darkMode])

	const handleChange = (event) => {
		setDarkMode(prev => !prev)
	}

	return <nav className="navbar bg-body-tertiary">
		<div className="container-fluid">
			<span className="navbar-brand mb-0 h2 text-primary">MERN Project</span>
			<div className="form-check form-switch">
			  <input className="form-check-input shadow-none" type="checkbox" role="switch" id="flexSwitchCheckChecked" ref={toggleDarkMode} onChange={handleChange} />
			  <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark Mode</label>
			</div>
  		</div>
	</nav>
}

export default Header;