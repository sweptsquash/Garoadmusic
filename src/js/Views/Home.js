import React, { Component } from 'react';
import {
	Col,
	Container,
	Row,
} from 'reactstrap';
import SEO from '../Components/SEO';
import ProjectCard from '../Components/ProjectCard';
import { Projects } from '../Config';

class Home extends Component {
	render() {
		return(
			<div>
				<SEO url="/" />
				<Container fluid={true}>
					<Row className="justify-content-center">
						{Projects.map((project, index) => {
							return(
								<Col sm={ 12 } md={ 4 } key={ `project-${index}` }>
									<ProjectCard
										name={ project.name }
										url={ project.url }
										background={ project.background }
										logo={ project.logo }
										logoNoMargin={ project.logoNoMargin }
										quote={ project.quote }
										quoteAuthor={ project.quoteAuthor }
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

export default Home;