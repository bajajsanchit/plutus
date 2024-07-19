import React from "react";
import styles from "./styles.module.scss";

const Ripple = React.memo(function Ripple({
	mainCircleSize = 180,
	mainCircleOpacity = 0.24,
	numCircles = 7,
}) {
	return (
		<div className={styles.relative_container}>
			<div className={styles.rippleContainer}>
				{Array.from({ length: numCircles }, (_, i) => {
					const size = mainCircleSize + i * 70;
					const opacity = mainCircleOpacity - i * 0.03;
					const animationDelay = `${i * 0.06}s`;
					const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
					const borderOpacity = 5 + i * 5;

					return (
						<div
							key={i}
							className={styles.rippleCircle}
							style={{
								width: `${size}px`,
								height: `${size}px`,
								opacity: opacity,
								animationDelay: animationDelay,
								borderStyle: borderStyle,
								borderColor: `#E56D27`,
							}}
						/>
					);
				})}
			</div>
		</div>
	);
});

Ripple.displayName = "Ripple";

export default Ripple;
