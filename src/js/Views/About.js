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

import Banner from '../../img/Banner.webp';

class About extends Component {
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
							<div className="project-banner" style={{ backgroundImage: `url(${ Banner })` }}>
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
							<div className="panel" style={{ backgroundImage: `url(${AboutInfo.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default About;