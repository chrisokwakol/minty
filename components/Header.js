import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { GoRocket } from "react-icons/go";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Squash as Hamburger, Squash } from "hamburger-react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import HamburgerMenu from "./HamburgerMenu";

const Header = (props) => {
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

	// Particles Backgrounds
	const particlesInit = async (main) => {
		console.log(main);

		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(main);
	};

	const particlesLoaded = (container) => {
		console.log(container);
	};

	// Mobile Nav Bar State
	const [navbarOpen, setNavbarOpen] = useState(false);
	const burgerToggle = () => {
		setNavbarOpen((prev) => !prev);
	};

	// Mobile Nav Bar Classes
	const navLinksClasses = [
		styles.navLinks,
		`${navbarOpen ? styles.navActive : ""}`,
	];
	return (
		<header className={styles.header}>
			{(darkTheme && (
				<Particles
					id={styles["tsparticles"]}
					init={particlesInit}
					loaded={particlesLoaded}
					options={{
						background: {
							color: {
								value: "#161616",
							},
						},
						fpsLimit: 120,
						interactivity: {
							events: {
								onClick: {
									enable: true,
									mode: "push",
								},
								onHover: {
									enable: true,
									mode: "grab",
								},
								resize: true,
							},
							modes: {
								push: {
									quantity: 4,
								},
								repulse: {
									distance: 200,
									duration: 0.4,
								},
							},
						},
						particles: {
							color: {
								value: "#fff",
							},
							links: {
								color: "#fff",
								distance: 150,
								enable: true,
								opacity: 0.5,
								width: 1,
							},
							collisions: {
								enable: true,
							},
							move: {
								direction: "none",
								enable: true,
								outModes: {
									default: "bounce",
								},
								random: false,
								speed: 1,
								straight: false,
							},
							number: {
								density: {
									enable: true,
									area: 800,
								},
								value: 80,
							},
							opacity: {
								value: 0.5,
							},
							shape: {
								type: "circle",
							},
							size: {
								value: { min: 1, max: 5 },
							},
						},
						detectRetina: true,
						fullScreen: {
							enable: false,
							zIndex: 0,
						},
					}}
				/>
			)) || (
				<Particles
					id={styles["tsparticles"]}
					init={particlesInit}
					loaded={particlesLoaded}
					options={{
						background: {
							color: {
								value: "#EEF6FE",
							},
						},
						fpsLimit: 120,
						interactivity: {
							events: {
								onClick: {
									enable: true,
									mode: "push",
								},
								onHover: {
									enable: true,
									mode: "grab",
								},
								resize: true,
							},
							modes: {
								push: {
									quantity: 4,
								},
								repulse: {
									distance: 200,
									duration: 0.4,
								},
							},
						},
						particles: {
							color: {
								value: "#A41623",
							},
							links: {
								color: "#918450",
								distance: 150,
								enable: true,
								opacity: 0.5,
								width: 1,
							},
							collisions: {
								enable: true,
							},
							move: {
								direction: "none",
								enable: true,
								outModes: {
									default: "bounce",
								},
								random: false,
								speed: 1,
								straight: false,
							},
							number: {
								density: {
									enable: true,
									area: 800,
								},
								value: 80,
							},
							opacity: {
								value: 0.5,
							},
							shape: {
								type: "circle",
							},
							size: {
								value: { min: 1, max: 5 },
							},
						},
						detectRetina: true,
						fullScreen: {
							enable: false,
							zIndex: 0,
						},
					}}
				/>
			)}

			<nav className={styles.nav}>
				<div onClick={burgerToggle}>
					<HamburgerMenu />
				</div>

				<ul className={navLinksClasses.join(" ")}>
					{/* Dark Mode Switch */}
					<div id={styles["darkModeSwitch"]}>
						{(darkTheme && (
							<BsFillSunFill style={{ color: "yellow", fontSize: "1.5rem" }} />
						)) || (
							<BsFillSunFill style={{ color: "black", fontSize: "1.5rem" }} />
						)}
						<li>
							{darkTheme !== undefined && (
								<form action="#">
									<label className="switch">
										<input
											type="checkbox"
											checked={darkTheme}
											onChange={handleToggle}
										/>
										<span className="slider"></span>
									</label>
								</form>
							)}
						</li>
						{(darkTheme && (
							<BsFillMoonFill style={{ color: "yellow", fontSize: "1.5rem" }} />
						)) || (
							<BsFillMoonFill style={{ color: "black", fontSize: "1.5rem" }} />
						)}{" "}
					</div>

					{/* End Dark Mode Switch */}
					<li>
						<a href="https://mintyy.vercel.app/">Home</a>
					</li>
					<li>
						<a href="https://mintyy.vercel.app/services">Services</a>
					</li>
					<li>
						<a href="https://mintyy.vercel.app/casestudies">Case Studies</a>
					</li>
					<li>
						<a href="https://mintyy.vercel.app/contact">Contact</a>
					</li>
				</ul>
				{(darkTheme && (
					<Image
						src="/images/logo/logo-light.png"
						alt=""
						width={170}
						height={70}
						// layout="fill"
						objectFit="cover"
					/>
				)) || (
					<Image
						src="/images/logo/logo-black.png"
						alt=""
						width={170}
						height={70}
						// layout="fill"
						objectFit="cover"
					/>
				)}
				<button className={styles.scheduleACallBtn} id={styles["navBtn"]}>
					Schedule a Call
				</button>
			</nav>
			{/* <div className={styles.heroContentContainer}> */}
			<div className={styles.heroContent}>
				<h1>{props.title}</h1>
				{/* <h1>We Enhance Social Media Management and Marketing</h1> */}
				<p>
					Welcome to Minty Solutions , the all-in-one digital marketing service
					personalised to your project
				</p>
				<div className={styles.headerBtns}>
					<a href="https://mintysolutions.vercel.app/services">
						<button className={styles.learnMoreBtn}>Learn More</button>
					</a>
					<button className={styles.scheduleACallBtn}>Schedule a Call</button>
				</div>
			</div>
			{/* </div> */}
		</header>
	);
};

export default Header;
