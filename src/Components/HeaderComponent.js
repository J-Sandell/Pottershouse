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
						<div className="col-2">
							<button type="button" class="btn btn-success">Donate</button>
						</div>
					</div>
				</div>
				<div>
					<Nav >
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
				</div>

			</Fragment>
		)

	}
}


export default Header; 