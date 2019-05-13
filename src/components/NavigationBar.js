import React from 'react';
import {Link} from "react-router-dom";

class NavigationBar extends React.Component {
	render() {
		return (
			<nav className="navbar bg-black m-2">
				<Link to="/"> <h5 className="subtitle navbarLink pl-5 ml-5 pt-1"> Home </h5></Link>
		    </nav>
		);
	}
}

export default NavigationBar;
