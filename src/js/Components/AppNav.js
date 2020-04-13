import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SocialIcon from './SocialIcon';
import { Socials } from '../Config';

class AppNav extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
		};

		this.closeNav = this.closeNav.bind(this);
		this.closeNavFlyout = this.closeNavFlyout.bind(this);
		this.toggleNav = this.toggleNav.bind(this);
	}

	componentDidMount() {
		document.getElementById('nav').addEventListener('click', this.closeNavFlyout);
	}

	componentWillUnmount() {
		document.getElementById('nav').removeEventListener('click', this.closeNavFlyout);
	}

	closeNavFlyout(e) {
		if(e.target.id === 'nav' && e.target.classList.contains('expanded')) {
			this.toggleNav();
		}
	}

	toggleNav() {
		if(this.state.isOpen) {
			document.getElementById('nav').classList.add('closing');
			document.getElementById('nav').classList.remove('expanded');

			setTimeout(() => {
				document.getElementById('nav').classList.remove('closing');
				document.body.classList.remove('no-scroll');
			}, 500);
		}
		else {
			document.getElementById('nav').classList.add('expanded');
			document.body.classList.add('no-scroll');
		}

		this.setState({ isOpen: !this.state.isOpen });
	}

	closeNav() {
		if(this.state.isOpen) {
			document.getElementById('nav').classList.add('closing');
			document.getElementById('nav').classList.remove('expanded');

			setTimeout(() => {
				document.getElementById('nav').classList.remove('closing');
				document.body.classList.remove('no-scroll');

				this.setState({ isOpen: false });
			}, 500);
		}
	}

	render() {
		return(
			<nav>
				<div className='app-navbar'>
					<Link to="/" className="app-initial" title="Michael Kelly" onClick={ this.closeNav }>
						MK
					</Link>
					<div className="app-nav">
						<a className={'app-navbar-toggle' + (!this.state.isOpen ? '' : ' toggled')} onClick={(e) => this.toggleNav(e) }>
							<div></div>
							<div></div>
							<div></div>
							<span>Menu</span>
						</a>
					</div>
					<div className="social">
						{Socials.map((social, index) => {
							return(
								<SocialIcon
									key={ `social-${index}` }
									url={ social.url }
									id={ social.id }
									name={ social.name }
									icon={ social.icon }
								/>
							);
						})}
					</div>
				</div>
				<div className="app-navbar-overlay" id="nav">
					<div className="app-navbar-flyout-shadow"></div>
					<div className="app-navbar-flyout">
						<p>
							<span>M</span>ichael <span>K</span>elly
						</p>
						<ul>
							<li>
								<Link to="/" title="Home" onClick={ this.toggleNav }>Home</Link>
							</li>
							<li>
								<Link to="/about" title="About Me" onClick={ this.toggleNav }>About Me</Link>
							</li>
							<li>
								<Link to="/music" title="Music" onClick={ this.toggleNav }>Music</Link>
							</li>
							<li>
								<Link to="/contact" title="Contact Me" onClick={ this.toggleNav }>Contact Me</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default AppNav;