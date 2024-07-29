"use client";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const Globe = () => {
	const canvasRef = useRef(null);
	const focusRef = useRef([0, 0]);

	const locationToAngles = (lat, long) => {
		return [
			Math.PI - ((long * Math.PI) / 180 - Math.PI / 2),
			(lat * Math.PI) / 180,
		];
	};

	useEffect(() => {
		let width = 0;
		let currentPhi = 0;
		let currentTheta = 0;

		const onResize = () => {
			if (canvasRef.current) {
				width = canvasRef.current.offsetWidth;
			}
		};

		window.addEventListener("resize", onResize);
		onResize();

		const globe = createGlobe(canvasRef.current, {
			devicePixelRatio: 2,
			width: width * 2,
			height: width * 2,
			phi: 0,
			theta: 0.3,
			dark: 0,
			// diffuse: 3,
			// mapSamples: 16000,
			// mapBrightness: 1.2,
			// baseColor: [1, 1, 1],
			// markerColor: [251 / 255, 200 / 255, 21 / 255],
			// glowColor: [1.2, 1.2, 1.2],
			// dark: 0,
			diffuse: 0.5,
			mapSamples: 18000,
			mapBrightness: 1.5,
			baseColor: [1, 1, 1],
			markerColor: [251 / 255, 100 / 255, 21 / 255],
			glowColor: [1, 1, 1],
			markers: [
				{ location: [14.5995, 120.9842], size: 0.03 },
				{ location: [19.076, 72.8777], size: 0.1 },
				{ location: [23.8103, 90.4125], size: 0.05 },
				{ location: [30.0444, 31.2357], size: 0.07 },
				{ location: [39.9042, 116.4074], size: 0.08 },
				{ location: [-23.5505, -46.6333], size: 0.1 },
				{ location: [19.4326, -99.1332], size: 0.1 },
				{ location: [40.7128, -74.006], size: 0.1 },
				{ location: [34.6937, 135.5022], size: 0.05 },
				{ location: [41.0082, 28.9784], size: 0.06 },
			],
			onRender: (state) => {
				state.phi = currentPhi;
				state.theta = currentTheta;

				// Add auto-rotation
				currentPhi += 0.0098; // Adjust the rotation speed as needed

				const [focusPhi, focusTheta] = focusRef.current;

				currentTheta = currentTheta * 1 + focusTheta * 0.08;
			},
		});

		setTimeout(() => {
			if (canvasRef.current) {
				canvasRef.current.style.opacity = "1";
			}
		}, 500);

		return () => {
			globe.destroy();
			window.removeEventListener("resize", onResize);
		};
	}, []);

	return (
		<div className={styles.container}>
			<canvas ref={canvasRef} className={styles.canvas} />
			{/* <div className={styles.controlButtons}>
				Rotate to:
				<button
					onClick={() => {
						focusRef.current = locationToAngles(37.78, -122.412);
					}}
				>
					📍 San Francisco
				</button>
				<button
					onClick={() => {
						focusRef.current = locationToAngles(52.52, 13.405);
					}}
				>
					📍 Berlin
				</button>
				<button
					onClick={() => {
						focusRef.current = locationToAngles(35.676, 139.65);
					}}
				>
					📍 Tokyo
				</button>
				<button
					onClick={() => {
						focusRef.current = locationToAngles(-34.6, -58.38);
					}}
				>
					📍 Buenos Aires
				</button>
			</div> */}
		</div>
	);
};

export default Globe;
