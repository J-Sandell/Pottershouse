import React, { Fragment } from "react";
import { Navbar, NavItem, Nav, NavLink } from "reactstrap";


class Header extends React {
	render() {
		return (
			<Fragment>
				<div>
					<Navbar dark sticky="top">
						<Nav>
							<NavItem>
								<NavLink>Home</NavLink>
							</NavItem>
						</Nav>
					</Navbar>
				</div>
			</Fragment>
		)

	}
}


export default Header; 