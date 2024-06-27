"use client";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";

// const BackgroundBlobs = () => {
// 	const bubbleRef = useRef(null);

// 	useEffect(() => {
// 		const interBubble = bubbleRef.current;
// 		let curX = 0;
// 		let curY = 0;
// 		let tgX = 0;
// 		let tgY = 0;

// 		const move = () => {
// 			if (!interBubble) return;
// 			curX += (tgX - curX) / 20;
// 			curY += (tgY - curY) / 20;
// 			interBubble.style.transform = `translate(${Math.round(
// 				curX
// 			)}px, ${Math.round(curY)}px)`;
// 			requestAnimationFrame(move);
// 		};

// 		const handleMouseMove = (event) => {
// 			tgX = event.clientX;
// 			tgY = event.clientY;
// 		};

// 		window.addEventListener("mousemove", handleMouseMove);
// 		move();

// 		return () => {
// 			window.removeEventListener("mousemove", handleMouseMove);
// 		};
// 	}, []);

// 	return (
// 		<div className={styles.gradient_bg}>
// 			<svg xmlns="http://www.w3.org/2000/svg">
// 				<defs>
// 					<filter id="goo">
// 						<feGaussianBlur
// 							in="SourceGraphic"
// 							stdDeviation="10"
// 							result="blur"
// 						/>
// 						<feColorMatrix
// 							in="blur"
// 							mode="matrix"
// 							values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
// 							result="goo"
// 						/>
// 						<feBlend in="SourceGraphic" in2="goo" />
// 					</filter>
// 				</defs>
// 			</svg>

// 			<div className={styles.gradients_container}>
// 				<div className={styles.gradient_orb_1}></div>
// 				<div className={styles.gradient_orb_2}></div>
// 				<div className={styles.gradient_orb_3}></div>
// 				<div className={styles.gradient_orb_4}></div>
// 				<div className={styles.gradient_orb_5}></div>
// 				<div ref={bubbleRef} className={styles.interactive}></div>
// 			</div>
// 		</div>
// 	);
// };

// export default BackgroundBlobs;

const BackgroundBlobs = () => {
	return (
		<ShaderGradientCanvas
			importedFiber={{ ...fiber, ...drei, ...reactSpring }}
			style={{
				position: "absolute",
				top: 0,
			}}
		>
			<ShaderGradient
				control="query"
				urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=15.1&color1=%2373bfc4&color2=%23ff810a&color3=%238da0ce&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&positionX=-0.1&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=sphere&uAmplitude=3.2&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.3&uTime=0&wireframe=false&zoomOut=false"
			/>
		</ShaderGradientCanvas>
	);
};

export default BackgroundBlobs;
