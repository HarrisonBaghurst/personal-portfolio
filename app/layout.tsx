import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import ModalProvider from "@/context/ModalContext";

export const metadata: Metadata = {
	title: "Harrison Baghurst - Project Portfolio",
	description: "Your next Web Developer & Tutor",
};

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<head>
			<meta 
			name="viewport"
			content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no"
			/>
		</head>
		<body
		className={`antialiased scroll-smooth`}
		>
			<ModalProvider>
				<Navbar />
				{children}
				<ContactForm />
			</ModalProvider>
		</body>
		</html>
	);
}
