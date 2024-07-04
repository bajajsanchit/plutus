"use client";
//react
import { useState } from "react";
//styles
import styles from "./styles.module.scss";
//components
import QuestionCard from "../QuestionCard";
import { Formik, Form } from "formik";
//util
import { createValidationSchema } from "@/utils/createValidationSchema";
import { easeIn, motion } from "framer-motion";
//data
import WaitlistQuestions from "@/data/WaitlistQuestions";

const WaitlistForm = () => {
	const [step, setStep] = useState(0);
	const navigateBack = () => setStep(step - 1);
	const navigateNext = () => setStep(step + 1);

	//yup form validation schema
	const validationSchema = createValidationSchema(WaitlistQuestions);

	//initial value setup for form
	const initialValues = WaitlistQuestions.reduce(
		(acc, question) => ({
			...acc,
			[question.id]: question.type === "checkbox" ? false : "",
		}),
		{}
	);

	const currentQuestions = WaitlistQuestions.filter(
		(q) => !q.dependsOn || initialValues[q.dependsOn]
	);

	const isLastStep = step === currentQuestions.length - 1;

	const handleSubmit = (values) => {
		if (isLastStep) {
			console.log(values);
			alert("Form submitted!");
		} else {
			navigateNext();
		}
	};

	const variants = {
		initial: {
			opacity: 0,
			x: -40,
		},
		animate: {
			opacity: 1,
			x: 0,
			transition: {
				easeIn,
				duration: 0.1,
				type: "spring",
				stiffness: 600,
				damping: 20,
				mass: 1,
			},
		},
	};

	return (
		<div className={styles.waitlist_container}>
			<div className={styles.form_container}>
				<div className={styles.form_content}>
					<p>
						<span>Stay Ahead with Plutus</span>
						Add your name to the waitlist and be the first to experience a
						revolutionary way to manage and maximize your credit card benefits.
					</p>
				</div>

				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{({ values, errors, touched }) => (
						<Form className={styles.form}>
							{currentQuestions
								.filter((_, index) => index === step)
								.map((question) => (
									<motion.div
										key={question.id}
										initial="initial"
										animate="animate"
										variants={variants}
									>
										<QuestionCard
											{...question}
											navigation={{
												onBack: navigateBack,
												onNext: navigateNext,
												showBackButton: step > 0,
												isLastStep: isLastStep,
											}}
										/>
									</motion.div>
								))}

							<div className={styles.navigation_buttons}>
								<button
									className={styles.button_back}
									onClick={navigateBack}
									style={{ display: step > 0 ? "" : "none" }}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="40"
										height="24"
										viewBox="0 0 24 24"
										id="back-arrow"
									>
										<path
											fill="#333"
											d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"
										></path>
									</svg>
								</button>

								<button
									type={isLastStep ? "submit" : "button"}
									className={
										!isLastStep &&
										((touched[currentQuestions[step].id] &&
											errors[currentQuestions[step].id]) ||
											(!values[currentQuestions[step].id] &&
												values[currentQuestions[step].id] !== false))
											? `${styles.button_disabled}`
											: `${styles.button_next}`
									}
									onClick={() => handleSubmit(values)}
									disabled={
										!isLastStep &&
										((touched[currentQuestions[step].id] &&
											errors[currentQuestions[step].id]) ||
											(!values[currentQuestions[step].id] &&
												values[currentQuestions[step].id] !== false))
									}
								>
									{isLastStep ? "Submit" : "Next"}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="40"
										height="24"
										viewBox="0 0 24 24"
										id="back-arrow"
									>
										{/* <path fill="none" d="M0 0h24v24H0V0z"></path> */}
										<path
											fill="#333"
											d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"
										></path>
									</svg>
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default WaitlistForm;
