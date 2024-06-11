import { motion, useTransform } from "framer-motion";

const AnimatedWord = ({ word, index, totalWords, scrollProgress }) => {
	// Create a color animation for each word based on its position in the text
	const color = useTransform(
		scrollProgress,
		[index / totalWords, (index + 1) / totalWords],
		["rgba(0, 0, 0, 0.1)", "#000"] // Change colors from grey to black
	);

	const translateY = useTransform(
		scrollProgress,
		[index / totalWords, (index + 1) / totalWords],
		[5, 0]
	);

	return (
		<motion.div
			style={{
				color,
				marginRight: "0.5em",
				display: "inline-block",
				translateY,
			}}
		>
			{word}
		</motion.div>
	);
};

export default AnimatedWord;
