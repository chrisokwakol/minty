import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/CaseStudies.module.css";
import { faTShirt } from "@fortawesome/free-solid-svg-icons";
import {
	faBell,
	faCircleCheck,
	faCheckSquare,
	faRectangleXmark,
} from "@fortawesome/free-regular-svg-icons";
import { GiVendingMachine } from 'react-icons/gi';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter, FaRegCheckSquare, FaRegCheckCircle, FaRegWindowClose } from 'react-icons/fa';
import { FaGlobeAmericas } from 'react-icons/fa';
import { BsPuzzle, BsCheckSquare } from 'react-icons/bs';
import { GoRocket } from 'react-icons/go';
import Header from "../components/Header";
import PreFooter from "../components/PreFooter";
import Footer from "../components/Footer";

function CaseStudies() {
	const greenCheckIcons = [styles.icon, styles.greenCheckIcons];
	const redXIcons = [styles.icon, styles.redXIcons];
	return (
		<div className={styles.container}>
			<Head>
				<title>Minty Solutions - Case Studies</title>
				<meta name="description" content="" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				{/* HEADER */}
				<Header title="Case Studies" />
				<div className={styles.caseStudiesTitle}>
					<p>Our Projects</p>
					<h1>A Few Case Studies</h1>
				</div>

				<div className={styles.caseStudiesCards}>
					<div className={styles.caseStudiesCardItem}>
						<div className={styles.caseStudiesCardItemOneTop}>
							<GiVendingMachine />
							<button>Sold Out</button>
						</div>
						<h4>Vending Machine <br/> NFT</h4>
						<div className={styles.socialIcons}>
							<FaTwitter className={styles.socialIcon} />{" "}
							<FaInstagram className={styles.socialIcon} />{" "}
							<FaGlobeAmericas className={styles.socialIcon} />{" "}
						</div>
						<p className={styles.achievements}>Achievements</p>
						<div>
							<p>
								<FaRegCheckCircle /> 106.1% Growth in Tweet 
								Impressions
							</p>
							<p>
							<FaRegCheckCircle /> 31.2% Growth in Profile
								Visits
							</p>
							<p>
							<FaRegCheckCircle /> 47.3% Growth in
								Mentions
							</p>
							<p>
							<FaRegCheckCircle /> 25.6% Growth in
								Followers
							</p>
						</div>
					</div>

					<div className={styles.caseStudiesCardItem}>
						<div className={styles.caseStudiesCardItemTwoTop}>
							<BsPuzzle />
							<button>Minting Soon</button>
						</div>
						<h4>Puzzle Prize<br/> NFT</h4>
						<div className={styles.socialIcons}>
							<FaTwitter className={styles.socialIcon} />{" "}
							<FaInstagram className={styles.socialIcon} />{" "}
							<FaGlobeAmericas className={styles.socialIcon} />{" "}
						</div>
						<p className={styles.achievements}>Achievements</p>
						<div>
							<p>
								<FaRegCheckCircle /> 106.1% Growth in Tweet
								Impressions
							</p>
							<p>
								<FaRegCheckCircle /> 31.2% Growth in Profile
								Visits
							</p>
							<p>
								<FaRegCheckCircle /> 47.3% Growth in
								Mentions
							</p>
							<p>
								<FaRegCheckCircle /> 25.6% Growth in
								Followers
							</p>
						</div>
					</div>

					<div className={styles.caseStudiesCardItem}>
						<div className={styles.caseStudiesCardItemThreeTop}>
							<GoRocket />
							<button>Minting Soon</button>
						</div>
						<h4>
							Space Dudes <br />
							NFT
						</h4>
						<div className={styles.socialIcons}>
							<FaTwitter className={styles.socialIcon} />{" "}
							<FaInstagram className={styles.socialIcon} />{" "}
							<FaGlobeAmericas className={styles.socialIcon} />{" "}
						</div>
						<p className={styles.achievements}>Achievements</p>
						<div>
							<p>
								<FaRegCheckCircle /> 25% Growth in Tweet
								Impressions
							</p>
							<p>
								<FaRegCheckCircle /> 16.8% Growth in Profile
								Visits
							</p>
							<p>
								<FaRegCheckCircle /> 11.8% Growth in
								Mentions
							</p>
							<p>
								<FaRegCheckCircle /> 21% Growth in Followers
							</p>
						</div>
					</div>
				</div>
				
				<div className={styles.title}>
					<p>Comparison as of April 2022</p>
					<h1>
						How Minty Compares to <br />
						Other Marketing Agencies
					</h1>
				</div>
				{/* TABLE */}
				<div className={styles.tableContainer}>
					<table className={styles.mintyComparisonTable}>
						<tr className={styles.tableHead}>
							<th>SERVICES</th>
							<th>Minty Solutions</th>
							<th>Benco Services</th>
							<th>NinjaPromo</th>
							<th>CrowdCreate</th>
						</tr>
						<tr className={styles.tableInfo}>
							<td>Instagram Management Team</td>
							<td>
								<FaRegCheckSquare icon={faCheckSquare} className={styles.icon} />
							</td>
							<td>
								<FaRegCheckSquare
									icon={faCheckSquare}
									className={greenCheckIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegCheckSquare
									icon={faCheckSquare}
									className={greenCheckIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegCheckSquare
									icon={faCheckSquare}
									className={greenCheckIcons.join(" ")}
								/>
							</td>
						</tr>
						<tr className={styles.tableInfo}>
							<td>Graphic Design Team</td>
							<td>
								<FaRegCheckSquare icon={faCheckSquare} className={styles.icon} />
							</td>
							<td>
								<FaRegCheckSquare
									icon={faCheckSquare}
									className={greenCheckIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegCheckSquare
									icon={faCheckSquare}
									className={greenCheckIcons.join(" ")}
								/>
							</td>
							<td>
								{/* <FaRegWindowClose className={redXIcons.join(" ")} />{" "} */}
								<FaRegWindowClose
									icon={faRectangleXmark}
									className={redXIcons.join(" ")}
								/>
							</td>
						</tr>
						<tr className={styles.tableInfo}>
							<td>Twitter Management Team</td>
							<td>
								<FaRegCheckSquare icon={faCheckSquare} className={styles.icon} />
							</td>
							<td>
								<FaRegCheckSquare
									icon={faCheckSquare}
									className={greenCheckIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegWindowClose
									icon={faRectangleXmark}
									className={redXIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegCheckSquare
									icon={faCheckSquare}
									className={greenCheckIcons.join(" ")}
								/>
							</td>
						</tr>
						<tr className={styles.tableInfo}>
							<td>Reddit Management Team</td>
							<td>
								<FaRegCheckSquare icon={faCheckSquare} className={styles.icon} />
							</td>
							<td>
								<FaRegCheckSquare
									icon={faCheckSquare}
									className={greenCheckIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegWindowClose
									icon={faRectangleXmark}
									className={redXIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegWindowClose
									icon={faRectangleXmark}
									className={redXIcons.join(" ")}
								/>
							</td>
						</tr>
						<tr className={styles.tableInfo}>
							<td>Event Management Team</td>
							<td>
								<FaRegCheckSquare icon={faCheckSquare} className={styles.icon} />
							</td>
							<td>
								<FaRegCheckSquare
									icon={faCheckSquare}
									className={greenCheckIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegWindowClose
									icon={faRectangleXmark}
									className={redXIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegCheckSquare
									icon={faCheckSquare}
									className={greenCheckIcons.join(" ")}
								/>
							</td>
						</tr>
						<tr className={styles.tableInfo}>
							<td>Discord Managers</td>
							<td>
								<FaRegCheckSquare icon={faCheckSquare} className={styles.icon} />
							</td>
							<td>
								<FaRegCheckSquare
									icon={faCheckSquare}
									className={greenCheckIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegWindowClose
									icon={faRectangleXmark}
									className={redXIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegWindowClose
									icon={faRectangleXmark}
									className={redXIcons.join(" ")}
								/>
							</td>
						</tr>
						<tr className={styles.tableInfo}>
							<td>Discord Moderators</td>
							<td>
								<FaRegCheckSquare icon={faCheckSquare} className={styles.icon} />
							</td>
							<td>
								<FaRegCheckSquare
									icon={faCheckSquare}
									className={greenCheckIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegWindowClose
									icon={faRectangleXmark}
									className={redXIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegWindowClose
									icon={faRectangleXmark}
									className={redXIcons.join(" ")}
								/>
							</td>
						</tr>
						<tr className={styles.tableInfo}>
							<td>Copy Writers</td>
							<td>
								<FaRegCheckSquare icon={faCheckSquare} className={styles.icon} />
							</td>
							<td>
								<FaRegWindowClose
									icon={faRectangleXmark}
									className={redXIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegCheckSquare
									icon={faCheckSquare}
									className={greenCheckIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegCheckSquare
									icon={faCheckSquare}
									className={greenCheckIcons.join(" ")}
								/>
							</td>
						</tr>
						<tr className={styles.tableInfo}>
							<td>Video Content Team</td>
							<td>
								<FaRegCheckSquare icon={faCheckSquare} className={styles.icon} />
							</td>
							<td>
								<FaRegWindowClose
									icon={faRectangleXmark}
									className={redXIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegCheckSquare
									icon={faCheckSquare}
									className={greenCheckIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegWindowClose
									icon={faRectangleXmark}
									className={redXIcons.join(" ")}
								/>
							</td>
						</tr>
						<tr className={styles.tableInfo}>
							<td>Influencer Networking Managers</td>
							<td>
								<FaRegCheckSquare icon={faCheckSquare} className={styles.icon} />
							</td>
							<td>
								<FaRegWindowClose
									icon={faRectangleXmark}
									className={redXIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegWindowClose
									icon={faRectangleXmark}
									className={redXIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegCheckSquare
									icon={faCheckSquare}
									className={greenCheckIcons.join(" ")}
								/>
							</td>
						</tr>
						<tr className={styles.tableInfo}>
							<td>PR Managers and Press Releases</td>
							<td>
								<FaRegCheckSquare icon={faCheckSquare} className={styles.icon} />
							</td>
							<td>
								<FaRegWindowClose
									icon={faRectangleXmark}
									className={redXIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegWindowClose
									icon={faRectangleXmark}
									className={redXIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegCheckSquare
									icon={faCheckSquare}
									className={greenCheckIcons.join(" ")}
								/>
							</td>
						</tr>
						<tr className={styles.tableInfo}>
							<td>Data Engineers</td>
							<td>
								<FaRegCheckSquare icon={faCheckSquare} className={styles.icon} />
							</td>
							<td>
								<FaRegWindowClose
									icon={faRectangleXmark}
									className={redXIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegWindowClose
									icon={faRectangleXmark}
									className={redXIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegWindowClose
									icon={faRectangleXmark}
									className={redXIcons.join(" ")}
								/>
							</td>
						</tr>
						<tr className={styles.tableInfo}>
							<td>Full Stack Web Developers</td>
							<td>
								<FaRegCheckSquare icon={faCheckSquare} className={styles.icon} />
							</td>
							<td>
								<FaRegWindowClose
									icon={faRectangleXmark}
									className={redXIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegWindowClose
									icon={faRectangleXmark}
									className={redXIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegWindowClose
									icon={faRectangleXmark}
									className={redXIcons.join(" ")}
								/>
							</td>
						</tr>
						<tr className={styles.tableInfo}>
							<td>Full Stack Web3/Blockchain Developers</td>
							<td>
								<FaRegCheckSquare icon={faCheckSquare} className={styles.icon} />
							</td>
							<td>
								<FaRegWindowClose
									icon={faRectangleXmark}
									className={redXIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegWindowClose
									icon={faRectangleXmark}
									className={redXIcons.join(" ")}
								/>
							</td>
							<td>
								<FaRegWindowClose
									icon={faRectangleXmark}
									className={redXIcons.join(" ")}
								/>
							</td>
						</tr>
					</table>
				</div>

				{/* END TABLE */}
				

				{/* PRE FOOTER */}
				<PreFooter />
			</main>

			<Footer />
		</div>
	);
}

export default CaseStudies;
