import React, { Component } from 'react';
import {
	Button,
	Col,
	Container,
	Row,
	Modal,
	ModalBody,
} from 'reactstrap';
import SEO from '../Components/SEO';
import { Projects } from '../Config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

class Project extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false,
		};
	}

	render() {
		const projectName = this.props.match.params.projectName;
		const projectIndex = Object.keys(Projects).find(key => Projects[key].url === projectName);

		if(projectIndex !== undefined) {
			const project = Projects[projectIndex];

			const toggleModal = () => {
				this.setState({ isModalOpen: !this.state.isModalOpen });
			};

			return(
				<div>
					<SEO
						url={ project.url }
						title={ project.name }
					/>
					<Container fluid={true}>
						<Row>
							<Col xl={12}>
								<div className="project-banner" style={{ backgroundImage: `url(${ project.banner })` }}>
									<img src={ project.logo } alt={ project.name } className="project-logo" style={ ((project.style !== undefined && project.style.logo !== undefined) ? project.style.logo : {}) } />
									<a onClick={ toggleModal } title="Play Trailer" className={ (project.trailer !== undefined) ? '' : 'd-none' }>
										<FontAwesomeIcon icon={ faPlayCircle } />
									</a>
								</div>
							</Col>
						</Row>
						<Row>
							<Col sm={ 12 } xl={ 4 }>
								<div className="panel p-3">
									<h1>{ project.name }</h1>
									<p>Developer: { project.developer }</p>
									<p>Publisher: { project.publisher }</p>
									<p>Release Date: { project.release }</p>
									{ (project.links != undefined) && (
										project.links.map((link, index) => {
											return(
												<Button block outline color="light" className="mb-2" href={ link.url } key={ index } target="_blank" rel="noopener noreferrer">
													<FontAwesomeIcon icon={ link.icon } /> { link.name }
												</Button>
											);
										})
									) }
								</div>
							</Col>
							<Col sm={ 12 } xl={ 4 }>
								<div className="panel p-3">
									{ project.info }
									{ (project.quote) && (
										<div>
											<hr className="border-light" />
											<blockquote className="blockquote">
												<p className="mb-0">{ project.quote }</p>
												<footer className="blockquote-footer">
													<cite title={ project.quoteAuthor }>{ project.quoteAuthor }</cite>
												</footer>
											</blockquote>
										</div>
									) }
								</div>
							</Col>
							<Col sm={ 12 } xl={ 4 }>
								{ (project.embed != undefined) ? (
									<iframe className="panel embed" width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay" seamless src={ project.embed } title={ `${ project.name } Soundtrack` }></iframe>
								) : (
									<div className="panel"></div>
								) }
							</Col>
						</Row>
					</Container>
					<Modal isOpen={ this.state.isModalOpen } toggle={ toggleModal } onClick={ toggleModal } centered={true} size='xl' backdrop={true}>
						<ModalBody className="p-0">
							<div className="embed-responsive embed-responsive-16by9">
								<iframe className="embed-responsive-item" src={ project.trailer } allowFullScreen></iframe>
							</div>
						</ModalBody>
					</Modal>
				</div>
			);
		}
		else {
			window.location.replace('/');
		}
	}
}

Project.propTypes = {
	match: PropTypes.object.isRequired,
};

export default withRouter(Project);