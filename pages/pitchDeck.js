import React from "react";
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

function pitchDeck() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Minty Solutions - Pitch Deck</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				{/* HEADER */}
				<Header title="Minty Deck" />
				<embed src="/mintyDeck.pdf" width="100%" height="2100px" />
				{/* PRE FOOTER */}
				<PreFooter />
			</main>

			<Footer />
		</div>
	);
}

export default pitchDeck;
