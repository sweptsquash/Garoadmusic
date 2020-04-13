import React, { Component } from 'react';
import {
	Alert,
	Button,
	Col,
	Container,
	Row,
	Form,
	FormGroup,
	Label,
	Input,
} from 'reactstrap';
import SEO from '../Components/SEO';

import Banner from '../../img/Banner.webp';

class Contact extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isSubmitted: false,
			isSubmitting: false,
			hasError: false,
			form: {
				name: {
					value: '',
					invalid: false,
				},
				email: {
					value: '',
					invalid: false,
				},
				subject: {
					value: '',
					invalid: false,
				},
				message: {
					value: '',
					invalid: false,
				},
			},
		};

		this.submitForm = this.submitForm.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	submitForm = async e => {
		e.preventDefault();

		this.setState({ isSubmitting: true });

		const res = await fetch('/api/contact.php', {
			method: 'POST',
			body: JSON.stringify(this.state.form),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		this.setState({ isSubmitting: false });

		const data = await res.json();

		if(data.result === 'success') {
			this.setState({ isSubmitted: true });
		}
		else {
			this.setState({ hasError: true });

			Object.keys(data.validation).map(item=> {
				this.setState(prevState => ({
					...prevState,
					form: {
						...prevState.form,
						[item]: {
							...prevState.form[item], invalid: data.validation[item],
						},
					},
				}));
			});
		}
	}

	handleInputChange = e => {
		const id = e.target.id;
		const value = e.target.value;

		this.setState(prevState => ({
			...prevState,
			form: {
				...prevState.form,
				[id]:{
					...prevState.form[id], value: value,
				},
			},
		}));
	}

	render() {
		return(
			<div>
				<SEO
					url="/contact"
					title="Contact Me"
				/>
				<Container fluid={true}>
					<Row className="justify-content-center">
						<Col xl={ 12 }>
							<div className="project-banner" style={{ backgroundImage: `url(${ Banner })` }}>
								<h1>Contact Me</h1>
							</div>
						</Col>
						<Col sm={ 12 } xl={ 4 }>
							<div className="panel p-3">
								{ (this.state.isSubmitted) ? (
									<Alert color="success">
										<p>Thank you for getting in touch!</p>
										<p>I appreciate you contacting me about { this.state.form.subject.value }, I aim to respond to everyone as quickly as possible.</p>
										<p>Thank you in advance for your patience.</p>
										<p>Have a great day!</p>
									</Alert>
								) : (
									<Form>
										{ (this.state.hasError) && (
											<Alert color="danger">A required field maybe incorrect or missing.</Alert>
										) }
										<FormGroup>
											<Label for="name" className="required">Name</Label>
											<Input type="text" name="name" id="name" value={ this.state.form.name.value } onChange={ this.handleInputChange } invalid={ this.state.form.name.invalid } required tabIndex={ 1 } />
										</FormGroup>
										<FormGroup>
											<Label for="email" className="required">Email</Label>
											<Input type="email" name="email" id="email" value={ this.state.form.email.value } onChange={ this.handleInputChange } invalid={ this.state.form.email.invalid } required tabIndex={ 2 } />
										</FormGroup>
										<FormGroup>
											<Label for="subject" className="required">Subject</Label>
											<Input type="text" name="subject" id="subject" value={ this.state.form.subject.value } onChange={ this.handleInputChange } invalid={ this.state.form.subject.invalid } required tabIndex={ 3 } />
										</FormGroup>
										<FormGroup>
											<Label for="message" className="required">Message</Label>
											<Input type="textarea" name="message" id="message" rows={ 15 } value={ this.state.form.message.value } onChange={ this.handleInputChange } invalid={ this.state.form.message.invalid } required tabIndex={ 4 } />
										</FormGroup>
										<Button color="light" outline block tabIndex={ 4 } disabled={ this.state.isSubmitting } onClick={ this.submitForm }>
											Submit
										</Button>
									</Form>
								)}
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Contact;