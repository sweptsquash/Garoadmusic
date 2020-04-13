import React, { Component } from 'react';
import {
	Col,
	Container,
	Row,
} from 'reactstrap';
import SEO from '../Components/SEO';
import Album from '../Components/Album';
import { Albums } from '../Config';

class Music extends Component {
	render() {
		return(
			<div>
				<SEO
					url="/music"
					title="Music"
				/>
				<Container fluid={true}>
					<Row className="justify-content-center">
						{Albums.map((album, index) => {
							return(
								<Col xs={ 12 } sm={ 6 } md={ 3 } xl={ 2 } key={ `album-${index}` }>
									<Album
										title={ album.title }
										url={ album.url }
										cover={ album.cover }
									/>
								</Col>
							);
						})}
					</Row>
				</Container>
			</div>
		);
	}
}

export default Music;