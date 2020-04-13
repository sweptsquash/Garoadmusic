import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isSafari from './SafariDetection';

class Album extends Component {
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
			<a className="album" href={ this.props.url } rel="noopener noreferrer" target="_blank" style={{ backgroundImage: `url(${ (this.state.webp) ? this.props.cover.webp : this.props.cover.png })` }}>
				<div>{ this.props.title }</div>
			</a>
		);
	}
}

Album.propTypes = {
	cover: PropTypes.exact({
		webp: PropTypes.string.isRequired,
		png: PropTypes.string.isRequired,
	}),
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default Album;