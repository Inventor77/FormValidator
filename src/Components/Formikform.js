import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function Formikform() {
	return (
		<div>
			<Formik
				initialValues={{ name: "", designation: "", language: "english" }}
				onSubmit={(data, { setSubmitting, resetForm }) => {
					setSubmitting(true);
					// make your async call
					console.log("submit:", data);
					setSubmitting(false);
					resetForm();
				}}
			>
				{({ values, isSubmitting }) => (
					<Form>
						<label htmlFor="name">
							Name<span>*</span>
						</label>
						<Field
							type="text"
							name="name"
							value={values.name}
							placeholder="Enter full name"
						/>
						<ErrorMessage name="name" component="div" />
						<label htmlFor="designation">
							Designation<span>*</span>
						</label>
						<Field
							type="number"
							name="designation"
							value={values.designation}
							placeholder="Full Position"
						/>
						<ErrorMessage name="designation" component="div" />
						<label htmlFor="language">Language</label>
						<Field as="select" name="language" value={values.language}>
							<option value="english">English</option>
							<option value="hindi">Hindi</option>
							<option value="marathi">Marathi</option>
							<option value="bengali">Bengali</option>
						</Field>
						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
						<pre>{JSON.stringify(values, null, 2)}</pre>
					</Form>
				)}
			</Formik>
		</div>
	);
}
