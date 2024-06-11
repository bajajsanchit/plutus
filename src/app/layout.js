import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Plutus",
	description:
		"Unlock the full potential of your credit cards with Plutus. Find the perfect card, maximize your rewards, and seize the best deals. Register now to get expert advice and updates on the latest offers!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
