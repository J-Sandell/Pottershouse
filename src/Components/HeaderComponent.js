import React, { Fragment, Component } from "react";
import { NavItem, Nav, NavLink } from "reactstrap";


class Header extends Component {
	render() {
		return (
			<Fragment>

				<div className="container-fluid">
					<div className="row">
						<div className="col">
							<h1 className="text-center">The Potter's House Christian Fellowship Church</h1>
						</div>
					</div>
				</div>

				<Nav className="navbar navbar-expand-lg bg-dark">
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