import React, { Component } from 'react';
import { Tooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

class SocialIcon extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isTooltipOpen: false,
		};
	}

	render() {
		const toggle = () => {
			this.setState({ isTooltipOpen: !this.state.isTooltipOpen });
		};

		return(
			<div>
				<a
					href={ this.props.url }
					target="_blank"
					rel="noopener noreferrer"
					id={ this.props.id }
					title={ this.props.name }
				>
					<FontAwesomeIcon icon={ this.props.icon } />
				</a>
				<Tooltip placement="right" isOpen={ this.state.isTooltipOpen } target={ this.props.id } toggle={ toggle }>
					{ this.props.name }
				</Tooltip>
			</div>
		);
	}
}

SocialIcon.propTypes = {
	icon: PropTypes.object.isRequired,
	url: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

export default SocialIcon;