import { Container } from "./styles";
import wordpress from "../../assets/wordpress.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import php from "../../assets/php-icon.png";
import angular from "../../assets/angular-icon.png";
import Aneesh from "../../assets/aneesh/5.png";

const skills = [
  { img: reactIcon, alt: "React" },
  { img: angular, alt: "Angular" },
  { img: php, alt: "PHP" },
  { img: wordpress, alt: "WordPress" },
  { img: typescriptIcon, alt: "TypeScript" },
  { img: nodeIcon, alt: "Node" },
  { img: htmlIcon, alt: "HTML" },
  { img: cssIcon, alt: "CSS" },
  { img: boostrapIcon, alt: "Bootstrap" },
  { img: jsIcon, alt: "JavaScript" },
];

export function About() {
  return (
    <Container id="aboutme">
      <div className="section-head">
        <ScrollAnimation animateIn="fadeInUp">
          <span className="eyebrow">01 · About</span>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
          <h2>About me</h2>
        </ScrollAnimation>
      </div>

      <div className="about-center">
        <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
          <div className="portrait">
            <img src={Aneesh} alt="Aneesh Ajithkumar" loading="lazy" />
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.25 * 1000}>
          <h3 className="name">Aneesh Ajithkumar</h3>
          <p className="role">Full Stack Web Developer</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.35 * 1000}>
          <p className="intro">
            Full Stack Web Developer with over 10 years of experience designing
            and building responsive, high-performance websites and web
            applications. Specializing in clean, user-focused frontends and
            scalable, reliable backends, with a strong commitment to code
            quality, maintainability, and a seamless user experience.
          </p>
          <p className="extended">
            Beyond the browser, I'm a licensed ham radio operator{" "}
            <a href="https://www.qrz.com/db/VU3CVW" target="_blank" rel="noreferrer" className="call-link">
              <strong>VU3CVW</strong>
            </a>{" "}
            — a hobby that keeps my head in radio signals, antennas, and
            wireless communication. It's the same engineer's curiosity I bring
            to cloud infrastructure and deployment: wiring systems together so
            they're reliable, observable, and built to last.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.45 * 1000}>
          <div className="skill-pills">
            {skills.map((skill) => (
              <span className="pill" key={skill.alt}>
                <img src={skill.img} alt={skill.alt} />
                {skill.alt}
              </span>
            ))}
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.55 * 1000}>
          <a href="/resume.html" target="_blank" rel="noreferrer" className="resume-link">
            Download Resume
          </a>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
