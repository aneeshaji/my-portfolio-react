import { useState } from "react";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

const projects = [
	{
		name: "ATSense",
		description:
			"AI resume optimizer and free ATS checker that helps job seekers get hired faster.",
		tech: ["React", "GPT-4", "Node.js"],
		url: "https://atsense.online/",
		image: "/Images/atsense.png",
	},
	{
		name: "FramezLabs",
		description:
			"Online store for custom photo frames and personalized gifts, delivering across India.",
		tech: ["E-commerce", "Payments", "Inventory"],
		url: "https://framezlabs.store/",
		image: "/Images/framezlabs.png",
	},
	{
		name: "TechnoByte Innovations",
		description:
			"Software company delivering web, mobile, cloud, and AI/ML services.",
		tech: ["Web", "Mobile", "Cloud", "AI/ML"],
		url: "https://technobyteinnovations.in/",
		image: "/Images/technobyte.png",
	},
	{
		name: "FramezLabs ERP",
		description:
			"Business management platform powering orders, inventory, and operations.",
		tech: ["ERP", "Orders", "Inventory"],
		url: "https://erp.framezlabs.store/",
		image: "/Images/framezlabs-erp.png",
	},
	{
		name: "Balancely CRM",
		description:
			"Accounts management panel for tracking daily business activity.",
		tech: ["CRM", "Accounts", "Panel"],
		url: "http://balancely-crm.technobyteinnovations.in/",
		image: "/Images/balancely-crm.png",
	},
];

function ProjectPreview({ image, name }: { image: string | undefined; name: string }) {
	const [failed, setFailed] = useState(false);

	if (!image || failed) {
		return (
			<div className="preview">
				<span className="preview-fallback">{name.charAt(0)}</span>
			</div>
		);
	}

	return (
		<div className="preview">
			<img src={image} alt={`${name} screenshot`} loading="lazy" onError={() => setFailed(true)} />
		</div>
	);
}

export function Projects() {
	return (
		<Container id="projects">
			<div className="section-head">
				<ScrollAnimation animateIn="fadeInUp">
					<span className="eyebrow">03 · Projects</span>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
					<h2>Things I've Built</h2>
				</ScrollAnimation>
			</div>

			<div className="project-grid">
				{projects.map((project, i) => (
					<ScrollAnimation
						animateIn="fadeInUp"
						delay={0.1 * (i + 1) * 1000}
						key={project.name}
					>
						<article className="project-card">
							<ProjectPreview image={project.image} name={project.name} />
							<div className="body">
								<h3>{project.name}</h3>
								<p>{project.description}</p>
								<ul className="tech-list">
									{project.tech.map((tech) => (
										<li key={tech}>{tech}</li>
									))}
								</ul>
								<a
									className="visit"
									href={project.url}
									target="_blank"
									rel="noreferrer"
								>
									Visit Live Site <span className="arrow">→</span>
								</a>
							</div>
						</article>
					</ScrollAnimation>
				))}
			</div>
		</Container>
	);
}
