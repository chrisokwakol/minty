import React, { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/CaseStudies.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBarsProgress,
	faBezierCurve,
	faSearchDollar,
	faRocket,
} from "@fortawesome/free-solid-svg-icons";
import {
	faCircleCheck,
	faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import Header from "../components/Header";
import PreFooter from "../components/PreFooter";
import Footer from "../components/Footer";

function Contact() {
	// Dark Theme
	const [darkTheme, setDarkTheme] = useState(undefined);

	const handleToggle = (event) => {
		setDarkTheme(event.target.checked);
	};

	useEffect(() => {
		if (darkTheme !== undefined) {
			if (darkTheme) {
				// Set value of  darkmode to dark
				document.documentElement.setAttribute("data-theme", "dark");
				window.localStorage.setItem("theme", "dark");
			} else {
				// Set value of  darkmode to light
				document.documentElement.removeAttribute("data-theme");
				window.localStorage.setItem("theme", "light");
			}
		}
	}, [darkTheme]);

	useEffect(() => {
		const root = window.document.documentElement;
		const initialColorValue = root.style.getPropertyValue(
			"--initial-color-mode"
		);
		// Set initial darkmode to light
		setDarkTheme(initialColorValue === "dark");
	}, []);
	
	return (
		<div className={styles.container}>
			<Head>
				<title>Minty Solutions - Case Studies</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				{/* HEADER */}
				<Header title="Contact Us" />
				{(darkTheme && (
					<InlineWidget
						url="https://calendly.com/mintysolutions/15min"
						pageSettings={{
							backgroundColor: "0d0d0d",
							hideEventTypeDetails: false,
							hideLandingPageDetails: false,
							primaryColor: "1973f5",
							textColor: "4d5055",
						}}
					/>
				)) || (
					<InlineWidget
						url="https://calendly.com/mintysolutions/15min"
						pageSettings={{
							backgroundColor: "ffffff",
							hideEventTypeDetails: false,
							hideLandingPageDetails: false,
							primaryColor: "00a2ff",
							textColor: "4d5055",
						}}
					/>
				)}

				{/* PRE FOOTER */}
				<PreFooter />
			</main>

			<Footer />
		</div>
	);
}

export default Contact;
