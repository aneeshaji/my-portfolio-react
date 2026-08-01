import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <div className="section-head">
        <ScrollAnimation animateIn="fadeInUp">
          <span className="eyebrow">05 · Contact</span>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
          <h2>Get In Touch</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <p className="subtitle">
            Have a project in mind? Let's build something great together.
          </p>
        </ScrollAnimation>
      </div>

      <div className="contacts">
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <a className="contact-card" href="mailto:me@aneeshajithkumar.online">
            <span className="icon-chip email">
              <img src={emailIcon} alt="Email" />
            </span>
            <span className="info">
              <span className="label">Email</span>
              <span className="value">me@aneeshajithkumar.online</span>
            </span>
          </a>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
          <a className="contact-card" href="tel:+919746934344">
            <span className="icon-chip phone">
              <img src={phoneIcon} alt="Phone No" />
            </span>
            <span className="info">
              <span className="label">Phone</span>
              <span className="value">(+91) 9746934344</span>
            </span>
          </a>
        </ScrollAnimation>
      </div>

      <Form />
    </Container>
  );
}
