import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";
import telegram from "../../assets/telegram.svg";
import { calculateExperience } from "../../utils/calculateExperience";

export function Hero() {
  // Career started in January 2016 (based on Optiologic Technologies start date)
  const experience = calculateExperience("2016-01-01");
  const years = experience.replace(/[^\d+]/g, "");

  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <span className="availability">
            <span className="dot" />
            Available for projects
          </span>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
          <p>
            Hi <img src={Hello} alt="Hello" width="20px" />, I'm
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Aneesh Ajithkumar</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
          <h3>Software Developer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <p className="small-resume">{experience}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
          <div className="cta">
            <NavHashLink smooth to="#contact" className="button">
              Contact Me
            </NavHashLink>
            <NavHashLink smooth to="#expertise" className="button outline">
              View Expertise
            </NavHashLink>
            <a href="/resume.html" target="_blank" rel="noreferrer" className="button resume">
              Download Resume
            </a>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <div className="stats">
            <div className="stat">
              <span className="stat-value">{years}</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-value">10+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat">
              <span className="stat-value">VU3CVW</span>
              <span className="stat-label">Ham Radio Call</span>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/aneesh-ajithkumar/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/aneeshaji"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B919746934344&text=Hello+Aneesh"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </a>
            <a
              href="https://t.me/aneeshajithkumar"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} alt="telegram" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.8 * 1000}>
          <img src={Illustration} alt="Ilustração" />
          <span className="corner-accent" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
