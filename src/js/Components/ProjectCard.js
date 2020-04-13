import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

class ProjectCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<a href={ `/music/${ this.props.url }` } className="project parallax" style={{ backgroundImage: `url(${ this.props.background })` }} title={ this.props.name }>
				<img src={ this.props.logo } alt={ this.props.name } className={'project-logo' + (this.props.logoNoMargin ? ' bottom' : '')} />
				<div className="project-icon">
					<FontAwesomeIcon icon={ faLink } />
				</div>
				<div className="project-info">
					<p className="lead">{ this.props.name }</p>
					<blockquote className="blockquote">
						<p className="mb-0">{ this.props.quote }</p>
						{ (this.props.quoteAuthor) && (
							<footer className="blockquote-footer">
								<cite title={ this.props.quoteAuthor }>{ this.props.quoteAuthor }</cite>
							</footer>
						) }
					</blockquote>
				</div>
			</a>
		);
	}
}

ProjectCard.propTypes = {
	name: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	background: PropTypes.string.isRequired,
	logo: PropTypes.string.isRequired,
	logoNoMargin: PropTypes.bool,
	quote: PropTypes.string,
	quoteAuthor: PropTypes.string,
};

export default ProjectCard;