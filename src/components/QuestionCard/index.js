import React from "react";
import styles from "./styles.module.scss";
import { Field, ErrorMessage, useFormikContext } from "formik";

const QuestionCard = ({
	question,
	questionDescription,
	id,
	type,
	options,
	placeholder,
}) => {
	const renderFormField = () => {
		switch (type) {
			case "select":
				return (
					<Field className={styles.select} as="select" name={id}>
						<option value="">Select...</option>
						{options.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</Field>
				);

			case "checkbox":
				return <Field className={styles.checkbox} name={id} type="checkbox" />;

			case "radio":
				return (
					<div className={styles.radio}>
						{options.map((option) => (
							<label key={option}>
								<Field name={id} type="radio" value={option} />
								{option}
							</label>
						))}
					</div>
				);

			case "text":
			default:
				return (
					<Field
						className={styles.text}
						name={id}
						type="text"
						placeholder={placeholder}
					/>
				);
		}
	};

	return (
		<div className={styles.question_card}>
			<p>{question}</p>
			<p className={styles.description}>{questionDescription}</p>

			<div className={styles.answer_container}>{renderFormField()}</div>

			<ErrorMessage className={styles.error} name={id} component="div" />
		</div>
	);
};

export default QuestionCard;
