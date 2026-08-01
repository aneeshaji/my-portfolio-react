import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import ScrollAnimation from "react-animate-on-scroll";

const expertise = [
	{
		index: "01",
		title: "Software Development",
		description:
			"I collaborate with teams to design, build, and deploy cross-platform software solutions, focusing on clean architecture and reliable performance.",
		tech: ["JavaScript", "TypeScript", "Git", "CI/CD", "Agile"],
	},
	{
		index: "02",
		title: "Full Stack Development",
		description:
			"I enjoy building complete web applications from scratch — creating responsive user interfaces and developing robust backend systems to bring ideas to life in the browser.",
		tech: ["React", "Angular", "Node.js", "PHP", "MySQL"],
	},
	{
		index: "03",
		title: "Cloud Infra-Architecture",
		description:
			"I manage hosting and deployment of websites and applications on cloud platforms, configure virtual machines, and integrate scalable databases to ensure smooth performance.",
		tech: ["Cloud Hosting", "Linux VMs", "Nginx", "Databases", "Deployment"],
	},
];

function FolderIcon() {
	return (
		<svg
			width="50"
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			viewBox="0 0 24 24"
			fill="none"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<title>Folder</title>
			<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
		</svg>
	);
}

export function Project() {
	return (
		<Container id="expertise">
			<div className="section-head">
				<ScrollAnimation animateIn="fadeInUp">
					<span className="eyebrow">02 · Expertise</span>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
					<h2>What I do</h2>
				</ScrollAnimation>
			</div>

			<div className="projects">
				{expertise.map((card) => (
					<ScrollAnimation animateIn="flipInX" key={card.index}>
						<div className="project">
							<span className="index">{card.index}</span>
							<header>
								<div className="icon-chip">
									<FolderIcon />
								</div>
								<a
									href="https://github.com/aneeshaji"
									target="_blank"
									rel="noreferrer"
									aria-label="Open GitHub profile"
								>
									<img src={githubIcon} alt="GitHub" />
								</a>
							</header>
							<div className="body">
								<h3>{card.title}</h3>
								<p>{card.description}</p>
							</div>
							<footer>
								<ul className="tech-list">
									{card.tech.map((tech) => (
										<li key={tech}>{tech}</li>
									))}
								</ul>
							</footer>
						</div>
					</ScrollAnimation>
				))}
			</div>
		</Container>
	);
}
