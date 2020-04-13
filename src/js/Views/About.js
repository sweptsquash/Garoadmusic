import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
	Col,
	Container,
	Row,
	Button,
} from 'reactstrap';
import SEO from '../Components/SEO';
import { AboutInfo } from '../Config';
import isSafari from '../Components/SafariDetection';

import Banner from '../../img/Banner.webp';
import BannerPNG from '../../img/Banner.png';

class About extends Component {
	constructor(props) {
		super(props);

		this.state = {
			webp: true,
		};
	}

	componentDidMount() {
		if(isSafari()) {
			this.setState({ webp: false });
		}
	}

	render() {
		return(
			<div>
				<SEO
					url="/about"
					title="About Me"
				/>
				<Container fluid={true}>
					<Row className="justify-content-center">
						<Col xl={ 12 }>
							<div className="project-banner" style={{ backgroundImage: `url(${ (this.state.webp) ? Banner : BannerPNG })` }}>
								<h1>About Me</h1>
							</div>
						</Col>
						<Col xl={ 3 }>
							<div className="panel p-3">
								{ AboutInfo.info }
								<Button color="light" outline block to="/music" tag={ Link }>
									Music Portfolio
								</Button>
							</div>
						</Col>
						<Col xl={ 3 }>
							<div className="panel" style={{ backgroundImage: `url(${ (this.state.webp) ? AboutInfo.image.webp : AboutInfo.image.png })`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default About;