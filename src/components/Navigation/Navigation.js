import React, { Component } from 'react'
import "./Navigation.css";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";



export class Navigation extends Component {
	
	render() {
		return (
			<>
				<DesktopNav history={this.props.history}  />
		       <MobileNav />
			</>
		)
	}
}

export default Navigation


/*
const Navigation = ({ props }) => {
	const [show, setShow] = useState(false);

	const history = useHistory();

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleLogout = (e) => {
		e.preventDefault();
		handleClose();
		history.push("/auth/login");
	};

	const handleMenuToggle = () => {
		props.setShowMenu(!props.showMenu);
	};

	return (
		<>
		


			 
		</>
	);
};

export default Navigation;
*/


