import React, { useState } from 'react';

function ContactPage() {
	const [formData, setFormData] = useState({
		fullName: '',
		subject: '',
		email: '',
		body: '',
	});

	const [formErrors, setFormErrors] = useState({});
	const [isSubmitted, setIsSubmitted] = useState(false);

	const validateForm = () => {
		const errors = {};

		if (formData.fullName.length < 3) {
		errors.fullName = 'Full name must be at least 3 characters.';
		}

		if (formData.subject.length < 3) {
		errors.subject = 'Subject must be at least 3 characters.';
		}

		const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (!emailPattern.test(formData.email)) {
		errors.email = 'Invalid email address.';
		}

		if (formData.body.length < 3) {
		errors.body = 'Body must be at least 3 characters.';
		}

		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleSubmit = event => {
		event.preventDefault();

		if (validateForm()) {
			console.log('Form data:', formData);
			setIsSubmitted(true);
		}
	};

	const handleChange = event => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	if (isSubmitted) {
		return <div className="container"><h1>Thank you for contacting us!</h1>
		<p>Your request will be handled asap, and you will receive a replay within a couple of days.</p></div>;
	}

	return (
		<div className="container contact-form">
			<h1>Contact Us</h1>
			<p>Get in touch with our customer service using the form below.</p>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="fullName">Full Name</label>
					<input
						type="text"
						id="fullName"
						name="fullName"
						placeholder="Enter your full name"
						value={formData.fullName}
						onChange={handleChange}
					/>
					{formErrors.fullName && <p className="form-error">{formErrors.fullName}</p>}
				</div>
			<div>
				<label htmlFor="subject">Subject</label>
				<input
					type="text"
					id="subject"
					name="subject"
					placeholder="Enter a subject"
					value={formData.subject}
					onChange={handleChange}
				/>
				{formErrors.subject && <p className="form-error">{formErrors.subject}</p>}
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="something@example.com"
					value={formData.email}
					onChange={handleChange}
				/>
				{formErrors.email && <p className="form-error">{formErrors.email}</p>}
			</div>
			<div>
				<label htmlFor="body">Body</label>
				<textarea
					id="body"
					name="body"
					placeholder="Enter your message here"
					value={formData.body}
					onChange={handleChange}
				/>
				{formErrors.body && <p className="form-error">{formErrors.body}</p>}
			</div>
			<button type="submit">Submit</button>
		</form>
		</div>
	);
}

export default ContactPage;