"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./styles.module.scss";

const AnimatedList = React.memo(({ className, children, delay = 1000 }) => {
	const [index, setIndex] = useState(0);
	const childrenArray = useMemo(
		() => React.Children.toArray(children),
		[children]
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
		}, delay);

		return () => clearInterval(interval);
	}, [childrenArray.length, delay]);

	const itemsToShow = useMemo(
		() => childrenArray.slice(0, index + 1),
		[index, childrenArray]
	);

	return (
		<div className={`${styles.animatedList} ${className}`}>
			<AnimatePresence>
				{itemsToShow.map((item, idx) => (
					<AnimatedListItem key={idx}>{item}</AnimatedListItem>
				))}
			</AnimatePresence>
		</div>
	);
});

AnimatedList.displayName = "AnimatedList";

const AnimatedListItem = ({ children }) => {
	const animations = {
		initial: { scale: 0.6, opacity: 0.5 },
		animate: { scale: 1, opacity: 1 },
		exit: { scale: 0.6, opacity: 0 },
		transition: { type: "spring", stiffness: 400, damping: 40 },
	};

	return (
		<motion.div
			initial={animations.initial}
			animate={animations.animate}
			exit={animations.exit}
			transition={animations.transition}
			className={styles.animatedListItem}
		>
			{children}
		</motion.div>
	);
};

AnimatedListItem.displayName = "AnimatedListItem";

export { AnimatedList, AnimatedListItem };
