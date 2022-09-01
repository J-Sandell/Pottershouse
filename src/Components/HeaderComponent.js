import React, { Fragment, Component } from "react";
import { NavItem, Nav, NavLink } from "reactstrap";


class Header extends Component {
	render() {
		return (
			<Fragment>
				<Nav className="bg-dark">
					<NavItem>
						<NavLink>Home</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>About</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>Mission</NavLink>
					</NavItem>
					<NavItem>
						<NavLink>Contact</NavLink>
					</NavItem>
				</Nav>
			</Fragment>
		)

	}
}


export default Header; 