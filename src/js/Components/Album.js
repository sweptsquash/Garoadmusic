import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Album extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<a className="album" href={ this.props.url } rel="noopener noreferrer" target="_blank" style={{ backgroundImage: `url(${ this.props.cover })` }}>
				<div>{ this.props.title }</div>
			</a>
		);
	}
}

Album.propTypes = {
	cover: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default Album;