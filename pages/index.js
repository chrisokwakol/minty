import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import headerStyles from "../styles/Header.module.css";
import styles from "../styles/Home.module.css";
import {
	faCircleCheck,
	faCircleXmark,
	faCaretSquareRight,
} from "@fortawesome/free-regular-svg-icons";
import {
	FaTwitter,
	FaInstagram,
	FaGlobeAmericas,
	FaRegCaretSquareRight,
	FaRegCheckCircle,
	FaRegTimesCircle,
} from "react-icons/fa";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { FcManager, FcSearch, FcPanorama } from "react-icons/fc";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Typewriter from "typewriter-effect";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import HamburgerMenu from "../components/HamburgerMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PreFooter from "../components/PreFooter";

export default function Home() {
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
		headerStyles.navLinks,
		`${navbarOpen ? headerStyles.navActive : ""}`,
	];

	return (
		<div className={styles.container}>
			<Head>
				<title>Minty Solutions - Home</title>
				<meta name="description" content="" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				{/* <Header title={title} /> */}
				{/* <Header title="We Enhance Social Media Management and Marketing" /> */}
				<header className={headerStyles.header}>
					{(darkTheme && (
						<Particles
							id={headerStyles["tsparticles"]}
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
							id={headerStyles["tsparticles"]}
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

					<nav className={headerStyles.nav}>
						<div onClick={burgerToggle}>
							<HamburgerMenu />
						</div>

						<ul className={navLinksClasses.join(" ")}>
							{/* Dark Mode Switch */}
							<div id={styles["darkModeSwitch"]}>
								{(darkTheme && (
									<BsFillSunFill
										style={{ color: "yellow", fontSize: "1.5rem" }}
									/>
								)) || (
									<BsFillSunFill
										style={{ color: "black", fontSize: "1.5rem" }}
									/>
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
									<BsFillMoonFill
										style={{ color: "yellow", fontSize: "1.5rem" }}
									/>
								)) || (
									<BsFillMoonFill
										style={{ color: "black", fontSize: "1.5rem" }}
									/>
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
						{/* <div className={styles.logo}> */}
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

						{/* </div> */}
						<button
							className={headerStyles.scheduleACallBtn}
							id={headerStyles["navBtn"]}>
							Schedule a Call
						</button>
					</nav>
					<div className={headerStyles.heroContent}>
						<h1>
							<span>We&nbsp;</span>
							<Typewriter
								options={{
									strings: ["Enhance", "Optimize", "Manage"],
									autoStart: true,
									loop: true,
								}}
							/>
							<span>Social&nbsp;</span>
							<span>Media&nbsp;</span>
							<span>Management&nbsp;</span>
							<span>and&nbsp;</span>
							<span>Marketing&nbsp;</span>
						</h1>
						<p>
							Welcome to Minty Solutions, the all-in-one digital marketing
							service personalised to your project
						</p>
						<div className={headerStyles.headerBtns}>
							<a href="https://mintyy.vercel.app/services">
								<button className={headerStyles.learnMoreBtn}>
									Learn More
								</button>
							</a>
							<button className={headerStyles.scheduleACallBtn}>
								Schedule a Call
							</button>
						</div>
					</div>
					{/* </div> */}
				</header>

				{/* METRICS */}
				<div className={styles.metricsSection}>
					<p className={styles.tagLine}>And were just getting started</p>
					<div className={styles.metrics}>
						<div className={styles.metricsCard}>
							<h2>INFLUENCER NETWORK</h2>
							<p>
								<CountUp end={60} redraw={true}>
									{({ countUpRef, start }) => (
										<VisibilitySensor onChange={start} delayedCall>
											<span ref={countUpRef} />
										</VisibilitySensor>
									)}
								</CountUp>
								M+ Followers
							</p>
						</div>

						<div className={styles.metricsCard}>
							<h2>PRESS RELEASES</h2>
							<p>
								<CountUp end={800} redraw={true}>
									{({ countUpRef, start }) => (
										<VisibilitySensor onChange={start} delayedCall>
											<span ref={countUpRef} />
										</VisibilitySensor>
									)}
								</CountUp>
								+
							</p>
						</div>

						<div className={styles.metricsCard}>
							<h2>TEAM MEMBERS</h2>
							<p>
								<CountUp end={40} redraw={true}>
									{({ countUpRef, start }) => (
										<VisibilitySensor onChange={start} delayedCall>
											<span ref={countUpRef} />
										</VisibilitySensor>
									)}
								</CountUp>
								+
							</p>
						</div>

						<div className={styles.metricsCard}>
							<h2>MINTING REVENUE </h2>
							<p>
								<CountUp start={0} end={1000000} separator="," redraw={true}>
									{({ countUpRef, start }) => (
										<VisibilitySensor onChange={start} delayedCall>
											<span ref={countUpRef} />
										</VisibilitySensor>
									)}
								</CountUp>
								+ $
							</p>
						</div>
					</div>
				</div>

				{/* PITCH DECK */}
				<div className={styles.pitchDeck}>
					<div className={styles.pitchDeckCard}>
						{/* <GrUserManager className={styles.pitchDeckIcon} /> */}
						<FcManager
							// icon={faBarsProgress}
							className={styles.pitchDeckIcon}
						/>{" "}
						<h2>Management</h2>
						<p>
							Our management teams will manage and grow all of your social media
							outlets, taking advantage of our vast network of influencers and
							platforms.
						</p>
					</div>

					<div className={styles.pitchDeckCard}>
						<FcPanorama className={styles.pitchDeckIcon} /> <h2>Design</h2>
						<p className={styles.designParagragh}>
							Our in-house designers are at your disposal for any graphics you
							need!
						</p>
					</div>

					<div className={styles.pitchDeckCard}>
						<FcSearch className={styles.pitchDeckIcon} />{" "}
						<h2>Ad &#38; Engine Search Engine Optimization</h2>
						<p className={styles.seoParagragh}>
							Our team of marketing experts will heavily optimize your website
							and maximize overall reach using carefully constructed budget and
							content-plans.
						</p>
					</div>
				</div>

				{/* SERVICES */}
				{/* Services section 1 */}
				<div className={styles.servicesOne}>
					<div style={{ padding: "25px" }}>
						<h1 className={styles.servicesOneTitle}>
							Grow Your Project
							<br /> with Minty Solutions
						</h1>
						<p
							style={{ opacity: "0.7", fontSize: ".875rem" }}
							id={styles["serivces-hook"]}>
							Tired of paying 50 different freelancers?
						</p>
						<div className={styles.aboutServices}>
							<div className={styles.aboutServicesOne}>
								<h4>Design</h4>
								<p>
									Our in-house designers and video editors are at your disposal
									for any graphical or video assets you need.
								</p>
								<div className={styles.servicesOneCTA}>
									<a href="">Take a look at a few examples</a>
									<FaRegCaretSquareRight
										className={styles.whyMintyCTAIcon}
									/>{" "}
								</div>
							</div>
							<div className={styles.aboutServicesTwo}>
								<h4>Management</h4>
								<p>
									Our management teams will manage and grow all of your social
									media outlets, taking advantage of our vast network of
									influencers and platforms.
								</p>
							</div>
						</div>
					</div>
					<div>
						<Image src="/images/01-min.png" width={574} height={402} alt={""} />
					</div>
				</div>

				{/* Services section 2 */}
				<div className={styles.servicesTwo}>
					<div className={styles.servicesTwoImage}>
						<Image src="/images/02-min.png" width={614} height={447} alt={""} />
					</div>
					<div className={styles.content}>
						<h1>
							Get Seen With Us.
							<br /> Get Tangible Results.
						</h1>
						<p className={styles.servicesTwoContent}>
							Our team operates on a basis of transparancy. Throughout the
							duration of the month, you will have access to our payment logs
							and see exactly where your money is going. Our team will prepare a
							condensed report of performance over the cycle; you will be able
							to see the results clear as day.
						</p>
						<div className={styles.aboutServices}>
							<div className={styles.aboutServicesTwo}>
								<h4>Ad &#38; Search Engine Optimization</h4>
								<p>
									Our team of SEO and Ad Optimization experts will ensure that
									your project gets the exposure it deserves.
								</p>
							</div>
							<div className={styles.aboutServicesTwo}>
								<h4>Web/Blockchain Development</h4>
								<p>
									Our in-house full-stack web developers, as well as
									web3/blockchain developers, deliver quick yet perfect results
									for any development needs (incl. writing smart contracts and
									auditing)
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* PRICING SECTION */}
				<div className={styles.pricingSection}>
					<h4>
						All Plans are{" "}
						<span className={styles.textBold}>Fully Customizable</span>
					</h4>
					<h2>OUR PRICING PLANS</h2>
				</div>
				{/* Pricing Cards */}
				<div className={styles.pricingCards}>
					{/* Basic */}
					<div className={styles.pricingCardsItem}>
						<div className={styles.packageType}>
							<h4>Basic</h4>
						</div>
						<h2>
							$1500<span className={styles.perMonth}>/month</span>
						</h2>
						<hr />
						<div className={styles.content}>
							<div>
								<FaRegCheckCircle
									icon={faCircleCheck}
									className={styles.pricingCardsIcon}
								/>{" "}
								<p>1 Discord Manager</p>
							</div>
							<div>
								<FaRegCheckCircle
									icon={faCircleCheck}
									className={styles.pricingCardsIcon}
								/>{" "}
								<p>2 Discord Moderators</p>
							</div>
							<div>
								<FaRegCheckCircle
									icon={faCircleCheck}
									className={styles.pricingCardsIcon}
								/>{" "}
								<p>1 Reddit Manager</p>
							</div>
							<div>
								<FaRegCheckCircle
									icon={faCircleCheck}
									className={styles.pricingCardsIcon}
								/>{" "}
								<p>1 Twitter Manager</p>
							</div>
							<div>
								<FaRegCheckCircle
									icon={faCircleCheck}
									className={styles.pricingCardsIcon}
								/>{" "}
								<p>1 Instagram Manager</p>
							</div>
							<div>
								<FaRegTimesCircle
									icon={faCircleXmark}
									className={styles.pricingCardsIcon}
									style={{ color: "#F43319" }}
								/>{" "}
								<p>3 Copy Writers</p>
							</div>
							<div>
								<FaRegTimesCircle
									icon={faCircleXmark}
									className={styles.pricingCardsIcon}
									style={{ color: "#F43319" }}
								/>{" "}
								<p>1 Graphic Designer</p>
							</div>
							<div>
								<FaRegTimesCircle
									icon={faCircleXmark}
									className={styles.pricingCardsIcon}
									style={{ color: "#F43319" }}
								/>{" "}
								<p>1 Influencer Networking Manager</p>
							</div>
							<div>
								<FaRegTimesCircle
									icon={faCircleXmark}
									className={styles.pricingCardsIcon}
									style={{ color: "#F43319" }}
								/>{" "}
								<p>1 Video Content Creator</p>
							</div>
							<div>
								<FaRegTimesCircle
									icon={faCircleXmark}
									className={styles.pricingCardsIcon}
									style={{ color: "#F43319" }}
								/>{" "}
								<p>1 PR Manager</p>
							</div>
							<div>
								<FaRegCheckCircle
									icon={faCircleXmark}
									className={styles.pricingCardsIcon}
									style={{ color: "#F43319" }}
								/>{" "}
								<p>1 Data Engineer</p>
							</div>
							<div>
								<FaRegTimesCircle
									icon={faCircleXmark}
									className={styles.pricingCardsIcon}
									style={{ color: "#F43319" }}
								/>{" "}
								<p>1 Full Stack Developer</p>
							</div>
							<div className={styles.pricingCardsBtnContainer}>
								<a href="https://mintyy.vercel.app/services">
									<button className={styles.pricingCardsBtn}>LEARN MORE</button>
								</a>
							</div>
						</div>
					</div>
					{/* Premium */}
					<div className={styles.pricingCardsItem}>
						<div className={styles.packageType}>
							<h4>Premium</h4>
						</div>
						<h2>
							$2000<span className={styles.perMonth}>/month</span>
						</h2>
						<hr />
						<div className={styles.content}>
							<div>
								<FaRegCheckCircle
									icon={faCircleCheck}
									className={styles.pricingCardsIcon}
									style={{ color: "#28B440", marginRight: "8px" }}
								/>{" "}
								<p>1 Discord Manager</p>
							</div>
							<div>
								<FaRegCheckCircle
									icon={faCircleCheck}
									className={styles.pricingCardsIcon}
									style={{ color: "#28B440", marginRight: "8px" }}
								/>{" "}
								<p>2 Discord Moderators</p>
							</div>
							<div>
								<FaRegCheckCircle
									icon={faCircleCheck}
									className={styles.pricingCardsIcon}
									style={{ color: "#28B440", marginRight: "8px" }}
								/>{" "}
								<p>1 Reddit Manager</p>
							</div>
							<div>
								<FaRegCheckCircle
									icon={faCircleCheck}
									className={styles.pricingCardsIcon}
									style={{ color: "#28B440", marginRight: "8px" }}
								/>{" "}
								<p>1 Twitter Manager</p>
							</div>
							<div>
								<FaRegCheckCircle
									icon={faCircleCheck}
									className={styles.pricingCardsIcon}
									style={{ color: "#28B440", marginRight: "8px" }}
								/>{" "}
								<p>1 Instagram Manager</p>
							</div>
							<div>
								<FaRegCheckCircle
									icon={faCircleCheck}
									className={styles.pricingCardsIcon}
									style={{ color: "#28B440", marginRight: "8px" }}
								/>{" "}
								<p>3 Copy Writers</p>
							</div>
							<div>
								<FaRegCheckCircle
									icon={faCircleCheck}
									className={styles.pricingCardsIcon}
									style={{ color: "#28B440", marginRight: "8px" }}
								/>{" "}
								<p>1 Graphic Designer</p>
							</div>
							<div>
								<FaRegCheckCircle
									icon={faCircleCheck}
									className={styles.pricingCardsIcon}
									style={{ color: "#28B440", marginRight: "8px" }}
								/>{" "}
								<p>1 Influencer Networking Manager</p>
							</div>
							<div>
								<FaRegTimesCircle
									icon={faCircleXmark}
									className={styles.pricingCardsIcon}
									style={{ color: "#F43319", marginRight: "8px" }}
								/>{" "}
								<p>1 Video Content Creator</p>
							</div>
							<div>
								<FaRegTimesCircle
									icon={faCircleXmark}
									className={styles.pricingCardsIcon}
									style={{ color: "#F43319", marginRight: "8px" }}
								/>{" "}
								<p>1 PR Manager</p>
							</div>
							<div>
								<FaRegTimesCircle
									icon={faCircleXmark}
									className={styles.pricingCardsIcon}
									style={{ color: "#F43319", marginRight: "8px" }}
								/>{" "}
								<p>1 Data Engineer</p>
							</div>
							<div>
								<FaRegTimesCircle
									icon={faCircleXmark}
									className={styles.pricingCardsIcon}
									style={{ color: "#F43319", marginRight: "8px" }}
								/>{" "}
								<p>1 Full Stack Developer</p>
							</div>
							<div className={styles.pricingCardsBtnContainer}>
								<a href="https://mintyy.vercel.app/services">
									<button className={styles.pricingCardsBtn}>LEARN MORE</button>
								</a>
							</div>
						</div>
					</div>
					{/* Ultimate */}
					<div className={styles.pricingCardsItem}>
						{/* ULtimate */}
						<div className={styles.packageType}>
							<h4>Ultimate</h4>
						</div>
						<h2>
							$3000<span className={styles.perMonth}>/month</span>
						</h2>
						<hr />
						<div className={styles.content}>
							<div>
								<FaRegCheckCircle
									icon={faCircleCheck}
									className={styles.pricingCardsIcon}
									style={{ color: "#28B440", marginRight: "8px" }}
								/>{" "}
								<p>1 Discord Manager</p>
							</div>
							<div>
								<FaRegCheckCircle
									icon={faCircleCheck}
									className={styles.pricingCardsIcon}
									style={{ color: "#28B440", marginRight: "8px" }}
								/>{" "}
								<p>2 Discord Moderators</p>
							</div>
							<div>
								<FaRegCheckCircle
									icon={faCircleCheck}
									className={styles.pricingCardsIcon}
									style={{ color: "#28B440", marginRight: "8px" }}
								/>{" "}
								<p>1 Reddit Manager</p>
							</div>
							<div>
								<FaRegCheckCircle
									icon={faCircleCheck}
									className={styles.pricingCardsIcon}
									style={{ color: "#28B440", marginRight: "8px" }}
								/>{" "}
								<p>1 Twitter Manager</p>
							</div>
							<div>
								<FaRegCheckCircle
									icon={faCircleCheck}
									className={styles.pricingCardsIcon}
									style={{ color: "#28B440", marginRight: "8px" }}
								/>{" "}
								<p>1 Instagram Manager</p>
							</div>
							<div>
								<FaRegCheckCircle
									icon={faCircleCheck}
									className={styles.pricingCardsIcon}
									style={{ color: "#28B440", marginRight: "8px" }}
								/>{" "}
								<p>3 Copy Writers</p>
							</div>
							<div>
								<FaRegCheckCircle
									icon={faCircleCheck}
									className={styles.pricingCardsIcon}
									style={{ color: "#28B440", marginRight: "8px" }}
								/>{" "}
								<p>1 Graphic Designer</p>
							</div>
							<div>
								<FaRegCheckCircle
									icon={faCircleCheck}
									className={styles.pricingCardsIcon}
									style={{ color: "#28B440", marginRight: "8px" }}
								/>{" "}
								<p>1 Influencer Networking Manager</p>
							</div>
							<div>
								<FaRegCheckCircle
									icon={faCircleCheck}
									className={styles.pricingCardsIcon}
									style={{ color: "#28B440", marginRight: "8px" }}
								/>{" "}
								<p>1 Video Content Creator</p>
							</div>
							<div>
								<FaRegCheckCircle
									icon={faCircleCheck}
									className={styles.pricingCardsIcon}
									style={{ color: "#28B440", marginRight: "8px" }}
								/>{" "}
								<p>1 PR Manager</p>
							</div>
							<div>
								<FaRegCheckCircle
									icon={faCircleCheck}
									className={styles.pricingCardsIcon}
									style={{ color: "#28B440", marginRight: "8px" }}
								/>{" "}
								<p>1 Data Engineer</p>
							</div>
							<div>
								<FaRegCheckCircle
									icon={faCircleCheck}
									className={styles.pricingCardsIcon}
									style={{ color: "#28B440", marginRight: "8px" }}
								/>{" "}
								<p>1 Full Stack Developer</p>
							</div>
							<div className={styles.pricingCardsBtnContainer}>
								<a href="https://mintyy.vercel.app/services">
									<button className={styles.pricingCardsBtn}>LEARN MORE</button>
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* WHY CHOOSE MINTY */}
				<div className={styles.whyMinty}>
					<div className={styles.content}>
						<h1>Why Choose Minty</h1>
						<p className={styles.whyMintySubHeading}>
							Work With a Dedicated Agency
						</p>
						<a
							href="https://mintyy.vercel.app/casestudies"
							className={styles.whyMintyCTA}>
							See a Comparison between Minty and Other Firms{" "}
							<FaRegCaretSquareRight
								icon={faCaretSquareRight}
								className={styles.whyMintyCTAIcon}
							/>{" "}
						</a>
						<p>
							Minty Marketing Solutions LTD. is a{" "}
							<span className={styles.textBold}>registered</span> company in the
							UK.{" "}
						</p>
						<p>
							You will personally be assigned a full team of up to 15 dedicated
							employees at your disposal. We do not take a percentage of mint.
							We do not take a percentage of your campaign budget. There are
							zero hidden costs. What you see is exactly what you pay.
						</p>
					</div>
					<div>
						<Image src="/images/03-min.png" width={450} height={402} alt={""} />
					</div>
				</div>

				{/* TESTIMONIALS */}
				<div className={styles.testimonials}>
					<h1>What Our Clients Have to Say</h1>
					<div className={styles.testimonialCards}>
						<div className={styles.testimonialCardItem}>
							<Image src="/images/Vending.png" alt="" width={60} height={60} />
							<h4>Aza</h4>
							<div>
								<p className={styles.clientTitle}>
									Founder | Vending Machines NFT
								</p>
								<div>
									<a
										href="https://instagram.com"
										className={styles.clientSocials}>
										<FaInstagram />
									</a>{" "}
									<a
										href="https://twitter.com"
										className={styles.clientSocials}>
										<FaTwitter />
									</a>{" "}
									<a
										href="https://mintysolutions.com"
										className={styles.clientSocials}>
										<FaGlobeAmericas />
									</a>{" "}
									<p className={styles.clientReview}>
										We have been very happy with Minty Solutions since we
										started together. Their social media marketing work is
										really incredible. Continuous scavenger hunt or poker games
										keep our community engaged. Their promo video and graphics
										team is just amazing! Would highly recommend this very
										dedicated team to handle all your marketing needs.
									</p>
								</div>
							</div>
						</div>

						<div className={styles.testimonialCardItem}>
							<Image
								src="/images/Puzzle_NFT.png"
								alt=""
								width={60}
								height={60}
							/>
							<h4>Donbash</h4>
							<div>
								<p className={styles.clientTitle}>Founder | Puzzle Prize NFT</p>
								<div>
									<a
										href="https://instagram.com"
										className={styles.clientSocials}>
										<FaInstagram />
									</a>{" "}
									<a
										href="https://twitter.com"
										className={styles.clientSocials}>
										<FaTwitter />
									</a>{" "}
									<a
										href="https://mintysolutions.com"
										className={styles.clientSocials}>
										<FaGlobeAmericas />
									</a>{" "}
									<p className={styles.clientReview}>
										Minty really helped us get our collabs going! They have an
										expansive network of projects that allows them to bring
										collabs everyday. On top of that, their Twitter management
										and content creation was amazing. Communication was really
										there throughout the whole process and they were very
										transparent.
									</p>
								</div>
							</div>
						</div>
						<div className={styles.testimonialCardItem}>
							<Image src="/images/Vending.png" alt="" width={60} height={60} />
							<h4>Aza</h4>
							<div>
								<p className={styles.clientTitle}>
									Founder | Vending Machines NFT
								</p>
								<div>
									<a
										href="https://instagram.com"
										className={styles.clientSocials}>
										<FaInstagram />
									</a>{" "}
									<a
										href="https://twitter.com"
										className={styles.clientSocials}>
										<FaTwitter />
									</a>{" "}
									<a
										href="https://mintysolutions.com"
										className={styles.clientSocials}>
										<FaGlobeAmericas />
									</a>{" "}
									<p className={styles.clientReview}>
										We have been very happy with Minty Solutions since we
										started together. Their social media marketing work is
										really incredible. Continuous scavenger hunt or poker games
										keep our community engaged. Their promo video and graphics
										team is just amazing! Would highly recommend this very
										dedicated team to handle all your marketing needs.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* PRE FOOTER */}
				<PreFooter />
			</main>

			<Footer />
		</div>
	);
}
