

function Footer() {

	return (
		<footer>
			<div className='container-fluid fixed-bottom bg-dark text-white'>
				<div className='row offset-1'>
					<div className='col'>
						<h3>links</h3>
						<ul className='list-unstyled'>
							<li>Home</li>
							<li>About</li>
							<li>Mission</li>
							<li>Contact</li>
						</ul>
					</div>
					<div className='col'>
						<h3>Social</h3>
						<ul className='list-unstyled'>
							<li>Facebook</li>
							<li>Instagram</li>
						</ul>
					</div>
					<div className='col'>
						<h3>Contact</h3>
						<ul className='list-unstyled'>
							<li>Email</li>
							<li>Location</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>

	)
}


export default Footer;