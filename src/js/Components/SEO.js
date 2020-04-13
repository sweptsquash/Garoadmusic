import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

class SEO extends Component {
	render() {
		const siteName = 'Michael "Garoad" Kelly';
		const siteDomain = 'http://www.garoadmusic.com';
		const socialTitle = ((this.props.title != null) ? this.props.title + ' | ' : '') + siteName;

		return(
			<Helmet
				title={ this.props.title }
				defaultTitle={ siteName }
				titleTemplate={'%s | ' + siteName}
				meta={[
					{
						name: 'twitter:title',
						content: socialTitle,
					},
					{
						property: 'og:title',
						content: socialTitle,
					},
					{
						property: 'og:url',
						content: siteDomain + this.props.url,
					},
				]}
				link={[
					{
						rel: 'canonical',
						href: siteDomain + this.props.url,
					},
				]}
			/>
		);
	}
}

SEO.propTypes = {
	title: PropTypes.string,
	url: PropTypes.string.isRequired,
};

export default SEO;