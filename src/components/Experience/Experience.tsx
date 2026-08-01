import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

const experience = [
	{
		company: "RM India",
		location: "Trivandrum",
		date: "Jul 2021 — Present",
		role: "Senior Project Lead",
		summary: "Full-stack product development across React, Angular, PHP, and cloud.",
		current: true,
	},
	{
		company: "Yarab Technologies",
		location: "Trivandrum",
		date: "May 2020 — Jun 2021",
		role: "Senior Software Engineer",
		summary: "Shipped client-facing apps with JavaScript, PHP, Laravel, and WordPress.",
		current: false,
	},
	{
		company: "Optiologic Technologies",
		location: "Trivandrum",
		date: "Jan 2016 — Apr 2020",
		role: "Junior Software Engineer",
		summary: "Built responsive web applications across PHP, JavaScript, and WordPress.",
		current: false,
	},
];

export function Experience() {
	return (
		<Container id="experience">
			<div className="section-head">
				<ScrollAnimation animateIn="fadeInUp">
					<span className="eyebrow">04 · Experience</span>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
					<h2>Work Experience</h2>
				</ScrollAnimation>
			</div>

			<div className="experience-list">
				{experience.map((job, i) => (
					<ScrollAnimation
						animateIn="fadeInUp"
						delay={0.15 * (i + 1) * 1000}
						key={job.company}
					>
						<article className={`exp-row ${job.current ? "current" : ""}`}>
							<div className="row-head">
								<div className="title">
									<h3>{job.role}</h3>
									<p className="company">
										{job.company} <span className="sep">·</span> {job.location}
									</p>
								</div>
								<div className="meta">
									<span className="date">{job.date}</span>
									{job.current && <span className="badge">Current</span>}
								</div>
							</div>
							<p className="summary">{job.summary}</p>
						</article>
					</ScrollAnimation>
				))}
			</div>
		</Container>
	);
}
