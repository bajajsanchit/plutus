const WaitlistQuestions = [
	{
		id: "fullName",
		question: "Kick things off by telling us your name",
		placeholder: "John Doe",
		type: "text",
		validationType: "string",
		questionDescription: "We'd love to know what to call you.",
		invalidMessage:
			"Looks like you’ve used some characters we can’t accept. Only letters, please.",
		requiredMessage: "Oops, looks like you missed your name.",
		regexValidation: "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$", // Regex for valid full name, no numbers
	},
	{
		id: "email",
		question:
			"Join the club early! Your email gets you first in line for the grand unveiling. ✨",
		placeholder: "example@example.com",
		type: "email",
		validationType: "email",
		questionDescription:
			"Your email is the golden ticket! Please enter it to proceed.",
		invalidMessage:
			"Hmm, that email doesn't look quite right. Can you double-check it?",
		requiredMessage:
			"We're missing your email. It's your entry ticket to exclusive access!",
		regexValidation: `{^[^@]+@[^@]+\.[^@]+$}`,
	},
	{
		id: "contactNumber",
		question:
			"Share your contact info? We'll buzz you with something special! 🐝",
		placeholder: "+1234567890",
		type: "text",
		validationType: "string",
		questionDescription:
			"A phone number is required here—don’t worry, no spam calls!",
		invalidMessage:
			"Something's wrong here. Your contact number needs another look!",
		requiredMessage:
			"Don't forget your contact number. It's crucial for those special buzzes!",
		regexValidation: "^[0-9]{10}$", // Regex for valid contact number, no letters
	},
	{
		id: "hasCreditCard",
		question:
			"Got any credit cards tucked away in your wallet? We love to know! 💳",
		type: "radio",
		options: ["Yes", "No"],
		validationType: "string",
		questionDescription:
			"We need this detail to continue crafting your experience.",
		requiredMessage:
			"Let us know if you have a credit card. It helps us tailor your journey!",
	},
	{
		id: "creditCardType",
		question:
			"Spill the beans—what's your go-to credit card for shopping and more? 🛍️",
		type: "checkbox",
		options: [
			"HDFC Bank",
			"Axis Bank",
			"American Express",
			"ICICI Bank",
			"Other",
		],
		validationType: "array",
		questionDescription:
			"Your credit card type is key to unlocking special offers. Select all that apply!",
		dependsOn: "hasCreditCard",
		requiredMessage:
			"Please select your credit card types. It's important for the perks we plan!",
	},
	{
		id: "newsletterOptIn",
		question:
			"Elevate your finance game and gain an edge with every swipe! Subscribe to our newsletter for updates, tips, and exclusive offers! 📈",
		type: "radio",
		options: ["Yes", "No"],
		validationType: "string",
		requiredMessage:
			"Consider subscribing! It's the best way to stay ahead in the finance game.",
	},
];

export default WaitlistQuestions;
