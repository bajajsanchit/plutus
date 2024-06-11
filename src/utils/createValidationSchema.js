import * as Yup from "yup";

const createSchemaForType = (type, question) => {
	switch (type) {
		case "string":
			let stringSchema = Yup.string().required(question.requiredMessage);
			if (question.regexValidation) {
				stringSchema = stringSchema.matches(
					new RegExp(question.regexValidation),
					question.invalidMessage
				);
			}
			return stringSchema;
		case "email":
			return Yup.string()
				.email(question.invalidMessage)
				.required(question.requiredMessage);
		case "boolean":
			// Assuming that radio buttons should require a selection, you can adjust this as necessary.
			return Yup.boolean().required(question.requiredMessage);
		case "array":
			// Checkbox array handling: must select at least one if required.
			return Yup.array()
				.of(Yup.string().required(question.requiredMessage))
				.min(1, question.requiredMessage)
				.required(question.requiredMessage);
		default:
			throw new Error(`Unsupported type ${type}`);
	}
};

export const createValidationSchema = (questions) => {
	let schema = {};
	questions.forEach((question) => {
		schema[question.id] = createSchemaForType(
			question.validationType,
			question
		);
	});
	return Yup.object().shape(schema);
};
